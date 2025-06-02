/* Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto.
Prima di partire a scrivere codice poniamoci qualche domanda: Che ci sia un array da qualche parte? Se dobbiamo confrontare qualcosa che "cosa" ci serve? */

let userDieResult = 1;
let computerDieResult = 1;

while (userDieResult === computerDieResult) {
    // Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
    userDieResult = Math.floor(Math.random() * 6 + 1); // genera il numero random dell'utente
    alert("Il dado lanciato dall'utente ha dato il numero : " + userDieResult);
    computerDieResult = Math.floor(Math.random() * 6 + 1); // genera il numero del computer
    alert('Il dado lanciato dal computer ha dato il numero : ' + computerDieResult);
    // Stabilire il vincitore, in base a chi fa il punteggio più alto.
    if (userDieResult > computerDieResult) {
        console.log("Vince l'utente perché il numero uscito dal lancio del suo dado è più alto");
        alert("Vince l'utente perché il numero uscito dal lancio del suo dado è più alto");
        // flag = true;
    } else if (userDieResult < computerDieResult) {
        console.log("Vince il computer perché il numero uscito dal lancio del suo dado è più alto");
        alert("Vince il computer perché il numero uscito dal lancio del suo dado è più alto");
        // flag = true;
    } else {
        console.log("I numeri usciti dal lancio dei dadi sono uguali, rilancia i dadi");
        alert("I numeri usciti dal lancio dei dadi sono uguali, rilancia i dadi");
    }
}
