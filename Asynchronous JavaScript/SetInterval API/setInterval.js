const textElement = document.querySelector('#text');
let seconds = 0;
textElement.textContent = `${seconds}`;
const timer = setInterval(() => {
    seconds++;
    textElement.textContent = `${seconds}`;

    if(seconds>= 10){
        clearInterval(timer);
    }
}, 1000);