
let day = 1;
let clicks1 = 0;
let clicks2 = 0;
let cart1 = [];
let cart2 = [];

let buttons = document.querySelectorAll(".add-button");

buttons.forEach(function(button) {
  button.addEventListener("click", function() {
    let name = button.getAttribute("data-name");

    if (day === 1) {
      clicks1 = clicks1 + 1;
      cart1.push(name);
      document.getElementById("bagCount").textContent = clicks1;
      alert("Added " + name + "! Clicks: " + clicks1);
    } else {
      clicks2 = clicks2 + 1;
      cart2.push(name);
      document.getElementById("bagCount").textContent = clicks2;
      alert("Added " + name + "! Clicks: " + clicks2);
    }
  });
});

document.getElementById("cartButton").addEventListener("click", function() {
  document.getElementById("cartPopup").style.display = "flex";

  if (day === 1) {
    document.getElementById("cartItems").innerHTML = cart1.join("<br>");
    document.getElementById("cartTotal").textContent = "Items: " + clicks1;
  } else {
    document.getElementById("cartItems").innerHTML = cart2.join("<br>");
    document.getElementById("cartTotal").textContent = "Items: " + clicks2;
  }
});

document.getElementById("closeCart").addEventListener("click", function() {
  document.getElementById("cartPopup").style.display = "none";
});

document.getElementById("backButton").addEventListener("click", function() {
  document.getElementById("cartPopup").style.display = "none";
});

document.getElementById("nextButton").addEventListener("click", function() {
  if (day === 1) {
    day = 2;
    document.getElementById("day1").style.display = "none";
    document.getElementById("day2").style.display = "flex";
    document.getElementById("dayTitle").textContent = "Day 2";
    document.getElementById("dayDescription").textContent = "Shopping for enjoyment.";
    document.getElementById("nextButton").textContent = "Compare Both Days";
    document.getElementById("bagCount").textContent = clicks2;
  } else {
    document.getElementById("day2").style.display = "none";
    document.getElementById("dayTitle").style.display = "none";
    document.getElementById("dayDescription").style.display = "none";
    document.getElementById("nextButton").style.display = "none";
    document.getElementById("cartButton").style.display = "none";
    document.getElementById("result").style.display = "block";
    document.getElementById("day1Result").textContent = "Day 1: " + clicks1 + " clicks";
    document.getElementById("day2Result").textContent = "Day 2: " + clicks2 + " clicks";
    document.getElementById("comparison").textContent = "Numbers don't tell the whole story.";
  }
});

document.getElementById("restartButton").addEventListener("click", function() {
  location.reload();
});
