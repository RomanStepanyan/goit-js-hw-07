// Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input) 
// и изменяет инлайн-стиль span#text обновляя свойство font-size. 
// В результате при перетаскивании ползунка будет меняться размер текста.

const inputSizeControl = document.querySelector('#font-size-control')
const spanText = document.querySelector('#text')
inputSizeControl.addEventListener('input', (event) => {
    const { target } = event
    spanText.style.fontSize = `${target.value*2}%`
    console.log(typeof(target.value))
})

