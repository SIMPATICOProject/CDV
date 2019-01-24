// Code goes here

//var selectChange = false;

var nameC_rem = "";
var conceptID_rem = "";
var propConc_rem = "";
var storedID = null;
var serviceID = -1;

$("#inputConcept").on("change", function (e) {

    //var data = e.params.data;
    console.log("dentro if change");
    console.log(e.added.id);
    $("#inputName").val(e.added.id);

});


$("#inputConcept").select2({

  ajax: {
    url: "http://localhost:8080/service-manager/api/v1/pdatafields/search",
    dataType: 'json',
    delay: 250,
    data: function (regex) {
            return {
                regex: regex
            };
        },
    results: function (data) {
      return {
                results: $.map(data, function (item) {
                    return {
                        text: item.name,
                        id: item.name
                    }
                })
            };
    }
  }
});


/*Caricamento concetto di default in select2 dropdown*/
$(document).ready(function() {

    var ch = -1;

    var lj = null;//sessionStorage.getItem("localSelJSON");
    //console.log("valore memorizzato in DIALOG SELECTION");
    //console.log(lj);

    var s = $("#hidDid").text();

    if(s){
        lj = $("#hidServ").text();
        console.log("valore memorizzato in DIALOG SELECTION");
        console.log(lj);

        if(lj){
            ch = 0;
        }
    }
    else if(!lj){
        //lj = sessionStorage.getItem("localJSON");
        lj = $("#hidServ").text();
        console.log("valore memorizzato in DIALOG ANNOTATOR");
        console.log(lj);
        
        if(lj){
            ch = 1;
        }
    }


    //SELECTION
    if(ch == 0){
        console.log("SELECTION_CONCEPT: trovato json service in chrome storage");

        var idConc = $("#inputProperty").val();

        var ljx = JSON.parse(lj);
        var ljo = JSON.parse(ljx);
        serviceID = ljo.publicServiceID;

        console.log("Valore di idConc DIALOG_SELECTION: ");
        console.log(idConc);
        console.log("Valore di serviceID DIALOG_SELECTION: "); 
        console.log(serviceID); 
        console.log("valore memorizzato in DIALOG_SELECTION (JOBJ)");
        console.log(ljo);
        
        //MODIFICA LJO
        var propConc_loc = $("#inputProperty").val();

        var storedIDArray = ljo.publicServiceIsDescribedAt[0].dataMapping;
        console.log("storedidarray");
        console.log(storedIDArray);
        console.log("propConc_loc");
        console.log(propConc_loc);

        for(i = 0; i < storedIDArray.length; i++){
            console.log(i);
            console.log(storedIDArray[i].property);
            if(storedIDArray[i].property == propConc_loc){
                storedID = i;
                nameC_rem = storedIDArray[i].name;
                $("#inputName").val(nameC_rem);
                conceptID_rem = storedIDArray[i].conceptId;
                //propConc_rem = storedIDArray[i].conceptId;
                console.log("concetto trovato in posizione: "+i);
                break; //siccome, se presente, è univoco allora la prima occorrenza è anche l'unica
            }
        }

        console.log("Risultato ricerca concetto in json obj: ");
        console.log(storedID);
        console.log(conceptID_rem);
        }
        //ANNOTATOR
        else if(ch == 1){

            console.log("ANNOTATOR_CONCEPT: trovato json service in chrome storage");

            var idConc = $("#inputProperty").val();

            //var ljx = JSON.parse(lj);
            var ljo = JSON.parse(lj);
            serviceID = ljo.publicServiceID;

            console.log("Valore di idConc DIALOG_ANNOTATOR: ");
            console.log(idConc);
            console.log("Valore di serviceID DIALOG_ANNOTATOR: "); 
            console.log(serviceID); 
            console.log("valore memorizzato in DIALOG_ANNOTATOR (JOBJ)");
            console.log(ljo);
            
            //MODIFICA LJO
            var propConc_loc = $("#inputProperty").val();

            var storedIDArray = ljo.publicServiceIsDescribedAt[0].dataMapping;
            console.log("storedidarray");
            console.log(storedIDArray);
            console.log("propConc_loc");
            console.log(propConc_loc);

            for(i = 0; i < storedIDArray.length; i++){
                console.log(i);
                console.log(storedIDArray[i].property);
                if(storedIDArray[i].property == propConc_loc){
                    storedID = i;
                    nameC_rem = storedIDArray[i].name;
                    $("#inputName").val(nameC_rem);
                    conceptID_rem = storedIDArray[i].conceptId;
                    //propConc_rem = storedIDArray[i].conceptId;
                    console.log("concetto trovato in posizione: "+i);
                    break; //siccome, se presente, è univoco allora la prima occorrenza è anche l'unica
                }
            }

            console.log("Risultato ricerca concetto in json obj: ");
            console.log(storedID);
            console.log(conceptID_rem);
        }
        else{
            //nessun servizio in sessione
        }




    // Fetch the preselected item, and add to the control
    //Nota: la chiave esterna conceptID di services è la chiave primaria ID di pdatafields
    var conceptSelect = $('#inputConcept');
    var concID = conceptID_rem;//non è la property ma il conceptId che trovo accanto property in datamapping 
    //nel servizio corrente registrato//$("#inputProperty").val();
    var url_ = 'http://localhost:8080/service-manager/api/v1/pdatafields/' + concID;
   
console.log("url pdf: "+url_);
console.log("concid: "+ concID);
console.log("nodo html concetto select2: ");
console.log(conceptSelect);

    $.ajax({
        type: 'GET',
        url: url_,
        async: false
    }).then(function (data) {

console.log("DATA");
console.log(data);
console.log("DATAPROP");
console.log(data.name);
var did = data.name;

   $('#inputConcept').select2('data', {id: '123', text: did});

    });//AJAX GET
});


