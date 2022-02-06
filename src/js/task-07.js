const input = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

input.addEventListener('input', onTextChange);

console.dir(input);
console.dir(text);

function onTextChange(event) {
    text.style.fontSize = `${event.target.value}px`;
}