//switch 
var livello = 3;
var messaggio;

switch(livello){

    case 1:
        messaggio = 'in bocca al lupo per il primo livello';
    break;
        
    case 2:
        messaggio = 'hai superato il primo livello buona fortuna per il secondo'
    break;

    case 3:
        messaggio = "sei all\' ultimo livello, ci sarà il mostro"
    break;

    default:
        messaggio = 'ciao giocatore';
    break;

}

console.log(messaggio);

//operatore ternario

var eta = 18;
var msg = '';

msg = (eta >= 18) ? "puoi giocare" : "aspetta non hai l'eta adatta";

console.log(msg);

