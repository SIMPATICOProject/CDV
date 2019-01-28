//To access option
/*var backgroundPage = chrome.extension.getBackgroundPage();

backgroundPage.options.setLocalStore(key, value)
backgroundPage.options.resetLocalStore(key)

backgroundPage.options.getLocalStore(key)
backgroundPage.options.getLocalStore(key, fallback)
backgroundPage.options.getLocalStore(key, fallback, fn)*/

/*var port = chrome.extension.connect({
    name: "Sample Communication"
});
port.postMessage("Hi BackGround");
port.onMessage.addListener(function(msg) {
    console.log("message recieved" + msg);
});*/

/*Se defJsonService contiene un json allora il servizio corrente non è registrato.
 * Il frammento seguente aggiunge al menu popup la possibilità di salvare il servizio
 * o di non considerare il portale visitato come servizio da registrare.*/

function showHintReg(){
	
	chrome.storage.local.get(['defJsonService'], function(result) {
		
		var nj = JSON.parse(result.defJsonService);
		
		console.log("contenuto nuovo servizio: ");
		console.log(nj);
		console.log(nj.publicServiceName);
		
		if(nj.publicServiceName){
			console.log("Dentro re_hint_on");
		    
			var html_1 = "<tr id=\"add_1\" class=\"optionalRow\"><td style=\"padding-bottom: 1em;padding-top: 1em;\">Servizio non registrato, vuoi <span style=\"color:#1abb9c;font-weight:600\">registrarlo adesso</span>?</td></tr>";
			var html_2 = "<tr id=\"add_2\" class=\"optionalRow\"><td style=\"padding-bottom: 1em;border-bottom: 1px solid #F0F0F0;text-align: center;\">"
				+"<button style=\"margin-right: 15px;\" id=\"yes-ch\" type=\"button\">Si</button>"
				+"<button id=\"no-ch\" type=\"button\">No</button></td></tr>";
			$('#optionTable tr:eq(1)').after(html_1+html_2);
		}
		else{
			console.log("dentro else ");
			//rimozione forzata, nel caso in cui si sia cambiata tab
/*			$("#add_1").remove();
			$("#add_2").remove();*/
			
			var html_1 = "<tr id=\"add_1\" class=\"optionalRow\"><td style=\"padding-top: 1em;\">Servizio già registrato in CDV</td></tr>";
			$('#optionTable tr:eq(1)').after(html_1);
		}

	});
	
}

showHintReg();

/*target _blank per link in popup*/
document.addEventListener('DOMContentLoaded', function () {
    var links = document.getElementsByTagName("a");
    for (var i = 0; i < links.length; i++) {
        (function () {
            var ln = links[i];
            var location = ln.href;
            ln.onclick = function () {
                chrome.tabs.create({active: true, url: location});
            };
        })();
    }
});


/*ON-OFF SWITCH MANAGEMENT*/

/*Checking current plugin state*/
chrome.storage.local.get(['pluginSwitch'], function(result) {
	try{
		
		//ATTIVA IL PLUGIN
		if(result.pluginSwitch){
			$('.optionalRow').show();
			switchON.checked = true;
			switchOFF.checked = false;
			console.log("prima di quello che dovrei ma che non so");
			showHintReg();
			
			//chrome.contextMenus.create({"title": "Save the selection like a CDV concept", "id": "contMenu", "contexts":"selection","onclick": selectionOnClick});
		}
		
	}catch(err){
		console.log("pluginSwitch not stored yet");
	}
});

/*PLUGIN TOGGLE*/
document.addEventListener('DOMContentLoaded', function () {
	  document.querySelector('#radioForm').addEventListener('change', changeHandler);
	});

function changeHandler(){
	
	//ATTIVA PLUGIN
	if(switchON.checked){
	  $('.optionalRow').show();
	  chrome.storage.local.set({"pluginSwitch": true}, function() {});
	  
	  //to reload service tab when switching to ON
	  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
		  chrome.tabs.reload(tabs[0].id);
	  });

	}
	//DISATTIVA PLUGIN
	else{
	  $('.optionalRow').hide();
	  chrome.storage.local.set({"pluginSwitch": false}, function() {});
	  
	  //to reload service tab when switching to OFF
	  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
		  chrome.tabs.reload(tabs[0].id);
	  });
	}
}
/*ON-OFF SWITCH MANAGEMENT - FINE*/


/*Clicked YES: salva il servizio su CDV mediante POST*/
function saveNewService(){
	
	console.log("INSIDE saveNewService");
	
	chrome.storage.local.get(['defJsonService'], function(result) {
	
		console.log(result.defJsonService);
		
		emptyDefJS();
		
		//Reindirizzamento verso SHOW ALL ANNOTATIONS per completamento registrazione
		chrome.tabs.create({active: true, url: "../src/annotator.html"});
	});
}

//Clicked NO: Stacca la sezione SI/NO dall'html e svuota la variabile di sessione defJsonService
function emptyDefJS(){
	chrome.storage.local.set({"defJsonService": false}, function() {});
	$("#add_1").remove();
	$("#add_2").remove();
	console.log("INSIDE emptyDefJS");
}

$(document).on('click', '#yes-ch', function() {
    saveNewService();
});

$(document).on('click', '#no-ch', function() {
	emptyDefJS();
});
	
	