function saveConcept(){
console.log("DENTRO SAVE CONCEPT (ANNOTATOR)");
    //chrome.storage.local.get(['jsonActiveService'], function(result) {

        var app_parameters={
        host_param: 'localhost',
        port_param: '8082',
        update_apipath: 'service-manager/api/v1/services/'
        };

        //var lj = sessionStorage.getItem("localJSON");
        lj = $("#hidServ").text();
        console.log("valore memorizzato in DIALOG_ANNOTATOR");
        console.log(lj);
        //se presente
        //if(result.jsonActiveService){
        if(lj){
console.log("SAVE_CONCEPT: trovato json service in chrome storage");
            var i = $("#hidNumCon").text();
            var serviceID = $("#hidNumServ").text();

console.log("Valore di i DIALOG_ANNOTATOR: ");
console.log(i);
console.log("Valore di serviceID DIALOG_ANNOTATOR: ");
console.log(serviceID);

            var ljo = JSON.parse(lj);
            ljo.publicServiceIsDescribedAt[0].dataMapping[i].property = $("#inputProperty").val();
            ljo.publicServiceIsDescribedAt[0].dataMapping[i].name = $("#inputName").val();
            //Concept non modificabile percvhè espone NAME//ljo.publicServiceIsDescribedAt[0].dataMapping[i].conceptId = $(".select2-drop").select2('data').text;

            //aggiornamento servizio in sessione
            sessionStorage.setItem("localJSON", JSON.stringify(ljo));

            //PUT - update_apipath
            var url_ = "http://"+app_parameters.host_param+":"+app_parameters.port_param+"/"+app_parameters.update_apipath+serviceID;
            $.ajax({
                url: url_,
                method: 'PUT',
                contentType: "application/json",
                //data: JSON.stringify(result.jsonActiveService),
                data: JSON.stringify(ljo),
            }).done(function(data) {
                alert("Il servizio è stato aggiornato");
                //REFRESH DI PAGINA ANNOTATOR PER VISUALIZZARE IL NUOVO CONCETTO
            
                window.onunload = refreshParent;
                function refreshParent() {
                    window.opener.location.reload();
                }
                window.close();

            }).fail(function() {
              alert( "Errors occurred in service update. Please be careful and try again..." );
            })
            
            //UPDATING SERVICE STORED IN SESSION
            //chrome.storage.local.set({"jsonActiveService": result.jsonActiveService}, function() {});
            
        }
        else{
            alert("Descrizione json del servizio non disponibile, impossibile apportare le modifiche");
        }

    //});

}

