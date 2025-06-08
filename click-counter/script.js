let count = document.querySelector('p')
let btn = document.querySelector('button')
let resetBtn = document.querySelector('#reset')

let counter = 0;

btn.addEventListener('click',function(){
    counter++
    count.innerText = counter
    console.log(counter);
    
})

resetBtn.addEventListener('click',function(){
    counter = 0
    count.innerText = 0
    console.log(counter);
    
})