
        var soldiSpesi = Number( window.prompt("quanti soldi hai speso oggi?"));    
        
        const IVA = 0.22;         
        
        // var spesa = parseInt(soldiSpesi);
        var prezzoIvato = (soldiSpesi * IVA) + soldiSpesi;
        var costoIVA = prezzoIvato - soldiSpesi;

        document.write("<p>oggi hai speso: <span class='blu'>" + soldiSpesi + "</span> €</p>")
        document.write("<p>il prezzo con l'iva è: <span class='blu'>" + prezzoIvato + "</span> € </p>");

        if(soldiSpesi > 300){
        document.write("<h1>Dovrai pagare: <span class='rosso'>" + costoIVA + "</span> €</h1>")
        }else{
            document.write("<h1>Dovrai pagare: <span class='blu'>" + costoIVA + "</span> €</h1>")
        }

        