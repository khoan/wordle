import { words } from "./words.js";

const answer = words[Math.floor(Math.random() * words.length)]
// const answer = 'asset' // asset, femme femur starts , daddy
console.log(answer);
let challengeCounter = 1;
let columCounter = 0;
let correctLetterCounter = 0 ;
// let currentFocusElement = document.activeElement;
const resetBtn = document.createElement("button");
resetBtn.textContent = "Reset"
resetBtn.addEventListener("click", resetGame)

const stage = {
    challenge1:['','','','',''],
    challenge2:['','','','',''],
    challenge3:['','','','',''],
    challenge4:['','','','',''],
    challenge5:['','','','',''],
    challenge6:['','','','','']
}
const objKeyboard = {
    row1:['q','w', 'e','r','t','y','u','i','o','p',],
    row2:['a','s','d','f','g','h','j','k','l'],
    row3:['enter', 'z','x','c','v','b','n','m','delete']
}

render();
document.addEventListener('keydown', addLetter)
function render(){
    const finishGameMessage = document.createElement("div");
    finishGameMessage.id = "message"
    document.querySelector("#wordInputArea").append(finishGameMessage);
    const challenges = Object.keys(stage); //['challenge1', 'challenge2', 'challenge3', 'challenge4', 'challenge5', 'challenge6'] creating 6 x div tags
    for ( const challenge of challenges){
        columCounter = 0 ;
        const rowForChallenge = document.createElement("div");
        rowForChallenge.setAttribute("class", 'rowChallenge' );
        rowForChallenge.setAttribute("id", challenge );
        document.querySelector("#wordInputArea").appendChild(rowForChallenge);
        const boxes = stage[challenge]; // ['', '', '', '', ''] creating 5 X input tags from object "stage"
        for (const box of boxes){
            const divBox = document.createElement("div");
            divBox.style.textTransform = "uppercase";
            divBox.setAttribute('id', `char${columCounter}${challenge}`);
            divBox.classList = "box";
            divBox.setAttribute("data-index",`${columCounter}`);
            rowForChallenge.appendChild(divBox);
            columCounter += 1;
        }
    }
    const objkeyboard = Object.keys(objKeyboard);
    for (const keyboardRow of objkeyboard){
        const divKeyboardRow = document.createElement("div");
        divKeyboardRow.setAttribute("id", keyboardRow )
        divKeyboardRow.classList = 'keyBox'
        document.querySelector("#keyboardArea").appendChild(divKeyboardRow);
        const eachKeys = objKeyboard[keyboardRow];
        for (const key of eachKeys){
            const keyBox = document.createElement("div");
            keyBox.style.textTransform = "uppercase";
            keyBox.id = key;
            keyBox.setAttribute("data-keyname",`${key}`);
            keyBox.classList = "key";
            keyBox.textContent = key;
            keyBox.addEventListener('click', addLetter)
            keyBox.addEventListener('click', addLetter)
            divKeyboardRow.appendChild(keyBox);
        }
    }
    challengeCounter =1;
    columCounter =0;
}
function addLetter(event){
  
    if( columCounter > 5 ){
        return;
    }else{
        const pressedKeyLetter =  event.key || event.target.textContent;
        console.log(pressedKeyLetter)
        if(pressedKeyLetter.length >1){
            switch(pressedKeyLetter.toLowerCase()){
            case "enter":
                checkInput(event);
                break;
            case "backspace":
                if (columCounter > 0){
                    columCounter -=1;
                    stage[`challenge${challengeCounter}`][columCounter] = '';
                    const currentLetterBox = document.querySelector(`#char${columCounter}challenge${challengeCounter}`)
                    currentLetterBox.textContent = ''
                    console.log(stage)
                }
                break;
            case "delete":
                if (columCounter > 0){
                    columCounter -=1;
                    stage[`challenge${challengeCounter}`][columCounter] = "";
                    const currentLetterBox = document.querySelector(`#char${columCounter}challenge${challengeCounter}`)
                    currentLetterBox.textContent = ''
                    console.log(stage)
                }
                break;
            }
        }else{
            switch (pressedKeyLetter) {
                case String(pressedKeyLetter.match(/^[A-Za-z]+$/)):                    
                    if(columCounter<5){
                        const currentLetterBox = document.querySelector(`#char${columCounter}challenge${challengeCounter}`)
                        currentLetterBox.textContent = pressedKeyLetter
                        stage[`challenge${challengeCounter}`][columCounter] = pressedKeyLetter;
                        console.log(stage)
                        columCounter += 1;
                    }
                    break;
                default:
                    break;
            }   
        }
        
        console.log(`colum is${columCounter}`)
        
    }
    
}
function checkInput(event){
    
    console.log("yes here")
    const answerArray = answer.split("")
    let guessedWord = []; 
    guessedWord = stage[`challenge${challengeCounter}`].slice('');
    if(words.indexOf(guessedWord.join("")) > -1){
        for (let i = 0 ; i < 5 ; i++){
            const selectedElementIdName = `#char${i}challenge${challengeCounter}`
            if(answerArray[i]=== guessedWord[i]){
                setTimeout(document.querySelector(selectedElementIdName).classList.add("correct"), 2000);
                document.querySelector(`#${guessedWord[i]}`).classList.add("correct")
                answerArray[i] = '';
                guessedWord[i] = '';
                correctLetterCounter += 1;
            }
        }
        for (let i = 0 ; i < 5 ; i++){
            const selectedElementIdName = `#char${i}challenge${challengeCounter}`
            if (guessedWord[i] !== ''){
                const index = answerArray.indexOf(guessedWord[i]);
                if (index >= 0){
                    setTimeout(document.querySelector(selectedElementIdName).classList.add("wrongPosition"), 4000)
                    document.querySelector(`#${guessedWord[i]}`).classList.add("wrongPosition")
                    answerArray[index] = '';
                    guessedWord[i] = '';
                }
            }
        }
        for (let i = 0 ; i < 5 ; i++){
            const selectedElementIdName = `#char${i}challenge${challengeCounter}`
            if(guessedWord[i] !== ''){
                setTimeout(document.querySelector(selectedElementIdName).classList.add("wrong"), 8000);
                document.querySelector(`#${guessedWord[i]}`).classList.add("wrong")
            }
        }
        challengeCounter += 1;
        columCounter = 0;
        finishGame()
        correctLetterCounter = 0;
    }else {
        alert('It is not a word, please try again')
    }
}
function finishGame(){
    if(correctLetterCounter === 5){ //winning message
        document.querySelector("#message").textContent = "You got it!"
        document.querySelector("#message").appendChild(resetBtn);
    }else if(challengeCounter === 7){ // showing the word after 6th challenge
        document.querySelector("#message").textContent = answer
        document.querySelector("#message").appendChild(resetBtn);
    }

}
function resetGame(){
    window.location.reload();
}
resetBtn.addEventListener("click", resetGame);