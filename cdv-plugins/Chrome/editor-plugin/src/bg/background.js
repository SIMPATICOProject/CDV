
/*GLOBAL VARIABLES*/
var app_parameters={
		host_param: 'localhost',
		port_param: '8082',
		getServByUrl_apipath: 'service-manager/api/v1/services/searchByUrl?url=',
		getPDataCategoryTree_apipath: 'service-manager/api/v1/pdatafields/category/tree',
		findById_apipath: 'service-manager/api/v1/services/'
};
var selectionON = -1; //quando 0 permette di selezionare annotazioni nella pagina
var listenerON = false;
var tabListenerON = "";
var pos = "about:blank";


function selectionOnClick(){
	
	// ON/OFF EXTENSION SWITCH FEATURE: se l'estensione è spenta non permette di elaborare i termini selezionati
	chrome.storage.local.get(['pluginSwitch'], function(result) {
		
		if(result.pluginSwitch){

			var selected_word = "";
			var parCode = "";
			var nodeId = "";
			var idTag = "";
			var formCheck = false;
			
			
			chrome.tabs.executeScript( {
			    code: "window.getSelection().toString()"
				//file: "src/bg/backgroundSupport.js"
			}, function(selection) {
				selected_word = selection[0];
				
console.log("è stata selezionata la parola: "+selected_word);
				
				// FORM_CHECK_SECTION - le operazioni proseguono se l'elemento selezionato è figlio di un form,
				// posto a qualsiasi livello al di sopra di esso. Viceversa un ALERT informerà sull'errore di selezione.

				//SUPPOSIZIONE 1: Ogni elemento INPUT è provvisto di attributo NAME 
				//SUPPOSIZIONE 2: Il nome visualizzato è identico all'attributo NAME dell'elemento INPUT
				
				chrome.tabs.executeScript( {
				    code: "window.document.body.parentElement.innerHTML"
				}, function(domContent) {
					
console.log("FORMCHECK - Visited page: ");
console.log(domContent);
					
					var html = "<html>"+domContent.toString()+"</html>";
					var formEl = $(html).find(":contains('"+selected_word+"')" ).closest("form");
					
					if(formEl){
						console.log("il nodo selezionato è parte di un form");
					
					
console.log("FORMCHECK - Nodo FORM parente del nodo selezionato");
console.log(formEl);
console.log(formEl.attr("id"));

	
					chrome.tabs.executeScript( {
					    code: "window.getSelection().focusNode.parentNode.innerHTML"
					}, function(parentCode) {
						parCode = parentCode.toString();
						
	console.log("FORMCHECK - selected node text content: ");
	console.log(parCode);
						
						//Get ID of selected element [idNode/nodeId]
						chrome.tabs.executeScript( {
						    code: "window.getSelection().focusNode.parentNode.id"
						}, function(idNode) {
							nodeId = idNode.toString();
							
	console.log("FORMCHECK - selected node id: ");
	console.log(nodeId);
							
								
							//COMPOSIZIONE DATI per visualizzazione in DIALOG
							if(nodeId){
	
								/*var jconc = null;
							    //GET - getPDataCategoryTree_apipath
							    var url_ = "http://"+app_parameters.host_param+":"+app_parameters.port_param+
							    			"/"+app_parameters.getPDataCategoryTree_apipath;
							    $.ajax({
							        url: url_
							    }).then(function(data) {
							    	//List creation
							    	var servcontent = JSON.stringify(data);
							    	jconc = JSON.parse(servcontent);
							    	console.log("Concepts: ");
							    	console.log(jconc);*/
									
									var dialogPkg = {
											property: nodeId,
											//concepts: jconc	//non utile perchè la stessa funzione è sviluppata da SELECT2
									};
									
									/*Sending selected node id to CONTENT-SCRIPT for DIALOG*/
									chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
										  chrome.tabs.sendMessage(tabs[0].id, {greeting: dialogPkg}, function(response) {
										  });
									});
							}
							else{
								//E' stato selezionato un elemento che non possiede l'attributo id
								/*Sending error to CONTENT-SCRIPT*/
								chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
									  chrome.tabs.sendMessage(tabs[0].id, {greeting: "element_without_id"}, function(response) {
									  });
								});
							}
						
						
					});//idNode (selected node id)
				});//parentCode (selected node text content)
				}//if formEl
				else{
					//E' stato selezionato un elemento che non appartiene a un form
					/*Sending error to CONTENT-SCRIPT*/
					chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
						  chrome.tabs.sendMessage(tabs[0].id, {greeting: "not_form_element"}, function(response) {
						  });
					});
				}
			});//domContent (the entire html page dom)
		  });//selection_word 
		}//if pluginSwitch (extension enabled check)
		else{
			alert("Enable the extension before to select concepts");
		}
	});
}

