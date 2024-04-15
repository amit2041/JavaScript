const emojiDetails = [
    { description: 'Smiling face with sunglasses', emoji: '😎' },
    { description: 'Smiling face with open mouth', emoji: '😃' },
    { description: 'Smiling face with horns', emoji: '😈' },
    { description: 'Crying face', emoji: '😢' },
    { description: 'Face with medical mask', emoji: '😷' },
    //Add more Emoji description here
];

let currentEmojiIndex = 0;
let score = 0;
let seconds = 30;
let timer;


const timerElement = document.getElementById('timer');


const guessInput = document.getElementById('guess-input');
const resultElement = document.getElementById('result');
const scoreElement = document.getElementById('score');

function displayEmoji() {
    const descriptionElement = document.getElementById('description');
    descriptionElement.textContent = emojiDetails[currentEmojiIndex].emoji;
    timerElement.textContent = `Time: ${seconds}s`;
    guessInput.focus();
}

function checkGuess() {
    const guess = guessInput.value.trim().toLowerCase();
    const correctEmoji = emojiDetails[currentEmojiIndex].description.trim().toLowerCase();

    if (guess === correctEmoji) {
        resultElement.textContent = 'Correct!';
        score++;
    } else {
        resultElement.textContent = 'Wrong!';
    }

    scoreElement.textContent = `Score: ${score}`;
    guessInput.value = '';
    
    nextEmoji();
}

function nextEmoji() {
    currentEmojiIndex++;
    setTimeout(()=>{
        resultElement.textContent = '';
    }, 1000);

    if (currentEmojiIndex === emojiDetails.length) {
        currentEmojiIndex = 0;
    }
    displayEmoji();
}

document.getElementById('guess-input').addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        checkGuess();
    }
});

document.addEventListener('DOMContentLoaded', () => {
    displayEmoji();
    startTimer();
});

function startTimer(){
    timer = setInterval(()=>{
        seconds--;

        timerElement.textContent = `Time: ${seconds}s`;
        if(seconds<=0){
            endGame();
        }
    }, 1000);
}

function endGame(){
    clearInterval(timer);
    guessInput.disabled = true;
    timerElement.textContent = '';
}