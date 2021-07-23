
var utenti;
var nuovoUtente;

//prendo utenti e li scrivo in h1
$.ajax({
    url: "https://reqres.in/api/users?page=1",
    type:"GET",
    dataType:'json',
    success: function(dati){
        // console.log(dati);
        
        //carico json utenti in array di utenti
        utenti = dati.data;

        stampaUtenti();
        
    },

    error:function(textStatus){
        if(textStatus.status == 404){
            console.log('risorsa non trovata');
            console.log(textStatus.status);
        }else{
            console.log('qualcosa è andato storto');
        }
    },
    
})


//funzione che svuota la lista dei contatti e la ricarica in base agli utenti nell'array
//utilizzo di accordion bootstrap al cui interno vi è la card con le info dell'utente 
function stampaUtenti() {
    $("#listaContatti").empty();

    for (let i = 0; i < utenti.length; i++) {
       
        $('#listaContatti').append(
            
            //accordion
            '<div class="accordion-item">' +
                '<h2 class="accordion-header" id="headingTwo">' +
                    '<button id="nomeUtente" class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse' + utenti[i].first_name + '" aria-expanded="true" aria-controls="collapseTwo">'
                    + utenti[i].first_name + ' ' + utenti[i].last_name + '</button>'+
                '</h2>'+
                '<div id="collapse' + utenti[i].first_name + '" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">' +
                    '<div class="accordion-body" id="infoCard">' +
            
                        // card
                        '<div class="card" style="width: 18rem;" id="card'+i+'">' +
                            "<img class='card-img-top' src='"+ utenti[i].avatar +"' alt=''>" +
                            '<div class="card-body">' +
                                '<h5 class="card-title">' + utenti[i].first_name + '-' + utenti[i].last_name + '</h5>'+
                                '<p class="card-text">' + utenti[i].email + '</p>' +
                                '<button id="btnMod" class="btn btn-warning"> <i class="fas fa-pen"></i></button>' +
                                '<button id="btnDel" class="btn btn-danger"> <i class="fas fa-trash-alt"></i></button>' +
                            '</div>' +
                        '</div>' +
            
                '</div>'+
            '</div>'
        );     
    }
}

//collegamento del bottone delete con la funzione elimina
$(document).on('click','#btnDel',elimina);

//funzione che 
function elimina(){
    $(this).parent()
    .parent()
    .parent()
    .parent()
    .parent().remove();
}

//collegamento della funzione modifica al bottone update
$(document).on('click','#btnMod',modifica);

//ritorna indice di utente attraverso la mail
function getIndexByEmail(emaildellaltro) {
    for (let i = 0; i < utenti.length; i++) {
        if (utenti[i].email==emaildellaltro) {
            return i;
        }
    }
    console.log("email non trovata")
    return -1;
}

//funzione che elimina l'utente selezionato per la modifica, riporta i valori dell'utente nel form e permette un nuovo inserimento
function modifica(){
    $("#"+$(this).parent().parent().attr("id")).find("#btnDel").click();
    
    //cambiare con funzione rimuovi?
    delete utenti[getIndexByEmail($(this).parent().find('p').html())]
    utenti.sort();
    utenti.pop();
    
    $('#name').val($(this).parent().children(0).html().split('-')[0]);
    $('#surname').val($(this).parent().children(0).html().split('-')[1]);
    $('#email').val($(this).parent().find('p').html());
                               
}
        
//collegamento della funzione aggiungi al bottone del form 
$('#btn').on('click', aggiungi);

//funzione che passa i dati del nuovo utente via post e li aggiunge all'array di utenti
//non permette inserimento se si lascia un campo vuoto nel form
//stampa di nuovo la lista di utenti
function aggiungi() {
    if (($('#name').val()=="")||($('#email').val()=="")||($('#surname').val()=="")) {
                
    } else {
                
        $.ajax({
            url: "https://reqres.in/api/users",
            type: "POST",
            data: {
                first_name: $('#name').val(),
                last_name: $('#surname').val(),
                email: $('#email').val(),
                id: (Number)(1+utenti.length),
                avatar: 'https://reqres.in/img/faces/'+(Number)(Math.ceil(10*(Math.random())))+'-image.jpg'
            },
            success: function(response){
                $('#name').val("");
                $('#surname').val("");
                $('#email').val("");
                nuovoUtente=response;
                            
                utenti.push(nuovoUtente);
                            
                stampaUtenti();
            }
        })
    }
}
 

//rivedere funzione delete: dopo delete di utente, se ne inserisco/modifico uno me lo fa rivedere poiche non eliminato in array

//implementare funzione che non fa inserire due volte lo stesso utente -> porta a rottura di accordion