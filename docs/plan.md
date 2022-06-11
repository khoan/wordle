## Steps

These are the steps we'd take to build our game.

### Game mechanics

1. [HTML, CSS] come up with a HTML structure and styling

    1. to represent

        1. user's 6 attempts (center align but skip if takes too long)
        1. hints (background color)
        1. secret word (only show at end of game, when user exhausted six attempts)

    1. ignore keyboard rendering (may revisit later)

2. [Javascript] wire up event to render letter per attempt

    1. capture 5 letters

        1. case 1: is a word
        1. (ignore for now) case 2: is a non-sensible word
        1. (ignore for now) case 3: special characters, e.g. $ @ ! $ ^

    1. allow backspace to delete previously entered letter
    1. capture enter key then check user's word against the secret word

3. [Javascript] from step 2. iii. render hints to the user

    1. grey background for letter not in word
    1. yellow background for letter in word, but in wrong location
    1. green background for letter in word and in the right location

4. [Javascript] proceed based on result of step 3.

   ```
   avenue 1: user guess correctly then end the game
   avenue 2: user guess incorrectly then allow user another attempt
   avenue 3: user guess incorrectly and it's their sixth attempt, then display the secret word and end the game
   ```