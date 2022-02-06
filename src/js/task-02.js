const ingredients = [
    'Potatoes',
    'Mushrooms',
    'Garlic',
    'Tomatos',
    'Herbs',
    'Condiments',
];
const ingredientsList = document.querySelector('#ingredients');

const ingredientsItems = items => items.map(item => {
    const itemsElement = document.createElement('li');
    itemsElement.textContent = item;
    return itemsElement;
})
ingredientsList.append(...ingredientsItems(ingredients));