let input = document.querySelector("input");
let btn = document.querySelector("button");
let info = document.querySelector(".info");

// let target = Math.floor(Math.random() * 11);
// console.log(target);
let attempts = 0;
let count = 0


btn.addEventListener("click", function () {
    if (count===0) {
        target = Math.floor(Math.random() * input.value);
        console.log(target);
        count++
        info.innerHTML = `Guess a Number between 1-${input.value}`
        input.value = ""; 
        btn.innerHTML = 'guess'
    } else {
    if (Number(input.value) <= 11) {
    attempts++;

    if (input.value < target) {
      info.innerHTML = "Value is too low";
      info.style.color = "white";
    } else if (input.value > target) {
      info.innerHTML = "Value is too high";
      info.style.color = "white";
    } else {
      info.innerHTML = `🎉 Correct! It took you ${attempts} tries.`;
      info.style.color = "yellow";
    }
  } else {
    info.innerHTML = "Enter valid Number between 1-10";
    info.style.color = "red";
  }

  input.value = ""; 
    }


});
