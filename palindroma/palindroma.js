//VARIABLES
const userWord = prompt("Inserisci qua la tua parola");

function reverseString(string) {
return reverseWord = userWord.split('').reverse().join('');
}

console.log(reverseString(userWord));
console.log(userWord);


if(userWord === reverseString(userWord)) {
    console.log("La tua parola è palindroma!");
    
}
else{
    console.log("La tua è una banale parola che non ha alcun significato se letta al contrario!");
    
}