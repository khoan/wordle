# Wordle
An HTML-CSS-Javascript-based Wordle game that allows as many turns as players desire, and lets them build up their score; while also allowing them two more word-choices when they are close to the end of their attempts - BUT, at the cost of 10 points!

## Game Rules
---
- Players can start accumulating their score after opening the webpage and having a stab at the game. Winning at different rows awards them with different scores.
- Losing costs too! 2 points for every loss!
- When players are close to the end of the game, they can choose to add two more rows (attempts) - but at the cost of 10 points!
- They can also restart the game without exiting the page.

## Technologies
---
- HTML
- CSS
- Javascript

## How to Play
---
Open [this](https://sid-s1.github.io/Project-1/) link :)

## Approach
---
The player can enter characters using two methods -

1. Physical keyboard
2. On-screen keyboard

Both methods only work if the gameEnd condition is false (tracked using two 'state' variables)

Both methods lead to two key functions that check the following -

1. Does the square contain a letter? If yes, it needs to be styled in another way
2. Has the letter been entered through a physical keyboard or the on-screen keyboard? Depending on the medium, the event property passed will differ

---

The next function where the event property is passed, will use the property to extract the letter entered

If the player uses their physical keyboard, as they press each key, the corresponding key on the on-screen keyboard gets 'pressed' too. This involves the following -

1. The event property of key is passed to another function that compares it to the buttons on the on-screen keyboard
2. If the button matches the physical key pressed, its background-color and box-shadow properties are changed

---

There are two additional buttons on the page -

1. 'Restart Game' - this listens in for the player to restart their game without affecting their score
2. 'More Chances Please' - this listens in for the player to add two more rows to their game, at the cost of 10 points of score. This button only displays when player reaches the end of row 4, and it disappears once the player has clicked on it

---

Based on each letter entered, certain operations are performed -

1. If player tries to delete a forbidden letter, an animation that displays an image is triggered
2. As the player starts entering letters again, the animation makes the image disappear again
3. Based on the square number, conditions were implemented to check what was entered at the final square of the row
4. If a valid key was entered, the cumulative of all squares in that row will result in the word that the player entered (using another function)
5. If the word is not in the dictionary (an array of valid words) used, an animation displays another image, which disappears as letters are deleted (using a separate 'wordCheck' function)
6. The first-index and the following-indices of each letter in the randomly selected winning word are compared against the similar indices from the user's word (using a 'matchWord' function)
7. Based on matches or mis-matches, the blocks' background-color property is changed to 'yellow' or 'green' - the buttons are made to mirror this background-color (using another function 'changeButtonColor')
8. If the player reaches row 4 and has not won yet, they will be given an option to add two more rows of squares - for two more attempts (score reduces by 10)
9. Based on which row they got their answer in (condition), a score value is added to their square - or reduced, in case they get to the final row without getting the right answer
10. An animation makes the heading and the score change to an enlarged version, with modified background and updated text - in both win and loss conditions
11. The 'restart' button listens in for a click - and refreshes page content but keeps the player score the same, selects a new word and lets the player start anew

---

Unsolved problem -

- When the 'winning word' or the user-entered word have multiple occurences of the same character, this code gets a bit clunky to use. Ideally, there should be a better 'word-scanner' in place that provides better information with lesser lines of code
   
   An attempt was made to use objects to achieve this end; but that methodology required using an 'await-promise' block that I have not grasped yet

   A decision was made to go with the more primitive approach of using multiple if-else nested blocks to check multiple occurences of the same letter
