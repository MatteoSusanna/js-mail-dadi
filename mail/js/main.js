/* Mail
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.

*/


const mail = ['matteo@gmail.com', 'roberta@gmail.com', 'federico@gmail.com', 'carla@gmail.com'];
const mailIns = prompt('inserisci la tua email');



for (let i = 0; i < mail.length; i++) {
    
    if(mail[i] == mailIns){
        alert ('la mail ' + mailIns + ' è nella lista');
        i = 4;
    }
    
}


