let prompt = require("prompt-sync")();

let secret = Math.floor(Math.random() * 100) + 1;
let guessed = false;
let attempts = 0;
let guesses = [];

const guess = function(num) {
  num = isNaN(num) ? num : Number(num);
  if (isNaN(num)) {
    return "Not a number! Try again!";
  } else if (guesses.includes(num)) {
    return "Already Guessed!";
  } else if (num === secret) {
    attempts++;
    guessed = true;
    return "You got it! You took " + attempts + " attempts!";
  } else if (num < secret) {
    guesses.push(num);
    attempts++;
    return "Too Low!";
  } else if (num > secret) {
    guesses.push(num);
    attempts++;
    return "Too High!";
  }
}

while (guessed !== true) {
  //console.log(secret);
  //console.log("attempts: " + attempts);
  let answer = prompt("Guess a number: ");
  console.log(guess(answer));
}