/* 
JAVASCRIPT
*/
//dichiaro le variabili
const emailRequest = document.querySelector('#email');

const button = document.querySelector('#button');

const risultatoVerifica = document.querySelector('#risultato');
//array
let emailList = ['marcorossi@gmail.com', 'andreabianchi@libero.it', 'antonellaverdi@yahoo.it', 'fedesasso@cloud.com', 'ab@gmail.com'];

// evento per il click del bottone di verifica
button.addEventListener('click', 
    function() {
        let email = emailRequest.value;
        console.log(email);
        // ciclo di controllo fino alla fine degli elementi dell'array
        for (let i = 0; i < emailList.length; i++) {
            //se l'email che ha inserito l'utente è uguale a un elemento dell'array l'utente ha diritto all'accesso
            if (email == emailList[i]) {
                risultatoVerifica.innerHTML = "L'email è nella lista, hai diritto all'accesso!";
                risultatoVerifica.classList.remove('text-danger');
                risultatoVerifica.classList.add('text-success');
                console.log("L'email è nella lista, hai diritto all'accesso!");
                i = emailList.length;
            //se il valore di i diventa diverso dai valori presenti nell'array, l'email non è contenuta nell'array quindi l'utente non ha diritto all'accesso
            } else if (i == (emailList.length - 1)) {
                risultatoVerifica.innerHTML = "L'email non è nella lista, non hai diritto all'accesso!";
                risultatoVerifica.classList.remove('text-success');
                risultatoVerifica.classList.add('text-danger');
                console.log("L'email non è nella lista, non hai diritto all'accesso!");
            }
        }
    }
);







/*  VERSIONE CON IL PROMT E SENZA IL FORM:

//chiedo l'email all'utente
const emailRequest = prompt('Inserisci la tua email:');

//dichiaro le variabili
const risultatoVerifica = document.querySelector('#risultato');

let emailList = ['marcorossi@gmail.com', 'andreabianchi@libero.it', 'antonellaverdi@yahoo.it', 'fedesasso@cloud.com', 'ab@gmail.com'];


// ciclo di controllo fino alla fine degli elementi dell'array
for (let i = 0; i < emailList.length; i++) {
    //se l'email che ha inserito l'utente è uguale a un elemento dell'array l'utente ha diritto all'accesso
    if (emailRequest == emailList[i]) {
        risultatoVerifica.innerHTML = "L'email è nella lista, hai diritto all'accesso!";
        risultatoVerifica.classList.remove('text-danger');
        risultatoVerifica.classList.add('text-success');
        console.log("L'email è nella lista, hai diritto all'accesso!");
        i = emailList.length;
    //se il valore di i diventa diverso dai valori presenti nell'array, l'email non è contenuta nell'array quindi l'utente non ha diritto all'accesso
    } else if (i == (emailList.length - 1)) {
        risultatoVerifica.innerHTML = "L'email non è nella lista, non hai diritto all'accesso!";
        risultatoVerifica.classList.remove('text-success');
        risultatoVerifica.classList.add('text-danger');
        console.log("L'email non è nella lista, non hai diritto all'accesso!");
    }
};

*/