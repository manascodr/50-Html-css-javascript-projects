let ipt = document.querySelector('input')
let btn = document.querySelector('button')
let img = document.querySelector('img')

ipt.addEventListener('input', function(){
    if (ipt.value.trim() === '') {
        btn.disabled = true
    } else {
        btn.disabled = false
    }
})

img.addEventListener('click', function(){
   if (ipt.type == 'password') { 
    ipt.type ='text' 
    img.src = './icons/hide.svg'
}
else {
    ipt.type = 'password'
    img.src = './icons/unhide.svg'
}
})




