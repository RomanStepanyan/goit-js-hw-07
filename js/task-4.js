// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

//     Создай переменную counterValue в которой будет хранится текущее значение счетчика.
//     Создай функции increment и decrement для увеличения и уменьшения значения счетчика
//     Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

const decrement = document.querySelector('#counter').firstElementChild
const increment = document.querySelector('#counter').lastElementChild
const counterValue = document.querySelector('#value')

decrement.addEventListener('click', () => {
    counterValue.textContent = Number(counterValue.textContent) - 1
})
increment.addEventListener('click', () => {
    counterValue.textContent = Number(counterValue.textContent) + 1
})

