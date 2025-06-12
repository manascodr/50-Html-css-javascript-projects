let input = document.querySelector('input')
let btn = document.querySelector('button')
let img = document.querySelector('img')

img.addEventListener('click', function(){
   if (input.type == 'password') { 
    input.type ='text' 
    img.src = './icons/hide.svg'
}
   else {
    input.type = 'password'
    img.src = './icons/unhide.svg'
}
})


// img.addEventListener('click', () => {
//     const isPassword = input.type === 'password';
//     input.type = isPassword ? 'text' : 'password';
//     img.src = isPassword ? './icons/hide.svg' : './icons/unhide.svg';
// });
