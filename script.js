// Test 1: Click counter
let steps = 0;

let button = document.getElementById("stepButton");
let count = document.getElementById("count");

button.addEventListener("click", function() {
  steps = steps + 1;
  count.textContent = steps;
  console.log("Steps:", steps);
});

// Test 2: Hover interaction
let box = document.getElementById("stepBox");
let story = document.getElementById("story");

box.addEventListener("mouseover", function() {
  story.textContent = "8,000 steps: walked to class and went grocery shopping.";
  console.log("Mouse is over the box");
});

box.addEventListener("mouseout", function() {
  story.textContent = "Hover over the box to learn more.";
  console.log("Mouse left the box");
});
