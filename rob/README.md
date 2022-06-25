# Project-1 (Wordle)

Here is my attempted recreation of the web-based word game Wordle. You can try out my version by clicking [this link.](https://fabbrob.github.io/Project-1/)

![Wordle Preview](https://i.imgur.com/zQd7K2k.png)


![making a plan](https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/microsoft/310/memo_1f4dd.png)

## Approach Taken

I took very much a 'plan as you go' approach when building this project. This helped in breaking down the project into distinct plans of action, which could tackled one step at a time. Consequently, my overarching plan of project went as follows:

1. Build the foundational HTML
2. Style the CSS to position and style the HTML appropriately, in the order of:
3. Build the Javascript, in the order of:
	1. Wire up keyboard through clicking
	2. Build the logic behind the wordle puzzle
	3. Apply the wordle logic to the colouring of the tiles
	4. Wire up keyboard, through typing
		- with the added feature of disabling the keys of the gray letters
	5. Create a game end scenario


![rock](https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/google/313/rock_1faa8.png)

## Obstacles Encountered

#### Preventing the user from typing across input rows

I encountered an issue with trying to prevent the user being able to type across multiple rows of the wordle, which as a result, made it very difficult to implement the function of the enter key. I overcame this obstacle rethinking the input field as 6 seperate attempts, rather than an entire attempt as itself. Through this I was able to implement **'getting' the tiles row by row**, rather than collecting all the tiles within a single variable.


![code of input related getters](https://i.imgur.com/4DG7dx0.png)


#### Applying wordle logic to multi-letter wordles/guesses

This was by far the longest solve of the project for me. I struggled to implement the logic for these types of wordles/guesses. However after a good day or two of contemplation, I managed to make it work by **creating a copy of the wordle string, so that it could be edited**, when finding what tiles would be turned yellow/gray.


![code of finding yellow tiles](https://i.imgur.com/i6YneHI.png)


#### Enabling the disabling feature of the 'clicking' keyboard

Originally I had coded the keys on the keyboard as Div elements. Where I tried and failed at implementing the disabling keys feature of the user input. Eventually I came to the conclusion to **change the keys from 'div' elements to 'button' elements,** which allowed me to make use of the 'disabled' attribute of the HTML Button element.


![code of disabling keyboard buttons](https://i.imgur.com/dNkGISv.png)



![crystal ball](https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/facebook/327/crystal-ball_1f52e.png) 

## Future Improvements / Implementations 

- Restyle the grid of the body/main so that the input field and keyboard don't runaway from each other when you zoom out.
- Style the Wordle to make it pretty 🌼
- Adding CSS animations (for tiles changing colours, for inputing a non-valid word etc.)
- Creating a help/show tutorial button
- Implementing LocalStorage/SessionStorage to create streaks/highscores
- Find the ~~bugs~~ features of the code that remain hidden




![taking notes](https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/325/writing-hand_270d-fe0f.png)

## Lessons Learnt

1. Plan more so that it will be easier to break tasks down into smaller problems
2. Solve the problems with pseudo code before adding them in the code
3. Code for the future
	- by using more variables/functions (especially functions) to save lines of code across the .js file
	- use less global variables (I am very sorry Ge)
	- add comments / clean code as you go