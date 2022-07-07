/* Mail
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.

*/


const mail = ['matteo@gmail.com', 'roberta@gmail.com', 'federico@gmail.com', 'carla@gmail.com'];
const mailIns = prompt('inserisci la tua email');

let ric;

for (let i = 0; i < mail.length; i++) {
    
    if(mail[i] == mailIns){
        ric = 'si';
        alert ('la mail ' + mailIns + ' è nella lista');
    }
    
}

if(ric != 'si'){
    alert ('la mail ' + mailIns + ' non è nella lista');
}