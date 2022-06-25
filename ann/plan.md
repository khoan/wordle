# plan 

A plan on how to build Wordle. 

## Steps 

1. [HTML, CSS] Come up with a HTML structure and styling 
i. represent user's attempts 
ii. ignore keyboard (may revisit later)
//  (Using slice and dice is appropriate) You'll also be using DOM manipulation 
2. [Javascript] Wire up event to render letter per attempt 
i. capture 5 letters 
a. case 1: is a word 
b. (ignore for now) case 2: is a non-sensible word 
c. (ignore for now) case 3: special characters, e.g. $ @ ! ^ 
ii. allow backspace to delete previously entered letter 
iii. capture enter key then check user's word against the secret word 
3. [Javascript] from step 2. iii. render hints to the user 
i. grey background for letter not in word 
ii. yellow background for letter in word, but in wrong location 
iii. green background for letter in word and in the right direction 
4. [Javascript] branch based on result of step 3. 
branch 1: user guess correctly then end the game 
branch 2: user guess incorrecrly then allow another user attempt 
branch 3: user gues incorrectly and its their sixth attempt, then display the secret word and end the game 