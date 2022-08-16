const loadText = document.querySelector(".loading-text");
const bgt = document.querySelector(".bg");

let load = 0;

let int = setInterval(blurring, 30);

function blurring() {
  load++;

  if (load > 99) {
    clearInterval(int);
  }
  loadText.innerText = `${load}%`;
  loadText.style.opacity = scale(load, 0, 100, 1, 0);
  bgt.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
  //   the numbers are from 0 to 100 u want the set parameter, this time pixerls to go 30 to 0
}

const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};
// stolen from stack overflow, connext to ranges and u can set 1 to 100 goinag altering other 100 to 0 or something like that
