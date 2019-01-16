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
var app_parameters={
		host_param: 'localhost',
		port_param: '8082',
		getServByUrl_apipath: 'service-manager/api/v1/services/searchByUrl?url=',
		getPDataCategoryTree_apipath: 'service-manager/api/v1/pdatafields/category/tree',
		findById_apipath: 'service-manager/api/v1/services/',
		create_apipath: 'service-manager/api/v1/services/'
};

chrome.storage.local.get(['defJsonService'], function(result) {
	
	var nj = JSON.parse(result.defJsonService);
	
	console.log("contenuto nuovo servizio: ");
	console.log(nj);
	console.log(nj.publicServiceName);
	if(nj.publicServiceName){
		console.log("Dentro re_hint_on");
	    
		var html_1 = "<tr class=\"optionalRow\"><td style=\"padding-bottom: 1em;padding-top: 1em;\">Vuoi registrare il servizio <span style=\"color:#1abb9c;font-weight:600\">"+nj.publicServiceName+"</span>?</td></tr>";
		var html_2 = "<tr class=\"optionalRow\"><td style=\"padding-bottom: 1em;border-bottom: 1px solid #F0F0F0;text-align: center;\">"
			+"<button style=\"margin-right: 15px;\" id=\"yes-ch\" type=\"button\">Si</button>"
			+"<button id=\"no-ch\" type=\"button\">No</button></td></tr>";
		$('#optionTable tr:eq(1)').after(html_1+html_2);
	}
	else{
		
	}

});


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

/*Checking actual plugin state*/
chrome.storage.local.get(['pluginSwitch'], function(result) {
	try{
		
		//ATTIVA IL PLUGIN
		if(result.pluginSwitch){
			$('.optionalRow').show();
			switchON.checked = true;
			switchOFF.checked = false;
			
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

function saveNewService(){
	
	chrome.storage.local.get(['defJsonService'], function(result) {
	
		//registro il servizio presso CDV
		//POST - create_apipath
		var url_ = "http://"+app_parameters.host_param+":"+app_parameters.port_param+"/"+app_parameters.create_apipath;
		$.ajax({
			url: url_,
			method: 'POST',
			contentType: "application/json",
			data: result.defJsonService,
		}).done(function(data) {
			console.log("Nuovo servizio registrato correttamente");
			//stacca la sezione SI/NO dall'html e svuota la variabile di sessione defJsonService
		}).fail(function() {
		  alert( "Errors occurred in service registration. Please be careful and try again..." );
		})
	});
}

$(document).on('click', '#yes-ch', function() {
    saveNewService();
});

$(document).on('click', '#no-ch', function() {
	//stacca la sezione SI/NO dall'html e svuota la variabile di sessione defJsonService
});
	
	