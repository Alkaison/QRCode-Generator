# QR Code Generator

A QR code generator built using HTML, CSS, and JavaScript, along with the qrcodejs library. It allows users to generate QR codes of different sizes (128x128, 256x256, and 512x512) by encoding various types of information such as URLs, text, contact information, or Wi-Fi credentials into scannable codes. The generated QR codes can be easily downloaded for sharing and quick access. Checkout here: https://alkaison.github.io/QRCode-Generator/ 

## Features

- Generates QR codes for URLs, text, contact information, or Wi-Fi credentials.
- Supports QR code sizes of 128x128, 256x256, and 512x512.
- Provides a convenient download option for saving generated QR codes.
- Lightweight and easy to use.
- Supports customization through HTML, CSS, and JavaScript.

## Screenshots 

![QR Code Generator](https://github.com/Alkaison/QRCode-Generator/assets/98116504/2361ad08-2a47-42d0-ab75-1241dfb196f7)

## Usage

To use the QR code generator in your own project, follow these steps:

1. Clone the repository or download the source code.
2. Include this script in your `index.html` file to include the QR Code library:

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.js" integrity="sha512-is1ls2rgwpFZyixqKFEExPHVUUL+pPkBEPw47s/6NDQ4n1m6T/ySeDW3p54jp45z2EJ0RSOgilqee1WhtelXfA==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
```

3. Create an HTML container element where the QR code will be displayed:

```html
<div id="qrcode"></div>
```

4. Initialize the QR code generator by calling the `generateQRCode` function with the desired options:

```javascript
const qrCodeImg = document.querySelector("#qrcode");

let qrCode = new QRCode(qrCodeImg, {
	text: "https://github.com/Alkaison",
	width: 256,
	height: 256,
	colorDark : "#FFFFFF",
	colorLight : "#023e7d",
	correctLevel : QRCode.CorrectLevel.H
});
```

## Contributing

Contributions to the QR code generator are welcome! If you would like to contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and test thoroughly.
4. Commit your changes with clear and descriptive commit messages.
5. Push your branch to your forked repository.
6. Submit a pull request with a detailed explanation of your changes.

Please ensure that your code adheres to the existing coding style and includes appropriate documentation.

## License

This project is licensed under the [MIT License](./LICENSE). Feel free to use, modify, and distribute the code as per the terms of the license.

## Credits

The QR code generator utilizes the [qrcode.js](https://github.com/davidshimjs/qrcodejs) library by David Shim.

## Feedback and Support

If you have any questions, suggestions, or issues regarding the QR code generator, please open an issue on the repository. We appreciate your feedback and will do our best to assist you.

Happy QR code generating!
