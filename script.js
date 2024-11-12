let inputtext = document.getElementById("inputtext");
let image = document.getElementById("image");
let imagebox = document.getElementById("imagebox");

function Generateqr() {
    if (inputtext.value.length > 0) {
        image.src =
            "https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=" +
            inputtext.value;
        imagebox.classList.add("show");
    } else {
        inputtext.classList.add("error");
        setTimeout(() => {
            inputtext.classList.remove("error");
        }, 1000);
    }
}