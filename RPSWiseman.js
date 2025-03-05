/*
1. Get the input from the user, prolly through a prompt
2. Use a random number generator to choose a computer respnoce
3. Compare result of inputedd value to the chosen reponce  
    maybe use the radom to activate of three loops that has the results in it
4. Output who won and why in the console
    Once again most likly inside of one f three functions based off the random number generator
5. Make it work for three rounds
*/

let PlayerChoice = prompt('Rock, Paper, Scissors?', '')

PlayerChoice = PlayerChoice.toLowerCase()

if(PlayerChoice != 'rock' && PlayerChoice != 'paper' && PlayerChoice != 'scissors'){
    alert('That was not one of the options, reload the page and try again')
}

console.log(PlayerChoice)

let ComChoice = Math.random() * 3
console.log(ComChoice)
console.log(PlayerChoice)
if (ComChoice <= 1){
    console.log('Computer choose Rock')
    if(PlayerChoice == ('rock')){
        console.log('Tie, both choose Rock')
    }
    if(PlayerChoice == ('paper')){
        console.log('User wins, Paper beats Rock')
    }
    if(PlayerChoice == ('scissors')){
        console.log('Computer wins, Rock beats Scissors')
    }
}else if (ComChoice <= 2){
    console.log('Computer choose Paper')
    if(PlayerChoice == ('paper')){
        console.log('Tie, both choose Paper')
    }
    if(PlayerChoice == ('scissors')){
        console.log('User wins, Scissors beats Paper')
    }
    if(PlayerChoice == ('rock')){
        console.log('Computer wins, Paper beats Rock')
    }
}else if (ComChoice <= 3){
    console.log('Computer choose Scissors')
    if(PlayerChoice == ('scissors')){
        console.log('Tie, both choose Scissors')
    }
    if(PlayerChoice == ('rock')){
        console.log('User wins, Rock beats Scissors')
    }
    if(PlayerChoice == ('paper')){
        console.log('Computer wins, Scissors beats Paper')
    }
}