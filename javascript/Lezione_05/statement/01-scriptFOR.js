//for

var punteggi = [24,36,18,46];
var messaggio;
var demo = document.getElementById('demo');

for(var i = 0; i < punteggi.length; i++){
        messaggio += '<p> livello numero ' + (i+1) + ' Punti totalizzati: ' + punteggi[i] + '<br>';

        if(punteggi[i] < 20){
            messaggio += 'in questo livelo potevi impegnarti di piu <br>'
        }
        messaggio += '</p>'
}

demo.innerHTML = messaggio;



//for of utile sugli oggetti iterable
for(var iteratore of punteggi){
    console.log("punteggio " + iteratore);
}

//for in utile per gli oggetti 
var studente = {
    nome: 'pippo',
    cognome: 'rossi',
    voto: 30,
    materie: ['java','javascript','html css']
}

for(var proprieta in studente){
    console.log(proprieta + ' : ' + studente[proprieta]);
}


//for each
punteggi.forEach(r => {
    console.log('Punteggio: ' + r);
});

//collection
var titoli = document.getElementsByClassName('titolo');
console.log(titoli);

[...titoli].forEach(element => {     //3 punti per trasformare oggetto in array
    console.log(element.innerHTML);
})




