
const form = document.getElementById('generate-form');

const qr = document.createElement('qrcode');

const onGenerateSubmit=(e) => {
    e.preventDefault();


const url = document.getElementById('url').value;
const size = document.getElementById('size').value;
// Exception handling for emply URl
if (url =='') alert('Please enter a valid url'); //further design improve
else {
showSpinner();
setTimeout(() => {
hideSpinner();
generateQRCode(url, size);
},1000)

}
};

// generating QR Code 
const generateQRCode=(url,size) => {
    var qrcode = new QRCode('qrcode', {
        text: url,
        width: size,
        height: size,
        
    });
}
// getting dom spinner from HTML document
const spinner = document.getElementById('spinner');

const showSpinner = (e) =>{
    spinner.style.display = 'block';
}

const hideSpinner = (e) =>{
    spinner.style.display = 'none';
}
form.addEventListener('submit',onGenerateSubmit);