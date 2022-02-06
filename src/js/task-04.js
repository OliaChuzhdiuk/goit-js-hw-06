let counterValue = 0;

const refs = {
    incrementBtn: document.querySelector('[data-action="increment"]'),
    decrementBtn: document.querySelector('[data-action="decrement"]'),
    counterIndication: document.querySelector('#value'),
};

refs.incrementBtn.addEventListener('click', onIncrementValue);
refs.decrementBtn.addEventListener('click', onDecrementValue);

function onIncrementValue() {
    counterValue += 1;
    refs.counterIndication.textContent = counterValue;
}

function onDecrementValue() {
    counterValue -= 1;
    refs.counterIndication.textContent = counterValue;
}