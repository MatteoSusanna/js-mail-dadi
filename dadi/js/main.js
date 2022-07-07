/*
Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
*/



let numeroGiocatore = document.getElementById('boxGiocatore');
let numeroPc = document.getElementById('boxPc');
let risultatoDom = document.getElementById('risultato');



document.getElementById('vai').addEventListener('click',
function(){

    numeroGiocatore.innerHTML = Math.floor(Math.random() * 6) + 1;
    numeroPc.innerHTML = Math.floor(Math.random() * 6) + 1;


        if(numeroGiocatore.innerHTML > numeroPc.innerHTML){
            risultatoDom.innerHTML = 'Hai vinto!!';
        }else if(numeroGiocatore.innerHTML == numeroPc.innerHTML){
            risultatoDom.innerHTML = 'E un pareggio!!';
        }else{
            risultatoDom.innerHTML = 'Ha vinto il PC!!';
        }
        


}
);


