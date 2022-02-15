// const timer = document.getElementById("main");

// const { start } = require("repl");

// let hour = 0;
let minute = 0;
let second = 0;
let count = 0;
let isRunning = false;
let timer = true;

function startTimer() {
  if (timer == false) alert("Please Turn Timer-> True");
  if (timer == true) return StopWatch();
  // if (isRunning == true) alert("already Running");
}
function stopTimer() {
  timer = false;
}
function resetTimer() {
  timer = false;
  // hour = 0;
  minute = 0;
  second = 0;
  count = 0;

  // document.getElementById("hour").innerHTML = hour;
  document.getElementById("minute").innerHTML = minute;
  document.getElementById("second").innerHTML = second;
  document.getElementById("msecond").innerHTML = count;
}
function StopWatch() {
  if (timer == true) {
    count = count + 1;

    if (count == 100) {
      second = second + 1;
      count = 0;
    }
    if (second == 60) {
      minute = minute + 1;
      second = 0;
    }
    // if (minute == 60) {
    //   hour = hour + 1;
    //   minute = 0;
    //   second = 0;
    // }

    // document.getElementById("hour").innerHTML = hour;
    document.getElementById("minute").innerHTML = minute + " : ";
    document.getElementById("second").innerHTML = second + " : ";
    document.getElementById("msecond").innerHTML = count;
    setTimeout("StopWatch()", 10);
  }
}
