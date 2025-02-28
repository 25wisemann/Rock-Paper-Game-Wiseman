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

if (PlayerChoice != 'rock' || 'paper'){
    prompt('That was not one of the options, reload the page and try again')
}

console.log(PlayerChoice)

let ComChoice = Math.random() * 3
console.log(ComChoice)

if (ComChoice <= 1){
    console.log(1)
}else if (ComChoice <= 2){
    console.log(2)
}else if (ComChoice <= 3){
    console.log(3)
}