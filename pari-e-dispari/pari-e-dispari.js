/* Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto. */


//Variables

const userChoice = getValidChoice();
const userNumber = getValidNumber();

const pcChoice = randomNumber();

let sum = pcChoice + userNumber;
let even = false;

//System



console.log("numero del pc:", pcChoice);
console.log("somma:", sum);


even = isEven(sum);

if (even === true && userChoice === "pari") {
  console.log("hai vinto");
}
else if (even === false && userChoice === "dispari") {
  console.log("hai vinto");
}
else {
  console.log("hai perso");
}

// Function 



function randomNumber() {
  return Math.floor(Math.random() * 5) + 1;
}

function isEven(num) {
  if (num % 2 === 0) {
    return true;
  }
}

function getValidChoice() {
  let choice = prompt("Scegli 'pari' o 'dispari'");

  // normalizzo solo se non è null
  if (choice) choice = choice.toLowerCase().trim();

  while (choice !== "pari" && choice !== "dispari") {
    choice = prompt("Inserisci un valore valido: 'pari' o 'dispari'");
    if (choice) choice = choice.toLowerCase().trim();
  }

  return choice;
}

function getValidNumber() {
  let number = prompt("Scegli un numero da 1 a 5");

  // converto solo se non è null
  if (number) number = parseInt(number);

  // finché number NON è valido, ripeti
  while (Number.isNaN(number) || number < 1 || number > 5) {
    number = prompt("Inserisci un numero valido (da 1 a 5)");
    if (number) number = parseInt(number);
  }

  return number;
}