let input= document.querySelector('.input')
let result= document.querySelector('.result')
let cel = document.querySelector('.c')
let feh = document.querySelector('.f')
let btns = document.querySelector('.btn')


cel.addEventListener('click', function(){
    if (isNaN(input.value) || input.value.trim() === "") {
    result.value = "Enter a valid number";
    return;
}

    let rel = (parseFloat(input.value) - 32) * 5/9
    result.value = rel.toFixed(2) + '°C'
})
feh.addEventListener('click', function(){
    if (isNaN(input.value) || input.value.trim() === "") {
    result.placeholder = "Enter a valid number";
    return;
}

    let rel = (parseFloat(input.value) * (9/5)) + 32
    result.value = rel.toFixed(2) + '°F'
})
