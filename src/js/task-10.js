const refs = {
    boxes: document.querySelectorAll('#boxes'),
    createBtn: document.querySelector('[data-create]'),
    destroyBtn: document.querySelector('[data-destroy]'),
    divAmountEl: document.querySelector('input'),
}
console.log(refs.divAmountEl.value)
refs.createBtn.addEventListener('click', takeDivAmout);
refs.destroyBtn.addEventListener('click', destroyBoxes);

function takeDivAmout(event) {
    event.preventDefault();

    if (refs.divAmountEl.value >= 1 && refs.divAmountEl.value <= 100) {
        console.log(refs.divAmountEl.value);
        const amount = refs.divAmountEl.value;
        createBoxes(amount);
    } else if (refs.divAmountEl.value == '') {
        alert('Input value');
    } else {
        alert('Invalid value');
    }
}

function createBoxes(amount) {

    const boxesArr = [];
    const sizeInitial = 30;
    for (let i = 0; i < amount; i += 1) {
        const div = document.createElement('div');
        div.style.width = sizeInitial + i * 10 + 'px'
        div.style.height = sizeInitial + i * 10 + 'px'
        div.style.backgroundColor = getRandomHexColor();
        boxesArr.push(div);
    }
    boxes.append(...boxesArr);
    console.log(boxesArr);
}

function destroyBoxes(event) {
    boxes.innerHTML = '';
}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}