
    //setting global variables 
    
    const guessedWords = [[]]; //collects are the words in an array, each word will contain an array that contains each letter
    const keys = document.querySelectorAll(".keyboard-row button");
    const word = "DREAM";
    let currentLettersArr = []

    // for loop - iterate over each key and add an onclick handler 
    for (let i = 0; i < keys.length; i++) {
        keys[i].onclick = ({ target }) => { // target gets our actual letter
            const letter = target.textContent;
            
            const currentRow = guessedWords.length - 1;


            // if we are on the 5th letter of the last row (5 as the rows are zero-indexed), enter this if statement: 
            if (guessedWords[currentRow].length === 5) {
                // if enter button is clicked, submit the wordle 
                if (letter === 'Enter') {
                    handleSubmitWord()
                }
                //otherwise do nothing
               return; 
            } 


            if (letter ==='Delete') {
                handleDeleteLetter() 
                return;
            } 

        
            updateGuessedWords(letter);
        };
    }  
 
        //this function will tell the number of guessed words so far
    function getCurrentWordArr() { 
        const currentRow = guessedWords.length - 1; //returns the actual array that we're updating 
        const currentLetters = guessedWords[currentRow].length;


        if (currentLetters < 5) {
            return guessedWords[currentRow];
        } 

        guessedWords.push([])
        return guessedWords[currentRow + 1];
    }

    //This function takes the letter (in the guessedWords global variable which will be an array with an array inside of it)   
    function updateGuessedWords(letter) {
        let currentLettersArr = getCurrentWordArr();

        if(currentLettersArr && currentLettersArr.length < 5) {
            currentLettersArr.push(letter)
            console.log(currentLettersArr)

            const row = guessedWords.length - 1
            const column = currentLettersArr.length - 1; 

            const availableSpace = document.getElementById(row + '-' + column); // lets us know if the 'tiles' are available
            availableSpace.textContent = letter; 
        }        
    } 

    function handleSubmitWord() {
        let currentLettersArr = guessedWords[guessedWords.length - 1]
        console.log(currentLettersArr)


       let answerLetters = word.split('')
       console.log(answerLetters)
       const row = guessedWords.length - 1 

       const currentWord = currentLettersArr.join('')

       if (currentWord === word) {
           alert("Winner winner chicken dinner!");
       } 

       if (guessedWords.length === 6) {
           alert("Sorry, you lost. The word is DREAM.");
       }

       //pushes the array to the next row 
       guessedWords.push([])
        
       

       for (let i = 0; i < currentLettersArr.length; i++) {
            const letterSpace = document.getElementById(row + '-' + i);

            if (answerLetters[i] === currentLettersArr[i]) { 
                letterSpace.classList.add('correct')
            } else if (answerLetters.includes(currentLettersArr[i])) {
                letterSpace.classList.add('present')

            } else {
            letterSpace.classList.add('absent') 
            } 
           
       }


       }

    function handleDeleteLetter() {

        let currentLettersArr = getCurrentWordArr().pop()
        console.log(currentLettersArr)

    }

    