//caricare librerie BOOTSTRAP animate fontawesome
//inserimento
//controlli
//modifica ed eliminazione
//Json
//Inserire nel localStorage

var btnIns = document.getElementById('btnIns');
var btnStampa = document.getElementById('btnStampa');
var feedback = document.getElementById('feedback');
var lista = document.getElementById('lista');

function inserisci(){
    //recupera item e data e scrive nella lista
    var item = document.getElementById('item').value;
    var elData = document.getElementById('data').value;
    var data = new Date(elData);

    var elLI = document.createElement('li');

    elLI.innerHTML = item + ' - ' + data.getDate() + '/' + (data.getMonth() + 1) + '/' + data.getUTCFullYear();
    elLI.setAttribute('class', 'animate__animated animate__fadeInUp mt-3');

    lista.appendChild(elLI);


    //pulsante elimina + funzionalità
    var elRemove = document.createElement('button');
    elRemove.innerHTML = '<i class="bi bi-trash"></i>';
    elRemove.setAttribute('class', 'btn btn-warning ms-2');
    elLI.appendChild(elRemove);

    elRemove.addEventListener('click', rimuovi, false);

    function rimuovi(){
        elLI.parentNode.removeChild(elLI);
        //lista.removeChild(elLI)
    }


    //pulsante modifica + funzionalità
    var elMod = document.createElement('button');
    elMod.innerHTML = '<i class="bi bi-pencil-square"></i>';
    elMod.setAttribute('class', 'btn btn-primary ms-2');
    elLI.appendChild(elMod)

    function modifica(){
        rimuovi();
        document.getElementById('item').value = item;
        document.getElementById('data').value = elData;
    }

    elMod.addEventListener('click', modifica, false);

    //funzionalità "barrato"
    function barrato(){
        if(elLI.className == ''|| elLI.className == 'animate__animated animate__fadeInUp mt-3'){
            elLI.setAttribute('class','barrato');
        }else{
            elLI.removeAttribute('class');
        }

    }

    elLI.addEventListener('click',barrato,false);



    document.getElementById('item').value = '';
    document.getElementById('data').value = '';


}

btnIns.addEventListener('click', inserisci, false);

//comporre JSON
var datiJSON = [];

//costruttore di oggetto da inserire in array
function todoOBJ(testo,data){
    
    this.testo = testo;
    this.data = data;
    
}

function inserisciDati(){

    //prende singoli li, trasforma in obj, inietta in array
    var lis = document.getElementsByTagName('li'); //collectionHTML
    datiJSON = [];

    [...lis].forEach(liTxt => {   //con questa dicitura trasformo collection in array 
        // datiJSON.push;

        var diviso = liTxt.firstChild.textContent.split(' - ');

        var obj = new todoOBJ(diviso[0],diviso[1]);

        datiJSON.push(obj);
        
        console.log(datiJSON);

    });

}

var zonaStampa = document.getElementById('versioneJSON')

function stampaJSON(){

    var txtDaStampare = JSON.stringify(datiJSON);
    zonaStampa.innerHTML = txtDaStampare;


}

btnIns.addEventListener('click',inserisciDati,false);
btnStampa.addEventListener('click',stampaJSON,false);