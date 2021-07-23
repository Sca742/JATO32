              
       //funzione che prende in input i dati dell'utente, crea un oggetto persona e stampa a console le proprietà di persona, 
        //resettando i campi di input ad avvenuta ricezione o facendo apparire un alert in caso di campo vuoto 
        function inviaDati(){

            var elNome = document.getElementById('nome').value;
            var elCognome = document.getElementById('cognome').value;
            var elEmail = document.getElementById('email').value;
            var elData = document.getElementById('dataNascita').value;
            var elSesso = assegnaSesso();

            
            if(elNome != '' && elCognome != '' && elEmail!= '' && elData != '' && elSesso != ''){
                var iscritto = new persona(elNome, elCognome, elEmail, elData, elSesso);
                iscritto.toString();
                resetCampi();
                alert('dati inseriti correttamente');
            } else{
                alert("necessario compilare tutti i campi");
            }

        }
        
        // funzione che ispeziona gli elementi radio e assegna valore a variabile elSesso a seconda di quale elemento è stato scelto
        //se non è stato scelto nulla ritorna una stringa vuota al fine di controllo
        function assegnaSesso(){
            if (document.getElementById('m').checked){
                return elSesso = 'm';
            }else if(document.getElementById('f').checked){
                return elSesso = 'f';
            }else{
                return elSesso ='';
            }
            
        }
        
        // funzione che resetta i campi di input dopo aver ricevuto i dati dell'utente
        function resetCampi(){
            document.getElementById('nome').value = "";
            document.getElementById('cognome').value = "";
            document.getElementById('email').value = "";
            document.getElementById('dataNascita').value = "";
            document.getElementById('m').checked = false;
            document.getElementById('f').checked = false;
        }
      
        // costruttore dell'oggetto persona
        function persona(nome, cognome, email, dataNascita, sesso){

            this.nome = nome;
            this.cognome = cognome;
            this.email = email;
            this.dataNascita = dataNascita;
            this.sesso = sesso;

            this.toString = function(){

                for(const chiave in this){

                    if(typeof this[chiave] != 'function'){

                        // inverto data
                        if(chiave == 'dataNascita'){

                            var frase = this[chiave].split('-').reverse().join("-");
                            console.log('data di Nascita: ' + frase);
                        
                        }else{
                            console.log(chiave + ': ' + this[chiave]);
                        }
                    }
                }
            
            }

        }