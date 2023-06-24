const qrCodeImg = document.querySelector(".qrcode-img");
const userInput = document.querySelector("#userInput");
const noUserInput = document.querySelector("#invalidInput");
const qrSize = document.querySelector("#qrSize");
const qrBtnContainer = document.querySelector(".qr-buttons");

// Generate initial QR Code 
let qrCode = new QRCode(qrCodeImg, {
	text: "https://github.com/Alkaison",
	width: 256,
	height: 256,
	colorDark : "#FFFFFF",
	colorLight : "#023e7d",
	correctLevel : QRCode.CorrectLevel.H
});

// generate new qrCode and show it on screen 
const generateNewQrCode = () => {

	// get values selected by user 
	const getText = userInput.value;
	const getSize = qrSize.value;

	// check if input field is empty 
	if(getText != '')
	{
		// clear previous QrCode 
		qrCodeImg.innerHTML = '';

		// reset the error 
		noUserInput.style.display = "none";
		userInput.style.border = "2px solid transparent";

		// generate new QrCode 
		qrCode = new QRCode(qrCodeImg, {
			text: getText,
			width: getSize,
			height: getSize,
			colorDark : "#FFFFFF",
			colorLight : "#023e7d",
			correctLevel : QRCode.CorrectLevel.H
		});
	}
	else
	{
		// format error message to display 
		noUserInput.style.display = "block";
		userInput.style.border = "2px solid red";
		userInput.focus();
	}
}

// download the qrCode 
const downloadQrCode = () => {
	
	// set updated qrCode src
	const qrSource = qrCodeImg.querySelector("img");
	const link = document.createElement('a');

	// set downloading file name 
	link.setAttribute("download", "QR-Code-Made-By-Alkaison.png");
	link.setAttribute("href", qrSource.src);

	// append the link to the button 
	qrBtnContainer.appendChild(link);

    // trigger the download by simulating a click on the link 
    link.click();

    // remove the link from the button 
    qrBtnContainer.removeChild(link);
}

// generate QrCode when pressed Enter key down 
userInput.addEventListener("keydown", (e) => {
	if(e.key === "Enter")
		generateNewQrCode();
});

// button click listener 
qrBtnContainer.addEventListener("click", (e) => {

	// get clicked element ID 
	const clickedBtn = e.target.id;

	// execute functions as per button ID  
	if(clickedBtn === "genBtn")
		generateNewQrCode();
	else if(clickedBtn === "downloadBtn")
		downloadQrCode();
});
