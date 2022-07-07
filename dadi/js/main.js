/*
Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
*/


const numeroGiocatore = Math.floor(Math.random() * 6) + 1;
console.log(numeroGiocatore);

const numeroPc = Math.floor(Math.random() * 6) + 1;
console.log(numeroPc);

    if(numeroGiocatore > numeroPc){
        alert ('Hai vinto!! è uscito ' + numeroGiocatore + ' e per il pc ' + numeroPc);
    }else if(numeroGiocatore == numeroPc){
        alert ('è un pareggio di ' + numeroPc + ' a ' + numeroGiocatore );
    }else{
        alert ('Ha vinto il PC con ' + numeroPc + ' che più altro del tuo numero ' + numeroGiocatore);
    }
