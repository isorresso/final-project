const height = 3000;
let points = 0;
let health = 100;
let money = 50;
let minus = 0;
let distance = height;

// messages
let m1 = "You're stuck on earth and know that you need " + height + " points to get into The Good Place. Your goal is to get there as fast as you can. Just don't do anything annoying and try to stay healthy along the way. -Michael (Architect of Neighborhood 12358W)";
let m3 = "Oh, no! Looks like you took your socks and shoes off in a public place. Minus 100 points!";
let m4 = "Oh, snap! You died on your way to The Good Place. Unfortunately, that's never happened before. We're sticking you in the Medium Place until we decide what to do.";
let m5 = "Congratulations! You've reached The Good Place! Doug Forcett would be proud.";
let m6 = "You must select an option before you click Go.";
let m7 = "Nice! Janet, give them 100 points!";
let m8 = "That was nice! You're getting there!";
let m9 = "You're out of money!";
let m10 = "Wow, humans really think they need self care even when their health is at 100 percent. No points!"
let m11 = "There's no time to waste! Keep going!"


let message = m1;

writeResults();

const goButton = document.querySelector('#go');

goButton.addEventListener('click', playerResult);

function playerResult() {
  if (health <= 0) {
    message = m4;
    gooddeed.checked = false;
    lunch.checked = false;
    selfcare.checked = false;
  } else if (gooddeed.checked) {
    gooddeedAction();
  } else if (lunch.checked) {
    lunchAction();
  } else if (selfcare.checked) {
    selfcareAction();
  } else {

    message = m6;
  }

  distance = height - points;

  writeResults();
}


function gooddeedAction() {
if (points === 3000) {
	message = m5;
} else if (points <= 2900) {
points += 100;
 health -= 10;
 message = m7;
	minusPoints();
  }
  gooddeed.checked = false; /* keep */
}

function lunchAction() {
if (money === 0) {
	message = m9;
} else if (health >= 100) {
  message = m10;
} else if (health <= 90) {
	money -= 10;
  health += 10;
  message = m8;
}
lunch.checked = false; /* keep */
}

function selfcareAction() {
if (health === 100) {
	message = m10;
} else if (health >= 70) {
	message = m11;
} else if (health <= 60) {
	health += 10;
  message = m8;
}
  selfcare.checked = false; /* keep */
}


function minusPoints() {
let num = Math.floor(Math.random() * 100);
if (num <= 5) {
	points -= 100;
  message = m3;
}
}

function writeResults() {
  document.querySelector("#points").textContent = points;
  document.querySelector("#health").textContent = health;
  document.querySelector("#money").textContent = money;
  document.querySelector("#distance").textContent = distance;
  document.querySelector("#narration").textContent = message;
}
gooddeed
