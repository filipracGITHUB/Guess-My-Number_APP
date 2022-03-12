'use strict';

// console.log(document.querySelector(`.message`).textContent);

// document.querySelector(`.message`).textContent = `Correct Number!`;

// document.querySelector(`.number`).textContent = 13;
// document.querySelector(`.score`).textContent = 10;

// document.querySelector(`.guess`).value = 23;
let score = 20;
let highScore = 0;
let secretNumber = Math.floor(Math.random() * 20) + 1;
const displayMessage = function (message) {
  document.querySelector(`.message`).textContent = message;
};

//where there is no input
document.querySelector(`.check`).addEventListener(`click`, function () {
  let guess = Number(document.querySelector(`.guess`).value);
  if (!guess) {
    // document.querySelector(`.message`).textContent = `No number!`;
    displayMessage(`No number!`);
    //where the guess is correct
  } else if (guess === secretNumber) {
    displayMessage(`Correct number!`);
    document.querySelector(`.number`).textContent = secretNumber;
    document.querySelector(`body`).style.backgroundColor = `#60b347`;
    document.querySelector(`.number`).style.width = `30rem`;
    if (score > highScore) {
      highScore = score;
      document.querySelector(`.highscore`).textContent = score;
    }
    //when guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? `Too high!` : `Too low!`);
      score--;
      document.querySelector(`.score`).textContent = score;
    } else {
      displayMessage(`You lost the game!`);
      document.querySelector(`.score`).textContent = 0;
    }
  }

  //where the guess is too high
  //   } else if (guess > secretNumber) {
  //     if (score > 0) {
  //       document.querySelector(`.message`).textContent = `Too high!`;
  //       score--;
  //     } else {
  //       document.querySelector(`.message`).textContent = `You lost the game!`;
  //     }
  //     document.querySelector(`.score`).textContent = score;
  //     //where the guess is too low
  //   } else if (guess < secretNumber) {
  //     if (score > 0) {
  //       document.querySelector(`.message`).textContent = `Too low!`;
  //       score--;
  //       document.querySelector(`.score`).textContent = score;
  //     } else {
  //       document.querySelector(`.message`).textContent = `You lost the game!`;
  //       document.querySelector(`.score`).textContent = score;
  //     }
  //   }
});
//button again
document.querySelector(`.again`).addEventListener(`click`, function () {
  secretNumber = Math.floor(Math.random() * 20) + 1;
  score = 20;
  document.querySelector(`.score`).textContent = 20;
  displayMessage(`Start guessing...`);
  document.querySelector(`.number`).textContent = `?`;
  document.querySelector(`.guess`).value = '';
  document.querySelector(`body`).style.backgroundColor = `#222`;
  document.querySelector(`.number`).style.width = `15rem`;
});
