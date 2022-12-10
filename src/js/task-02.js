const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];



const ingredientListEl = document.querySelector('#ingredients');

const makeIngredientsItem = value => {
return value.map((ingredient) => {
  const ingredientItem = document.createElement('li');
  ingredientItem.classList.add('item');
  ingredientItem.textContent = ingredient;
  ingredientListEl.append(ingredientItem);
})
}
console.dir(ingredientListEl);
makeIngredientsItem(ingredients);



