const squareDiv$$ = document.querySelectorAll('[data-function="square"]');
const score$$ = document.querySelector('[data-function="score"]');
const time$$ = document.querySelector('[data-function="time-left"]');
const newGameBtn$$ = document.querySelector('[data-function="new-game"]');
let score = 0;
let timeLeft = 30;
let hitSquare;

const play = () => {
    const countDown = () => {
        time$$.innerHTML = timeLeft;
        timeLeft--;
        if (timeLeft < 0) {
            clearInterval(countDownInterval);
            clearInterval(showMoleInterval)
        }
    }

    const showMole = () => {
        for (const square of squareDiv$$) {
            square.classList.remove('b-mole');
            square.addEventListener('click', checkClick)
        }
        const randomSquare = Math.floor(Math.random() * (squareDiv$$.length));
        squareDiv$$[randomSquare].classList.add('b-mole');
        hitSquare = squareDiv$$[randomSquare];
    }

    const checkClick = (e) => {
        if (e.target === hitSquare) {
            score++
            score$$.innerHTML = score;
        }
    }

    const showMoleInterval = setInterval(showMole, 500);
    const countDownInterval = setInterval(countDown, 1000);
}
play();

const newGame = () => {
    timeLeft = 30;
    score = 0;
    score$$.innerHTML = score;
    play();
}
newGameBtn$$.addEventListener('click', newGame)

