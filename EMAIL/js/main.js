/* 
JAVASCRIPT
*/

//dichiaro le variabili
const emailRequest = document.querySelector('#email');

const button = document.querySelector('#button');

const risultatoVerifica = document.querySelector('#risultato');

//array
let emailList = [
    'marcorossi@gmail.com', 
    'andreabianchi@libero.it', 
    'antonellaverdi@yahoo.it', 
    'fedesasso@cloud.com', 
    'ab@gmail.com'
];

//di default imposto che l'email non puo accedere
let access = false;

// evento per il click del bottone di verifica
button.addEventListener('click', 
    function() {
        // ciclo di controllo fino alla fine degli elementi dell'array
        for (let i = 0; i < emailList.length; i++) {
            //identifico l'email corrente che sto scorrendo nel ciclo
            const emailCorrente = emailList[i];
            console.log(emailRequest.value);

            //se l'email corrente è uguale all'email da verificare l'accesso è consentito
            if (emailCorrente == emailRequest.value) {
                access = true;
            }
            //Altrimenti passo al controllo della prossima
        }
        // Dopo averle controllate tutte, SE l'email era nella lista l'utente ha diritto all'accesso
        if (access == true) { 
            risultatoVerifica.innerHTML = "L'email è nella lista, hai diritto all'accesso!";
            risultatoVerifica.classList.remove('text-danger');
            risultatoVerifica.classList.add('text-success');
            console.log("L'email è nella lista, hai diritto all'accesso!");
        //ALTRIMENTI l'utente non ha diritto all'accesso
        } else {
            risultatoVerifica.innerHTML = "L'email non è nella lista, non hai diritto all'accesso!";
            risultatoVerifica.classList.remove('text-success');
            risultatoVerifica.classList.add('text-danger');
            console.log("L'email non è nella lista, non hai diritto all'accesso!");
        }
    }
);








/*  VERSIONE CON IL PROMT E SENZA IL FORM:

//dichiaro le variabili
const risultatoVerifica = document.querySelector('#risultato');

//array
let emailList = [
    'marcorossi@gmail.com', 
    'andreabianchi@libero.it', 
    'antonellaverdi@yahoo.it', 
    'fedesasso@cloud.com', 
    'ab@gmail.com'
];

//chiedo l'email all'utente
const emailRequest = prompt('Inserisci la tua email:');

//di default imposto che l'email non puo accedere
let access = false;

// ciclo di controllo fino alla fine degli elementi dell'array
for (let i = 0; i < emailList.length; i++) {
    //identifico l'email corrente che sto scorrendo nel ciclo
    const emailCorrente = emailList[i];

    //se l'email corrente è uguale all'email da verificare l'accesso è consentito
    if (emailCorrente == emailRequest) {
        access = true;
    }
    //Altrimenti passo al controllo della prossima
}
// Dopo averle controllate tutte, se l'email era nella lista l'utente ha diritto all'accesso
if (access == true) { 
    risultatoVerifica.innerHTML = "L'email è nella lista, hai diritto all'accesso!";
    risultatoVerifica.classList.remove('text-danger');
    risultatoVerifica.classList.add('text-success');
    console.log("L'email è nella lista, hai diritto all'accesso!");
//ALTRIMENTI l'utente non ha diritto all'accesso
} else {
    risultatoVerifica.innerHTML = "L'email non è nella lista, non hai diritto all'accesso!";
    risultatoVerifica.classList.remove('text-success');
    risultatoVerifica.classList.add('text-danger');
    console.log("L'email non è nella lista, non hai diritto all'accesso!");
}
*/