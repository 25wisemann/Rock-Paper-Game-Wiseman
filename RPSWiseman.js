/*
1. Get the input from the user, prolly through a prompt
2. Use a random number generator to choose a computer respnoce
3. Compare result of inputedd value to the chosen reponce  
    maybe use the radom to activate of three loops that has the results in it
4. Output who won and why in the console
    Once again most likly inside of one f three functions based off the random number generator
5. Make it work for three rounds
*/

let PlayerWins = 0
let ComputerWins = 0

for(let RoundCount = 1; RoundCount <= Infinity ; RoundCount++){

let PlayerChoice = prompt('Rock, Paper, Scissors?', '')

PlayerChoice = PlayerChoice.toLowerCase()

if(PlayerChoice != 'rock' && PlayerChoice != 'paper' && PlayerChoice != 'scissors'){
    alert('That was not one of the options, reload the page and try again')
    break
}

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
        PlayerWins ++
    }
    if(PlayerChoice == ('scissors')){
        console.log('Computer wins, Rock beats Scissors')
        ComputerWins ++
    }
}else if (ComChoice <= 2){
    console.log('Computer choose Paper')
    if(PlayerChoice == ('paper')){
        console.log('Tie, both choose Paper')
    }
    if(PlayerChoice == ('scissors')){
        console.log('User wins, Scissors beats Paper')
        PlayerWins ++
    }
    if(PlayerChoice == ('rock')){
        console.log('Computer wins, Paper beats Rock')
        ComputerWins ++
    }
}else if (ComChoice <= 3){
    console.log('Computer choose Scissors')
    if(PlayerChoice == ('scissors')){
        console.log('Tie, both choose Scissors')
    }
    if(PlayerChoice == ('rock')){
        console.log('User wins, Rock beats Scissors')
        PlayerWins ++
    }
    if(PlayerChoice == ('paper')){
        console.log('Computer wins, Scissors beats Paper')
        ComputerWins ++
    }
}

    if(ComputerWins == 5){
        alert('Computer wins!!')
        break
    }

    if (PlayerWins == 5){
        alert('User Wins!!')
        break
    }
}
//Code for going by rounds rather than first to a win ammount
// if(PlayerWins > ComputerWins){
//     alert(`User wins with ${PlayerWins} wins! `)
// }

// if(ComputerWins > PlayerWins){
//     alert(`Computer wins with ${ComputerWins} wins!`)
// }

// if(ComputerWins == PlayerWins){
//     alert(`Tie, both have ${ComputerWins} wins`)
// }