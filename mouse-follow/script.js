let main = document.querySelector('.main');
let cursor = document.querySelector('.cursor')

main.addEventListener("mousemove",function(evt) {

    cursor.style.left = `${evt.x}px`
    cursor.style.top = `${evt.y}px`
    
})