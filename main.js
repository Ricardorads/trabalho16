const input = document.querySelector('input')

input.addEventListener(`keypress`, ()=> {
    let inputLength = input.value.length

    if(inputLength == 5 || inputLength == 7) {
        input.value += '.'
    } else if (inputLength == 11 ) {
        input.value +='-'
    }
})