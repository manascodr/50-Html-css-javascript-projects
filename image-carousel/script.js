const images = [
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
  "https://plus.unsplash.com/premium_photo-1750343360238-b6861fc1f95b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8",
  "https://plus.unsplash.com/premium_photo-1749488454750-d383b818bd00?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8",
  "https://plus.unsplash.com/premium_photo-1747054587747-bd631e58c312?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyOHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1750688650545-d9e2a060dfe8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4fHx8ZW58MHx8fHx8",
  "https://images.unsplash.com/photo-1750517896388-672eb820110c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzNHx8fGVufDB8fHx8fA%3D%3D",
];

let prv = document.querySelector("#prevBtn");
let next = document.querySelector("#nextBtn");
let img = document.querySelector("#carousel");

let count = 0;

next.addEventListener("click", function () {
  if (count < images.length - 1) {
    count++;
    console.log(count);

    img.src = images[count];
  }
});
prv.addEventListener("click", function () {
  if (count > 0) {
    count--;
    img.src = images[count];
  }
});

