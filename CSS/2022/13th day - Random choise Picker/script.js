"use strict";

const tagsEl = document.getElementById("tags");
const textArea = document.getElementById("textarea");

textArea.focus();
// when page is loaded it will automaticaly select textarea so you can start typing straight away

textArea.addEventListener("keyup", (e) => {
  createTags(e.target.value);

  if (e.key === "Enter") {
    setTimeout(() => {
      e.target.value = "";
    }, 10);
    randomSelect();
    // if Enter is pressed we clear target valuse and run RandomSelect function
  }
});

function createTags(input) {
  const tags = input
    .split(",")
    // splits the input in array by designated keys
    .filter((tag) => tag.trim() !== "")
    // trim any white space
    .map((tag) => tag.trim());

  tagsEl.innerHTML = "";

  tags.forEach((tag) => {
    const tagEl = document.createElement("span");
    tagEl.classList.add("tag");
    tagEl.innerText = tag;
    tagsEl.appendChild(tagEl);
  });
}

function randomSelect() {
  const times = 30;
  const interval = setInterval(() => {
    const randomTag = pickRandomTag();
    highligthTag(randomTag);
    setTimeout(() => {
      unHighligthTag(randomTag);
    }, 100);
  }, 100);

  setTimeout(() => {
    clearInterval(interval);
    setTimeout(() => {
      const randomTag = pickRandomTag();
      highligthTag(randomTag);
    }, 100);
  }, times * 100);
}

function pickRandomTag() {
  const tags = document.querySelectorAll(".tag");
  return tags[Math.floor(Math.random() * tags.length)];
}

function highligthTag(tag) {
  tag.classList.add("highlight");
}

function unHighligthTag(tag) {
  tag.classList.remove("highlight");
}
