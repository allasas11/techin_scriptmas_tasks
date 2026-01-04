const bookPrice = 12.50;
const cdPrice = 9.99;
const usbPrice = 15.00;

const minPrice = Math.min(bookPrice, cdPrice, usbPrice);

document.getElementById("shopping-output").textContent = `Peter will spend ${minPrice.toFixed(2)} euros.`;
