const currentAttempt = {
    number: 0,
    letter: 0,
};
const secretWord = "GOOSE";
let isGameOver = false;

document.addEventListener("keyup", function(e) {
    if (isGameOver) {
        alert("Game is over. To play another round, click New game.");
        return;
    }

    if (e.key === "Backspace") {
        if (0 < currentAttempt.letter) {
            currentAttempt.letter -= 1;
            renderLetter("");    
        }
    } else if (e.key === "Enter") {
        if (currentAttempt.letter === 5) {
            renderHint();

            if (isCorrectAttempt()) {
                alert("Congrats!");
                isGameOver = true;
            } else if (currentAttempt.number === 5) {
                // hack to re-paint then alert user
                // read more at https://www.webperf.tips/tip/measuring-paint-time/
                requestAnimationFrame(function() {
                    const messageChannel = new MessageChannel();

                    messageChannel.port1.onmessage = function () {
                        alert("The word is " + secretWord);
                        isGameOver = true;    
                    }
                    
                    messageChannel.port2.postMessage(undefined);
                });
            }

            currentAttempt.number += 1;
            currentAttempt.letter = 0;
        }
    } else if (currentAttempt.letter < 5) {
        const letter = e.key.toUpperCase();
        if (letter.length === 1 && "A" <= letter && letter <= "Z") {
            renderLetter(letter);
            currentAttempt.letter += 1;    
        }
    }
});

function renderLetter(letter) {
    const attemptElement = document.querySelectorAll(".attempt")[currentAttempt.number];
    const letterElement = attemptElement.querySelectorAll(".letter")[currentAttempt.letter];

    letterElement.textContent = letter;
}

function renderHint() {
    const attemptElement = document.querySelectorAll(".attempt")[currentAttempt.number];
    const letterElements = attemptElement.querySelectorAll(".letter");

    for (let index = 0; index < 5; ++index) {
        const secretLetter = secretWord[index];
        const letterElement = letterElements[index];

        if (secretLetter === letterElement.textContent) {
            letterElement.classList.remove("absent");
            letterElement.classList.remove("present");
            letterElement.classList.add("correct");
        } else if (secretWord.includes(letterElement.textContent)) {
            letterElement.classList.remove("absent");
            letterElement.classList.remove("correct");
            letterElement.classList.add("present");
        } else {
            letterElement.classList.remove("present");
            letterElement.classList.remove("correct");
            letterElement.classList.add("absent");
        }
    }
}

function isCorrectAttempt() {
    const attemptElement = document.querySelectorAll(".attempt")[currentAttempt.number];
    const letterElements = attemptElement.querySelectorAll(".letter");

    for (const letterElement of letterElements) {
        if (!letterElement.classList.contains("correct")) {
            return false;
        }
    }

    return true;
}