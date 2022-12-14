const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];



const ingredientListEl = document.querySelector('#ingredients');

const ingredientItem = ingredients.map((ingredient) => {
  const liEl  = document.createElement('li');
  liEl.classList.add('item');
  liEl.textContent = ingredient;
  return liEl;
})

ingredientListEl.append(...ingredientItem);





