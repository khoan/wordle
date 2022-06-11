const attempt = {
    number: 0,
    letter: 0,
};
const secretWord = "GOOSE";
let isGameOver = false;

document.addEventListener("keyup", function(e) {
    if (isGameOver) {
        alert("Refresh your browser to play another round.");
        return;
    }

    if (e.key === "Backspace") {
        if (0 < attempt.letter) {
            attempt.letter -= 1;
            renderLetter("");    
        }
    } else if (e.key === "Enter") {
        if (attempt.letter === 5) {
            renderHint();

            if (isCorrectAttempt()) {
                alert("Congrats!");
                isGameOver = true;
            } else if (attempt.number === 5) {
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

            attempt.number += 1;
            attempt.letter = 0;
        }
    } else if (attempt.letter < 5) {
        const letter = e.key.toUpperCase();
        if (letter.length === 1 && "A" <= letter && letter <= "Z") {
            renderLetter(letter);
            attempt.letter += 1;    
        }
    }
});

function renderLetter(letter) {
    const attemptElement = document.querySelectorAll(".attempt")[attempt.number];
    const letterElement = attemptElement.querySelectorAll(".letter")[attempt.letter];

    letterElement.textContent = letter;
}

function renderHint() {
    const attemptElement = document.querySelectorAll(".attempt")[attempt.number];
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
    const attemptElement = document.querySelectorAll(".attempt")[attempt.number];
    const letterElements = attemptElement.querySelectorAll(".letter");

    for (const letterElement of letterElements) {
        if (!letterElement.classList.contains("correct")) {
            return false;
        }
    }

    return true;
}