/*CHECK ON REFRESH/LOAD_COMPLETE*/
chrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab) {

	  if(changeInfo.status == 'complete' && tab.active) {
		  	
console.log("E PUR SI MOVE");
			
			listenerON = true;
			tabListenerON = tabId;
		    
		    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {

		        // since only one tab should be active and in the current window at once
		        // the return variable should only have one entry
		        var activeTab = tabs[0];
		        var activeTabId = activeTab.id;
		        pos = activeTab.url;
			    
/*CHECK IF SERVICE IS REGISTERED*/
				var url_ = "http://"+app_parameters.host_param+":"+app_parameters.port_param+"/"+app_parameters.getServByUrl_apipath+pos;
				console.log("url request: ");
				console.log(url_);
				$.ajax({
				    url: url_
				}).then(function(data) {
					var servcontent = JSON.stringify(data);
					
console.log("risposta servizio ricerca per url:");
//console.log(servcontent);	//too verbose
					
					var jobj = JSON.parse(servcontent);
					var msg = "";
					//Servizio non registrato
					if(jobj.publicServiceID == null){

console.log("il servizio visitato non è registrato");

						msg = "alert_fail_serv";
						
						if(selectionON > -1){
							
console.log("rimozione menu contestuale perchè pagina non-servizio");

							//Disabilito selezione note
							chrome.contextMenus.remove("contMenu");
							selectionON = -1;
						}
					}
					//Servizio registrato
					else{
						
console.log("il servizio è registrato");

						msg = "alert_ok_serv";
						//Salvo id in sessione
						var idS = jobj.publicServiceID;
						chrome.storage.local.set({"idActiveService": idS}, function() {
							
console.log('Value is set to ' + idS);
					          
					        });
						
						//Abilito il menu contestuale
						selectionON = selectionON+1;
						
console.log("selectionON1 true");
console.log(selectionON);
						
						if(selectionON == 0){
							var contexts = ["selection"];
							for (var i = 0; i < contexts.length; i++) {
								var context = contexts[i];
								var title = "Save the '" + context + "' like a CDV concept";
								var id = chrome.contextMenus.create({"title": title, "id": "contMenu", "contexts":[context],"onclick": selectionOnClick});
								
console.log("'" + context + "' item:" + id);

							}
						}
					}
					
console.log("selectionON2 true");
console.log(selectionON);
					
					/*Sending to CONTENT-SCRIPT call to DIALOG*/
					chrome.tabs.query({active: true, currentWindow: true,  highlighted: true}, function(tabs) {
						  chrome.tabs.sendMessage(tabId, {greeting: msg}, function(response) {
						  });
					});
					if(chrome.runtime.lastError){
						console.log("error runtime")
						console.log(chrome.runtime.lastError);
					}

				});//AJAX
		    });
  }
  else{
	  
console.log("void cycle because of tab's loading incomplete");

  }
})

//ORIGINAL VERSION WITH COMPLETE CONTEXTS
/*//Create one test item for each context type.
var contexts = ["page","selection","editable","video","image","link"
             "audio"];
for (var i = 0; i < contexts.length; i++) {
	var context = contexts[i];
	var title = "Test '" + context + "' menu item";
	var id = chrome.contextMenus.create({"title": title, "contexts":[context],
	                                    "onclick": genericOnClick});
	console.log("'" + context + "' item:" + id);
}*/

/*if(selectionON){
	//Create one custom context menu item
	var contexts = ["selection"];
	
		for (var i = 0; i < contexts.length; i++) {
			var context = contexts[i];
			var title = "Save the '" + context + "' like a CDV concept";
			var id = chrome.contextMenus.create({"title": title, "contexts":[context],"onclick": selectionOnClick});
			
			console.log("'" + context + "' item:" + id);
		
	}
}*/

/*//Create a parent item and two children.
var parent = chrome.contextMenus.create({"title": "Test parent item"});
var child1 = chrome.contextMenus.create(
{"title": "Child 1", "parentId": parent, "onclick": genericOnClick});
var child2 = chrome.contextMenus.create(
{"title": "Child 2", "parentId": parent, "onclick": genericOnClick});
console.log("parent:" + parent + " child1:" + child1 + " child2:" + child2);


//Create some radio items.
function radioOnClick(info, tab) {
console.log("radio item " + info.menuItemId +
           " was clicked (previous checked state was "  +
           info.wasChecked + ")");
}

var radio1 = chrome.contextMenus.create({"title": "Radio 1", "type": "radio",
                                      "onclick":radioOnClick});
var radio2 = chrome.contextMenus.create({"title": "Radio 2", "type": "radio",
                                      "onclick":radioOnClick});
console.log("radio1:" + radio1 + " radio2:" + radio2);


//Create some checkbox items.
function checkboxOnClick(info, tab) {
console.log(JSON.stringify(info));
console.log("checkbox item " + info.menuItemId +
           " was clicked, state is now: " + info.checked +
           "(previous state was " + info.wasChecked + ")");

}

var checkbox1 = chrome.contextMenus.create(
{"title": "Checkbox1", "type": "checkbox", "onclick":checkboxOnClick});
var checkbox2 = chrome.contextMenus.create(
{"title": "Checkbox2", "type": "checkbox", "onclick":checkboxOnClick});
console.log("checkbox1:" + checkbox1 + " checkbox2:" + checkbox2);*/


/*//Intentionally create an invalid item, to show off error checking in the
//create callback.
console.log("About to try creating an invalid item - an error about " +
         "item 999 should show up");
chrome.contextMenus.create({"title": "Oops", "parentId":999}, function() {
if (chrome.extension.lastError) {
 console.log("Got expected error: " + chrome.extension.lastError.message);
}
});*/


