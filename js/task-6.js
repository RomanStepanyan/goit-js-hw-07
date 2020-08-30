// Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое на правильное количество символов.
    // Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
    // Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.

// Для добавления стилей, используй CSS-классы valid и invalid.

const inputRef = document.querySelector('#validation-input')
const dataLength = inputRef.getAttribute('data-length')

inputRef.addEventListener('change', event => {    

    if (event.target.value.length < dataLength){
        inputRef.classList.add('invalid');
    }else if (event.target.value.length >= dataLength){
        inputRef.classList.remove('invalid')   
        inputRef.classList.add('valid')
    }
    
    // if (event.target.value.length >= dataLength){   
    //     inputRef.classList.remove('invalid')   
    //     inputRef.classList.add('valid')
    // }else if (event.target.value.length === 0) {
    //     inputRef.classList.remove('invalid');
    //     inputRef.classList.remove('valid')
    // } else {
    //     inputRef.classList.remove('valid')
    //     inputRef.classList.add('invalid')
    // }
})


