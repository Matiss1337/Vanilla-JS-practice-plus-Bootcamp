const labels = document.querySelectorAll(".form-control label");

labels.forEach((label) => {
  label.innerHTML = label.innerText
    .split("")
    // spliting it into the array
    //   inner HTML is the Element, but inner text is all the xommas and bracketys included
    .map(
      (letter, idx) =>
        `<span style="transition-delay:${idx * 50}ms" >${letter}</span>`
      // transition delay addsdeley for eash letter and it uses index time 50 ms to set delay TimeRanges, pretty neat
    )
    // uses something for each object in the array
    .join("");
  // returns it all back in a string
});
// splits the content and then add spans around letters and then joins everything together as a string again
