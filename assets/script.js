const qrCodeImg = document.querySelector(".qrcode-img");

// Generate initial QR Code 
let qrCode = new QRCode(qrCodeImg, {
	text: "https://github.com/Alkaison",
	width: 256,
	height: 256,
	colorDark : "#FFFFFF",
	colorLight : "#023e7d",
	correctLevel : QRCode.CorrectLevel.H
});

/* const qrCodeImg = document.querySelector(".qrcode-img");

var qr = new QRCode(qrCodeImg, "https://github.com/Alkaison");

var qr = new QRCode(qrCodeImg, "Noob Dev");

var qr = new QRCode(qrCodeImg, {
	text: "yo guys!",
	width: 128,
	height: 128,
	colorDark : "#000000",
	colorLight : "#ffffff",
	correctLevel : QRCode.CorrectLevel.H
});

// console.log(qr);

qr.clear; // clear the code.

qr.makeCode("http://olopo.com"); // make another code.

new QRCode(document.getElementById("qrcode"), "http://jindo.dev.naver.com/collie"); */
