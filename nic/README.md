# _Project-1_ Wordle Clone

Wordle
: is an online 5-letter word game. Each day a new word is released and players have six attempts to guess what the word of the day is. During the guesses, tiles will change colour to help players get the word. A red letter means it isn't in today's word, whilst a yellow letter signals it is in the word but in the wrong position. Then there's the green letter which means it's in the word and in the right place.

## Can be found at:

[Link to Project](https://whishes.github.io/project-1/)

## Installation Instructions:

1. Either manually download the code via a .zip file or use `git clone` with the specific **HTTPS** or **SSH** for this repo.
2. Once the code has successfully been downloaded, the Wordle Clone can be run/tested by opening `index.html`.

## Technologies Used:

During this particular project the only technologies that had been used were;

- VS Code
- HTML
- CSS
- JavaScript
- Google Chrome & Firefox for testing/dev tools
- Github for storing/managing code + Github Pages for hosting the project

## Main Features

- 5 letters + 6 attempts at the word
- Info modal explaining the game
- Unlimited rounds/playing
- Word Streak + Total Words guessed
- localStorage Functionality
- Word Helper button
- Auto-moving on columns & rows
- Existing word check

## The Approach Taken:

1. Tried to use `<input>` tags instead of `<div>` tags for the letters but didn't really work because I wanted to block the user from even typing numbers and special characters and well I eventually learnt my lesson, deleted everything I had done, and started from scratch on Sunday.
2. With the first approach completely botched, I rewrote everything with `<div>` tags and got everything by their className. With that problem solved I created a function to loop through the **y'th** row _(by viewing the letter divs as a 3d array)_ giving each individual div in that row an event listener that waited for a key on the user's keyboard to be pressed.
3. After the Saturday fiasco and basic key listeners implemented I approached this new version by trying think small and breaking problems down into manageable goals. Specifically I handled the smaller checks (backspace pressed, enter pressed, letter pressed, etc) and all other eventual problems by firstly typing the purpose of the code in a comment with the first step needed _(whether or a loop or if statement etc)_. After that point it was just a matter of typing as many comments as needed to outline the different steps and segments of code potentially needed for the smaller problem.
4. Not only did this new way of thinking make the rest of the project seem manageable but also largely helped separate everything to the **thinking phase, code writing phase, and the bug fixing/adjusting phase** and gave me outlined times/opportunities to look at the problem instead of all at once.

## Unsolved Problems:

- Adding an animation for when the rows of words are loaded from localStorage <i class="fa-regular fa-dumpster-fire" aria-hidden="true"></i>

## Ideal/Planned Features:

- [ ] Different Modes
  - [ ] 4 Guesses only
  - [ ] Hard Mode (can only use green or yellow letters in all the next attempts)
  - [ ] Daily vs Unlimited mode (currently unlimited only)
  - [ ] Combination of everything
- [ ] Lightmode vs Darkmode Styling
- [ ] Change the colour of the onscreen keyboard to show which words are red/yellow/green.
- [ ] Social Media integration

## Acknowledgements

- w3Schools
- MDN
- StackOverflow
- Staff at GA -
  - Instructors: Ken & Ge
  - Instructors Assistants: Lucy & Sam
- All my GA friends for being my rubber ducky throughout this project
