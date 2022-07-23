const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('your-choice')
const resultDisplay = document.getElementById('result')
const posssibleChoice = document.querySelectorAll('button')
let userChoice
let result
let computerChoice
posssibleChoice.forEach(posssibleChoice => posssibleChoice.addEventListener('click', (e)=> {
  userChoice =e.target.id
  userChoiceDisplay.innerHTML= userChoice
  generateComputerChoice()
  getResult()
}))

function generateComputerChoice(){
    const RandomNumber =  Math.floor(Math.random()*3) +1
    console.log(RandomNumber) 
    if(RandomNumber=== 1){
        computerChoice='rock'
    }
    if(RandomNumber=== 2){
        computerChoice='scissor'
    }
    if(RandomNumber=== 3){
        computerChoice='paper'
    }

    computerChoiceDisplay.innerHTML = computerChoice
}


function getResult(){
    if (computerChoice === userChoice){
        result =' its a draw' 
    }
     else if (computerChoice === 'rock' && userChoice==="paper"){
        result =' you win' 
    }
    else if (computerChoice === 'rock' && userChoice ==="scissor"){
        result =' you lost' 
    }
    else if (computerChoice === 'paper' && userChoice ==="scissor"){
        result =' you win' 
    }
    else if (computerChoice === 'paper' && userChoice ==="rock"){
        result =' you win' 
    }
    else if (computerChoice === 'scissor' && userChoice ==="rock"){
        result =' you win' 
    }
    else if (computerChoice === 'scissor' && userChoice ==="paper"){
        result =' you lost' 
    }
    resultDisplay.innerHTML = result
}