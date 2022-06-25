# Wordle-ish

## [Elise's deployed game](https://elisabethmj.github.io/project-1/)

## [Elise's github Repository](https://github.com/elisabethmj/project-1)

![Imgur](https://i.imgur.com/PUOpqF6.png)


## How to play

1. Enter a 5 letter word. If the user inputs a non-alpha letter, this will automatically be replaced with nothing. If the user enters less than 5 letters, a non-sensible word i.e. not a word or it is plural, an alert tells them to try again.

2. When the page is loaded, a secret word is randomly selected from my array of all the possible 5 letter words.

3. Once a valid 5 letter word is entered and the user clicks the enter button, my function checks each letter against the secret word, and gives hints to the user by assigning the tile a colour based on whether it is:
        a) The right letter in the right place (Light blue)
        b) The letter is in the word in the wrong place (Purple)
        c) The letter is not in the word at all (Navy)
I used an unconventional pallette (probably more confusing than green, yellow and gray) BUT, I think it looks heckin pretty.

4. If the user guesses the word correctly or they get to all 6 attempts, the game ends.



### Cloning repo

1. On GitHub.com, navigate to [Elise's github Repository](https://github.com/elisabethmj/project-1)

2. Follow these instructions from Github: [Github docs: Cloning a repo](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository)

3. You then have to connect your remote machine with origin upstream?


### Future improvements

1. Have function that listens to keydown and whether maxlength in input reached so that when user types a valid letter or arrow is pressed, the focus goes to the next tile automatically. Also if backspace pressed or back arrow pressed, it goes to previous tile. Would have to check for current input value length.

2. While the checkGuessGiveHints() function works, it could definitely be optimised.

3. Change alerts to modal windows to make the game more sophisticated.

4. Add modals for button to click for game instructions.

5. Add the screen shake function for invalid input.

6. Add a new game button.


### Acknowledgements

1. [Youtube tutorial where I got lettersOnly() function](https://www.youtube.com/watch?v=OpajusnOfYo)

2. Go to next attempt function was based on code snippet Ken sent me:

    `// highlight user next attempt
    const attempts = document.querySelectorAll(".input");
    for (let i = 0; i < attempts.length; ++i) {
         if (attempts[i].classList.contains("currentattempt")) {
            break;
        }
    }

    attempts[i].classList.remove("currentattempt");
    attempts[i+1].classList.add("currentattempt");`


3. [Function moveAround() taken from stackoverflow answer](https://stackoverflow.com/questions/15595652/focus-next-input-once-reaching-maxlength-value)


