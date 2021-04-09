// take input from the user
let maxNumber = parseInt(prompt("Kindly enter your maximum number"));
let chosenNumber = Math.floor(Math.random() * maxNumber) + 1;
//ask the user to input a guess
let guess = parseInt(prompt("Kindly enter a guess"));
let attempt = -1

// if guess is higher than original guess print guess is higher try again
while (parseInt(guess) !== chosenNumber) {
    attempt++;
    if ( guess === "q") {
        console.log("your quitted");
        break;
    }
 
    if (guess > chosenNumber){
        guess = prompt("You guess higher try something lower");
    } else{
        guess = prompt("You guess lower try something higher");
    }
}
if (guess === "q"){
    // console.log(`you are such a sore LOSER!!!! you made ${attempt} attempts `);
    alert(`you are such a sore LOSER!!!! you made ${attempt} attempts `);
} else {
    console.log("You got it!, Thanks for playing. Dammie Appreciates!");
    alert(`You got it!, Thanks for playing. Dammie Appreciates! and you made ${attemps} attemps. Yipee!`);
}



// const numbers = [1,2,3,4,5,6,7,8,9]; //DON'T CHANGE THIS LINE PLEASE!

// // WRITE YOUR LOOP BELOW THIS LINE:
// for ( let row1 of numbers) {
//     console.log(row1 * row1);
// }
