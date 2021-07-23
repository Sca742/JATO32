var elOutput = document.getElementById('output');
var btn = document.getElementById('btn');

elOutput.innerHTML = '<ul id="lista"> </ul>';

var elLista = document.getElementById('lista');

var todoarr = [];

//funzione che recupera il valore del testo nel campo di input, lo passa alla funzione controlla e infine lo stampa
btn.onclick = function aggiungi(){
    
    //al click sul pulsante viene recuperato il testo del campo input 
    var elInput = document.getElementById('item').value;
    
    // controllo si poteva scrivere come (item.length > 0 && todoarr.indexOf(item) == -1)
    // todoarr.push(parolainserita)
    controllo(elInput);
    
    stampa();
    
    reset();
}

//funzione che resetta il campo dopo aver inserito la parola
function reset(){
    document.getElementById('item').value = "";
}



//funzione che controlla se la parola da inserire è gia stata inserita. se si non la inserisce se no la ineserisce nell'array 
function controllo(parolaInserita){
    
    var uguali = false;
    
    if(todoarr.length == 0){
        if(parolaInserita != ""){
            todoarr.push(parolaInserita);
        }
    }else{
        //controllo se esiste in lista la voce che sto inserendo
        for(var i = 0; i <= (todoarr.length)-1; i++){
            if(parolaInserita == todoarr[i]){
                uguali = true;
            } 
        }
        //se non è presente la aggiungo
        if(uguali == false){
            if(parolaInserita != ""){
                todoarr.push(parolaInserita)
            }
        }
        //se è presente non faccio nulla
    }
}


//funzione che stampa l'array dopo averlo ordinato
function stampa(){
    elLista.innerHTML='';

    //ordino l'array in ordine alfabetico,
    todoarr.sort();
    for(var i = 0; i < todoarr.length; i++){
        //stampo nella pagina    
        //inserire accanto ad ogni item della lista una checkbox
        elLista.innerHTML += '<li><input type="checkbox" id="check"> <span>' + todoarr[i].toLowerCase() + '<span></li>';
    }
}







