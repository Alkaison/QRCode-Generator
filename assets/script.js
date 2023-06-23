const qrCodeImg = document.querySelector(".qrcode-img");
const userInput = document.querySelector("#userInput");
const noUserInput = document.querySelector("#invalidInput");
const qrSize = document.querySelector("#qrSize");
const genBtn = document.querySelector("#genBtn");
const downloadBtn = document.querySelector("#downloadBtn");
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

// generate QrCode when clicked on generate button 
genBtn.addEventListener("click", generateNewQrCode);

// generate QrCode when pressed Enter key down 
userInput.addEventListener("keydown", (e) => {
	if(e.key === "Enter")
		generateNewQrCode();
})

// download button click event to download the QrCode 
downloadBtn.addEventListener("click", downloadQrCode);
