function randomColor(){
    let r = Math.floor(Math.random() *256)
    let g = Math.floor(Math.random() *256)
    let b = Math.floor(Math.random() *256)
    let rand= `rgb(${r},${g},${b})`
    document.querySelector('.main').style.backgroundColor = rand
    document.querySelector('#color').innerText = rand
    navigator.clipboard.writeText(rand)
}

// event listener for button click
document.querySelector('#btn').addEventListener('click',randomColor)

// initial call
randomColor()
