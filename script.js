'use strict';
/* Write your code below. Good luck! 🙂 */

// generate random number
// compare random number to my guess


// create even listener on click
// generates a function that will do the logic
// if score gets to zero, game should be over 
// again button should restart everything except the the highscore
// when number is correct. background should turn green 


let randomNumber = Math.trunc(Math.random() * 20 + 1)
console.log(randomNumber);
let score = 20;
let highscore = 0;
let gameover = false;

document.querySelector('.check').addEventListener('click', () => {
    let guess = Number(document.querySelector('.guess').value)
    // if input is empty
    if(guess == "" || guess == null){
        document.querySelector('.message').textContent = 'Not a number';
    }
    // if number is correct
    else if(guess == randomNumber){
        document.querySelector('.message').textContent = 'Correct Number!';
        document.querySelector('body').style.backgroundColor = 'green';
        document.querySelector('.number').textContent = guess;
        if(score > highscore){
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
    }
    
        // if number is wrong
    }else if(guess !== randomNumber){
        if(score >= 1){
            document.querySelector('.message').textContent = guess > randomNumber ? `Number is too high`: `Number is too low`;
            score --
            document.querySelector('.score').textContent = score;


        }else{
            document.querySelector('.message').textContent = `Game is over!`;
            document.querySelector('.score').textContent = 0;
            gameOver = true;
        }
    }
        
});

document.querySelector('.again').addEventListener('click', function(){
    score = 20;
    document.querySelector('.message').textContent = 'Start guessing ...'
    document.querySelector('.score').textContent = 20
    document.querySelector('body').style.backgroundColor = 'black';
    document.querySelector('.guess').value = '';
    document.querySelector('.number').textContent = '?'

});