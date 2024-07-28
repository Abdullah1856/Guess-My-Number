'use strict';
// console.log(document.querySelector('.message').textContent); 
// document.querySelector('.check').addEventListener ('click', function (){
//     console.log(document.querySelector('.guess').value + 1);
// })
// console.log(document.querySelector('.check').textContent = 'XD');

// document.querySelector('.check').addEventListener('click', function(){
// console.log(document.querySelector('.check').innerHTML = 'bye');    
// })


let secretNumber = Math.floor(Math.random() * 20 + 1);
let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);

    /* When No Input */
    if (!guess) {
        document.querySelector('.message').textContent = 'Please add a number'

        /* When Player wins */
    } else if (guess === secretNumber) {
        document.querySelector('.message').textContent = 'Your guess is right!';
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '25rem';
        if (score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }

        else if (guess !== secretNumber) {
            if (score > 1) {
                document.querySelector('.message').textContent = guess > secretNumber ? 'Your guess is too high!' : 'Your guess is too low!';
                score--
                document.querySelector('.score').textContent = score;
            } else {
                document.querySelector('.message').textContent = 'Your lost the game!';
                document.querySelector('.score').textContent = 0;
            }
        }
    }
        /* When guess is to high */
    // } else if (guess > secretNumber) {
    //     if (score > 1) {
    //         document.querySelector('.message').textContent = 'Your guess is too high!'
    //         score--
    //         document.querySelector('.score').textContent = score;
    //     } else {
    //         document.querySelector('.message').textContent = 'Your lost the game!';
    //         document.querySelector('.score').textContent = 0;
    //     }

    //     /* When guess is to low */
    // } else if (guess < secretNumber) {
    //     if (score > 1) {
    //         document.querySelector('.message').textContent = 'Your guess is too low!'
    //         score--
    //         document.querySelector('.score').textContent = score;
    //     }
    //     else {
    //         document.querySelector('.message').textContent = 'Your lost the game!';
    //         document.querySelector('.score').textContent = 0;
    //     }
})

document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    secretNumber = Math.floor(Math.random() * 20 + 1);
    document.querySelector('.message').textContent = 'Start guessing...'
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';

})
