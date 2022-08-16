//  window.addEventListener("keydown", (e) => {
//    console.log(e.code);
//  });

// // keydown is i key press and window listens to whole window

const insert = document.getElementById("insert");

window.addEventListener("keydown", (event) => {
  insert.innerHTML = `        <div class="key">
  ${event.key === " " ? "Space" : event.key}
//   if space the shows "Space" otherwise the pressed key
  <small>event.key</small>
</div>
<div class="key">
${event.keyCode}
  <small>event.keyCode</small>
</div>
<div class="key">
${event.code}
  <small>event.code</small>
</div>`;
});

// adds the html but add ${with the event.code etc inside}
