//operatori di confronto
// < > =< >=

var num1 = 10;
var num2 = '10';

// operatore di confronto ==
if(num1 == num2){
    console.log("i due numeri sono uguali");
} else{
    console.log("i due numeri sono diversi");
}

// operatore di confronto ===, oltre a valutare il contenuto valuta anche il tipo

if(num1 === num2){
    console.log("le due var sono uguali");
}else{
    console.log("le due var sono diverse");
}

//operatori logici ||(or); &&(and); !(not)
var punteggio = 70;
var skills = 39;

if(punteggio >= 50 && skills >= 40){
    console.log("bravo hai superato il primo livello");
}else if(punteggio >= 50 && skills < 40){
    console.log("mi dispiace devi migliorare le tue skills");
}else if( punteggio < 50 && skills >= 40){
    console.log("mi dispiace devi migliorare il tuo punteggio");
}else{
    console.log("mi dispiace cambia gioco perche fai schifo!!!!");
}

if(punteggio<50 || skills <40){
    console.log("mi dispiace fai schifo");
}else if(punteggio >= 50 || skills < 40){
    console.log("una delle due abilità è inferiore alla soglia");
}else{
    console.log("hai superato il livello");
}

// condizione1     condizione2     valutazione     &&
// vera            vera            vera
// falsa           vera            falsa
// vera            falsa           falsa
// falsa           falsa           falsa

// condizione1     condizione2     valutazione     ||
// vera            vera            vera
// falsa           vera            vera
// vera            falsa           vera
// falsa           falsa           falsa


