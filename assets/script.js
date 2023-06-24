const qrCodeImg = document.querySelector(".qrcode-img");
const userInput = document.querySelector("#userInput");
const noUserInput = document.querySelector("#invalidInput");
const qrSize = document.querySelector("#qrSize");
const qrBtnContainer = document.querySelector(".qr-buttons");
const downloadSrc = document.querySelector("#downloadSrc");

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
	downloadSrc.href = qrSource.src;
}

// generate QrCode when pressed Enter key down 
userInput.addEventListener("keydown", (e) => {
	if(e.key === "Enter")
		generateNewQrCode();
});

// button click listener 
qrBtnContainer.addEventListener("click", (e) => {

	const clickedBtn = e.target.id;
	
	if(clickedBtn === "genBtn")
		generateNewQrCode();
	else
		downloadQrCode();
});
