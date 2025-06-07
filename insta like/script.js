let heartBtn = document.querySelector('#heart')
let heartpng= document.querySelector('#heartpng')

heartBtn.addEventListener('dblclick',function(){
    console.log(heartBtn);
    heartpng.style.display = 'block'
    
    setTimeout(function(){
        heartpng.style.display = 'none'
    },1000)
})