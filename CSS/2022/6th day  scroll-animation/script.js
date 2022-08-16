const boxes = document.querySelectorAll(".box");

window.addEventListener("scroll", checkBoxes);

checkBoxes();

function checkBoxes() {
  const triggerBottom = (window.innerHeight / 5) * 4;
  //   basicals sets that at 80 % of size its marked as TriggerBottom

  boxes.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;
    // finds body parameters

    if (boxTop < triggerBottom) {
      box.classList.add("show");
    } else {
      box.classList.remove("show");
    }
  });
}

// can use animate on scroll library or jquery for this
