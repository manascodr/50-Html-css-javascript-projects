let display = document.querySelector('.display')
let start = document.querySelector('#start')
let stop = document.querySelector('#stop')
let reset = document.querySelector('#reset')

let sec = 0
let min = 0
let st1


start.addEventListener('click', function(){

 st1 =  setInterval(function(){
        sec++
        display.innerText = `0${min}:${sec}`
        if (sec>=60) {
            min++
            sec = 0
            display.innerText = `${min}:${sec}`
        } 
    }, 1000)
})

stop.addEventListener('click', function(){
    clearInterval(st1)
})
reset.addEventListener('click', function(){
    sec = 0
    min = 0
    display.innerText = `00:00`
    clearInterval(st1)
})