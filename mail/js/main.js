/* Mail
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.

*/


const mail = ['matteo@gmail.com', 'roberta@gmail.com', 'federico@gmail.com', 'carla@gmail.com'];
const mailIns = document.getElementById('email');

let puoiEntrare;
document.getElementById('vai').addEventListener('click',
function(){
    for (let i = 0; i < mail.length; i++) {
    
        if(mail[i] == mailIns.value){
            puoiEntrare = 'si';
            alert ('la mail ' + mailIns.value + ' è nella lista');
        }
        
    }
    
    if(puoiEntrare != 'si'){
        alert ('la mail ' + mailIns.value + ' non è nella lista');
    }
}
)
