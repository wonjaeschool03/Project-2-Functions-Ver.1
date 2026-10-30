/*
let steps = 0;

let button = document.getElementById("stepButton");
let count = document.getElementById("count");

button.addEventListener("click", function() {
  steps = steps + 1;
  count.textContent = steps;
  console.log("Steps:", steps);
});

let totalClicks = 0;
let myRandomNum;
let myDiceRoll;

function setup (){

}

function draw (){

}

function mouseClicked(){
  totalClicks++;

  myDiceRoll = Math.floor(random(1,3));

  if (myDiceRoll === 3){
    myRandomNum = Math.floor(random(10,100));
    totalClicks += myRandomNum;
  }

  document.getElementById("myClicks").innerHTML = totalClicks;
}
*/


let steps = 0;
let myRandomNum;
let myDiceRoll;

let button = document.getElementById("stepButton");
let count = document.getElementById("count");

button.addEventListener("click", function() {

  steps = steps + 1;

  myDiceRoll = Math.floor(Math.random() * 3) + 1;

  if (myDiceRoll === 3) {
    myRandomNum = Math.floor(Math.random() * 90) + 10;
    steps = steps + myRandomNum;
  }

  count.textContent = steps;

  if (steps >= 1000) {
  message.textContent = "🏆 You won the grand prize!";
} else if (steps >= 500) {
  message.textContent = "🎉 Amazing! You reached 500 steps!";
} else if (steps >= 100) {
  message.textContent = "🎊 Congratulations! You reached 100 steps!";
}

  console.log("Steps:", steps);
  console.log("Dice Roll:", myDiceRoll);

});

