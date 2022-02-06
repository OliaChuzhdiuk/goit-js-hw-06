const allCategories = document.querySelectorAll('.item');
console.log(`Number of categories: ${allCategories.length}`);


const nameCategories = [...allCategories]
    .map(
        categories => `Category: ${categories.children[0].textContent}
Elements: ${categories.children[1].children.length}`
    )
    .join("\n");
console.log(nameCategories);