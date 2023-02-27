/* 
JAVASCRIPT
*/
//variabili
const button = document.querySelector('#button');
const risultato = document.querySelector('#risultato');
let user = document.querySelector('#myNumber');
let computer = document.querySelector('#computerNumber');

button.addEventListener('click', 
    function () {
        //genero un numero casuale da 1 a 6 per me
        let mioNumero = Math.floor(Math.random () * 6) + 1;
        user.innerHTML = mioNumero;
        console.log(mioNumero);

        //genero un numero casuale da 1 a 6 per il computer
        let computerNumero = Math.floor(Math.random () * 6) + 1;
        computer.innerHTML = computerNumero;
        console.log(computerNumero);

        //se i due numeri sono uguali pareggiamo
        if (mioNumero == computerNumero) {
            risultato.innerHTML = 'PAREGGIO!';
            console.log('PAREGGIO!');
        //se il mio numero è maggiore del numero del computer vinco
        } else if (mioNumero > computerNumero) {
            risultato.innerHTML = 'Hai vinto tu!';
            console.log('Hai vinto tu!');
        //Altrimenti vince il computer
        } else {
            risultato.innerHTML = 'Ha vinto il computer!';
            console.log('Ha vinto il computer!');
        }
    }
);


