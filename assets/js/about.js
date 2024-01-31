const texts = [
    "math nerd.",
    "machine learning engineer.",
    "data scientist.",
    "billie eilish stan.",
    "chess player.",
    "twitter shitposter.",
    "wiki editor.",
    "occasional blogger.",
]; 
let count = 0;
let index = 0;
let currentText = '';
let letter = '';

(function type() {
    if (count === texts.length) {
        count = 0;
    }
    currentText = texts[count];
    letter = currentText.slice(0, ++index);

    document.querySelector('.type-text p').textContent = letter;
    if (letter.length === currentText.length) {
        count++;
        index = 0;
        setTimeout(type, 1000);
    } else {
        setTimeout(type, 200);
    }
}());
