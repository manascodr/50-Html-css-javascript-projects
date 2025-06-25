let display = document.querySelector(".display");
let start = document.querySelector("#start");
let stop = document.querySelector("#stop");
let reset = document.querySelector("#reset");

let sec = 0;
let min = 0;
let st1;

function formatTime(n) {
  return n < 10 ? "0" + n : n;
}

start.addEventListener("click", function () {
  // prevent multiple intervals
  //   If you don't have that line, and click "Start" again and again, the browser will start multiple timers at once, all increasing the seconds in parallel. That makes your stopwatch run faster than it should!
  // return exits the current function immediately.
  if (st1) return;
  start.disabled = true;

  st1 = setInterval(function () {
    sec++;
    if (sec >= 60) {
      min++;
      sec = 0;
    }
    display.innerText = `${formatTime(min)}:${formatTime(sec)}`;
  }, 1000);
});

stop.addEventListener("click", function () {
  clearInterval(st1);
  st1 = null;
  start.disabled = false;
});
reset.addEventListener("click", function () {
  st1 = null;
  sec = 0;
  min = 0;
  display.innerText = `00:00`;
  clearInterval(st1);
  start.disabled = false;
});
