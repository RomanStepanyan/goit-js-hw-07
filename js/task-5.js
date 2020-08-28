// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), 
// подставляет его текущее значение в span#name-output. 
// Если инпут пустой, в спане должна отображаться строка 'незнакомец'.

const inputField  = document.querySelector('#name-input');
const spanValue = document.querySelector('#name-output')
inputField.addEventListener('input', event => {
    event.target.value ? spanValue.textContent = event.target.value : spanValue.textContent = 'незнакомец'
})