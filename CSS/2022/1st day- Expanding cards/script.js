const panels = document.querySelectorAll(".panel");
// console.log(panels[1]);
// selects all panels and puts them in to array
panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    //   added event in a loop for each panel
    removeActiveClasses();
    // calls removeActiveClasses function
    panel.classList.add("active");
    // adds a class on click
  });
});

function removeActiveClasses() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}
//  removes active class from all panel with loop