function saveSelConcept(){
console.log("DENTRO SAVESEL CONCEPT (SELECTION)");
    //chrome.storage.local.get(['jsonActiveService'], function(result) {

        var app_parameters={
        host_param: 'localhost',
        port_param: '8082',
        update_apipath: 'service-manager/api/v1/services/'
        };

        //var lj = sessionStorage.getItem("localSelJSON");
        lj = $("#hidServ").text();
console.log("valore memorizzato in DIALOG_SELECTION");
console.log(lj);

        var mex = "";
        //se presente
        //if(result.jsonActiveService){
        if(lj){
console.log("SAVE_CONCEPT: trovato json service in chrome storage");

            var ljx = JSON.parse(lj);
            var ljo = JSON.parse(ljx);
            
            //MODIFICA LJO
            var nameC_loc = $("#inputName").val();
            $("#inputName").val(nameC_loc);
            var conceptID_loc = $(".select2-drop").select2('data').text;
            var propConc_loc = $("#inputProperty").val();

            var storedIDArray = ljo.publicServiceIsDescribedAt[0].dataMapping;
            console.log("storedidarray");
            console.log(storedIDArray);

            var storedIDRep = -1;

            for(i = 0; i < storedIDArray.length; i++){
                if(storedIDArray[i].conceptId == propConc_loc){
                    storedIDRep = i;
                    console.log("concetto trovato in posizione: "+i);
                    break; //siccome, se presente, è univoco allora la prima occorrenza è anche l'unica
                }
            }

            //il concetto è già presente e verrà modificato
            if(storedID){ 

                ljo.publicServiceIsDescribedAt[0].dataMapping[storedID].name = nameC_loc;
                //ljo.publicServiceIsDescribedAt[0].dataMapping[storedID].property = propConc_loc;
                //per il momento spento perchè ilk servizio riporta NAME anzichè CONCEPT//ljo.publicServiceIsDescribedAt[0].dataMapping[storedID].conceptId = conceptID_loc;
                mex = "Il servizio è stato aggiornato";
            }
            else{ //il concetto non appartiene ancora al servizio
                console.log("Concetto attualmente non presente nel servizio");
                console.log("namec: ");
                console.log(nameC_loc);
                console.log("conceptid: ");
                console.log(conceptID_loc);
                console.log("propconc: ");
                console.log(propConc_loc);

                //posso memorizzare il nuovo concetto SOLAMENTE SE nel servizio non siano già 
                //presenti altri concetti con il medesimo id (univoco)
                if(storedIDRep < 0){
                    ljo.publicServiceIsDescribedAt[0]['dataMapping'].push({
                    "conceptId": conceptID_loc,"name": nameC_loc,"property": propConc_loc,"required": 0,"sensitive": 0,"type": "string"
                    });
                    console.log(ljo);
                    mex = "Il concetto è stato aggiunto al servizio corrente";
                }
                else{
                    alert("Nel servizio corrente è già presente un concetto con il medesimo id. Il concetto non può essere memorizzato.");
                }
            }

            //aggiornamento servizio in sessione
            sessionStorage.setItem("localJSON", JSON.stringify(ljo));

            if(mex != ""){
                //PUT - update_apipath
                var url_ = "http://"+app_parameters.host_param+":"+app_parameters.port_param+"/"+app_parameters.update_apipath+serviceID;
                $.ajax({
                    url: url_,
                    method: 'PUT',
                    contentType: "application/json",
                    data: JSON.stringify(ljo),
                }).done(function(data) {
                    alert(mex);
                
                    window.onunload = refreshParent;
                    function refreshParent() {
                        window.opener.location.reload();
                    }
                    window.close();

                }).fail(function() {
                  alert( "Errors occurred in service update. Please be careful and try again..." );
                })
            }
        }
        else{
            alert("Descrizione json del servizio non disponibile, impossibile apportare le modifiche");
        }
}

$(document).on('click', '#save-bt', function() {
    saveConcept();
});

$(document).on('click', '#save-sel-bt', function() {
    saveSelConcept();
});

/*$(window).on("unload", function(e) {
    //libero la variabile/mutex della finestra
   sessionStorage.setItem("openedDIALOG", null);
   console.log("finestra appena chiusa, valore openedDIALOG sessione nullato");
});*/

/*window.addEventListener("beforeunload", function(e){
   //libero la variabile/mutex della finestra
   sessionStorage.setItem("openedDIALOG", null);
   console.log("finestra appena chiusa, valore openedDIALOG sessione nullato");
}, false);*/