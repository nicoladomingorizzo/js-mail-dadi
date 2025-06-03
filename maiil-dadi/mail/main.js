/* Mail
Crea una lista di email di invitati ad una festa. Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo, utilizzando un ciclo for. Non è consentito usare nessun metodo proprio degli array (come includes, per esempio). Si può fare? Certo che si basta ragionare un po’. Nota: Non è necessario provvedere alla validazione delle email */

// Crea una lista di email di invitati ad una festa
let mailList = []; // array creata
// Chiedi all’utente la sua email
const userMail = prompt('Inserisci la tua mail per poter partecipare alla festa'); //promptmail creata
let userMailVerified = false; // let userMailVerified creata 
mailList.push(userMail); // promptmail inserito nella mail list
// controlla che sia nella lista di chi può accedere
for (let i = 0; i < mailList.length; i++) {
    console.log(mailList[i])
    const currentemail = mailList[i]
    if (currentemail === userMail) {
        userMailVerified = true
        break
    }
}; // ciclo for sostitutivo a .includes
// stampa un messaggio appropriato sull’esito del controllo, utilizzando un ciclo for
console.log("La mail è verficata, l'utente può accedere alla festa"); // log message inserito
alert("La mail è verficata, puoi accedere alla festa"); // alert message inserito