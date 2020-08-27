// В HTML есть пустой список ul#ingredients.

/* <ul id="ingredients"></ul> */

// В JS есть массив строк.

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
const parentUl = document.querySelector('#ingredients')

const createLi = (text) => {
    const li = document.createElement('li');
    li.textContent = text;
    return li
}
ingredients.forEach(ingredient =>{
    const createdLi = createLi(ingredient);
    parentUl.appendChild(createdLi)

})


// Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li, 
// после чего вставит все li за одну операцию в список ul.ingredients. Для создания DOM-узлов 
// используй document.createElement().
