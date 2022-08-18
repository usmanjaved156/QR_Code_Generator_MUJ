
const form = document.getElementById('generate-form');

const qr = document.createElement('qrcode');

const onGenerateSubmit=(e) => {
    e.preventDefault();
    clearUI();

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

setTimeout(() =>{
    const saveURL =qr.querySelector('img').src;

},50)
createSaveBtn(saveURL);

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

// Clear UI

const clearUI = (e) =>{
    qr.innerHTML = '';
    const saveLink = document.getElementById('save-link'); 
    if (saveLink) saveLink.remove();
}
const createSaveBtn = (saveURL) =>{

const link = document.createElement('a');
link.id = 'save-link';
link.classList= 'bg-red-500 hover:bg-red-700 text-white font-bold py-2 rounded w-1/3 m-auto my-5';
link.href = saveURL;
link.download = 'qrcode';
link.innerHTML = 'Download QR Code';
document.getElementById('generated').appendChild(link);
}

hideSpinner();



form.addEventListener('submit',onGenerateSubmit);