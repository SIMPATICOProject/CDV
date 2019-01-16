
/*GLOBAL VARIABLES*/
var app_parameters={
		host_param: 'localhost',
		port_param: '8082',
		getServByUrl_apipath: 'service-manager/api/v1/services/searchByUrl?url=',
		getPDataCategoryTree_apipath: 'service-manager/api/v1/pdatafields/category/tree',
		findById_apipath: 'service-manager/api/v1/services/',
		create_apipath: 'service-manager/api/v1/services/'
};
//var selectionON = -1; //quando 0 permette di selezionare annotazioni nella pagina
var listenerON = false;
var tabListenerON = "";
var pos = "about:blank";


/*function selectionOnClick(){
	
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
									
								chrome.storage.local.get(['activeService'], function(result) {
								
										var dialogPkg = {
												property: nodeId,
												jsonActiveService: result.activeService 
												//concepts: jconc	//non utile perchè la stessa funzione è sviluppata da SELECT2
										};
										
										Sending selected node id to CONTENT-SCRIPT for DIALOG
										chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
											  chrome.tabs.sendMessage(tabs[0].id, {greeting: dialogPkg}, function(response) {
											  });
										});
									
								});
							}
							else{
								//E' stato selezionato un elemento che non possiede l'attributo id
								Sending error to CONTENT-SCRIPT
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
					Sending error to CONTENT-SCRIPT
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
*/

/*CHECK ON REFRESH/LOAD_COMPLETE*/
chrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab) {

	  if(changeInfo.status == 'complete' && tab.active) {
		  	
console.log("E PUR SI MOVE");
			
			listenerON = true;
			tabListenerON = tabId;
		    
			//salvo tabId in sessione
			//chrome.storage.local.set({"idActiveTab": tabId}, function(){});
			
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
console.log(servcontent);	//too verbose
					
					var jobj = JSON.parse(servcontent);
console.log("test_2");
console.log(servcontent);
					
					var msg = "";
					
					//Servizio non registrato
					if(jobj.publicServiceID == null){
						
						chrome.storage.local.get(['pluginSwitch'], function(result) {
							
							console.log("dentro nuovo storage REGISTRAZIONE");
							
							if(result.pluginSwitch){

								console.log("il servizio visitato non è registrato");
		
								msg = "alert_fail_serv";
								
		/*						if(selectionON > -1){	
								console.log("rimozione menu contestuale perchè pagina non-servizio");
									//Disabilito selezione note
									chrome.contextMenus.remove("contMenu");
									selectionON = -1;
								}*/
								
								/*Sending to CONTENT-SCRIPT call to DIALOG*/
								chrome.tabs.query({active: true, currentWindow: true,  highlighted: true}, function(tabs) {
									  chrome.tabs.sendMessage(tabId, {greeting: msg}, function(response) {
									  });
								});
								if(chrome.runtime.lastError){
									console.log("error runtime")
									console.log(chrome.runtime.lastError);
								}
								
				            	//Anzichè metter su un processo ad hoc per i servizi non registrati sarebbe meglio realizzare le 
				            	//operazioni iniziali necessarie per poi far convergere il flusso di operazioni REGISTRAZIONE nel
				            	//flusso di operazioni già istanziato per MODIFICA. In questo senso basterebbe, una volta atterrati, 
				            	//chiedere all'utente se vuole registrare il portale visitato come servizio, registrarlo e rinfrescare
				            	//la pagina. Al refresh il plugin riconoscerà il servizio come registrato e si procederà normalmente
				            	//sul flusso MODIFICA.
								
/*								chrome.extension.onConnect.addListener(function(port) {
								    console.log("Connected .....");
								    port.postMessage("reg_hint_on");
								    port.onMessage.addListener(function(msg) {
								        console.log("message recieved " + msg);
								        port.postMessage("Hi Popup.js");
								    });
								});*/
									
									//preparo in sessione la struttura json servizio generico
									$.getJSON("../json/service-entry2.json", function(data) {
						            	console.log("DEFAULT JSON SERVICE: ");
						            	console.log(data);
						            	console.log(JSON.stringify(data));
						            	
						            	//inserisco serviceuri
						            	var effJson = data;//.properties;
						            	effJson.serviceUri = pos;
						            	effJson.publicServiceID  = "000";
						            	effJson.publicServiceName = "New_Service";
						            	
						            	console.log("EFFJSON: ");
						            	console.log(effJson);
						            	console.log(JSON.stringify(effJson));
						            	
/*						            	//registro il servizio presso CDV
						    			//POST - create_apipath
						    			var url_ = "http://"+app_parameters.host_param+":"+app_parameters.port_param+"/"+app_parameters.create_apipath;
						    			$.ajax({
						    				url: url_,
						    				method: 'POST',
						    				contentType: "application/json",
						    				data: JSON.stringify(effJson),
						    			}).done(function(data) {
						    				console.log("Nuovo servizio registrato correttamente");
						    			
						    			}).fail(function() {
						    			  alert( "Errors occurred in service registration. Please be careful and try again..." );
						    			})*/
						            	
						            	var aj = JSON.stringify(effJson);
						            	console.log("prima: ");
						            	console.log(aj);
										chrome.storage.local.set({"defJsonService": aj}, function() {
											console.log("default json service stored");
											console.log(effJson);
											console.log(aj);
										});
										
										})
										
							}//if pluginswitch
						});//storage pluginswitch
							
					}
					
					//Servizio registrato //100119 - insieme al msg bisogna passare la lista FOCUSABLE_ANN
					else{
						
console.log("il servizio è registrato");


						// ON/OFF EXTENSION SWITCH FEATURE: se l'estensione è spenta non permette di elaborare i termini selezionati
						chrome.storage.local.get(['pluginSwitch'], function(result) {
							console.log("dentro nuovo storage");
							if(result.pluginSwitch){
console.log("dentro if pluginswitch");

						
								
								msg = "alert_ok_serv";
								//Salvo id in sessione
								var idS = jobj.publicServiceID;
								chrome.storage.local.set({"idActiveService": idS}, function() {
									
		console.log("idservice: " + idS);
							          
							        });
								
								//Salvo intero servizio in sessione
								chrome.storage.local.set({"activeService": servcontent}, function(){});
								
		/*						//Abilito il menu contestuale
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
								}*/
							
		/*					
		console.log("selectionON2 true");
		console.log(selectionON);*/
							
							//calcolo lista dei nodi input del servizio corrente aventi riscontro in pdatafields su server
							chrome.tabs.executeScript( {
							    code: "window.document.body.parentElement.innerHTML"
							}, function(domContent) {
								
								var inputsList = [];
								
								console.log("CONTENUTO PAGINA CORRENTE: ");
								console.log(domContent);
								
								var html = "<html>"+domContent.toString()+"</html>";
								var domEl = $(html).find("input,select");
								
								console.log("domel: ");
								console.log(domEl);
								console.log("array version");
								console.log(inputsList);
								
								for(i = 0; i < domEl.length; i++){
									ap = domEl[i];
									a = $(ap).attr("id");
									inputsList.push(a);
								}
								console.log("lista di input nodes: ");
								console.log(inputsList);
			
								dpkg = {
									jas: servcontent,
									msg: msg,
									iList: inputsList
								};
								/*Sending to CONTENT-SCRIPT call to DIALOG*/
								chrome.tabs.query({active: true, currentWindow: true,  highlighted: true}, function(tabs) {
									  chrome.tabs.sendMessage(tabId, {greeting: dpkg}, function(response) {
									  });
								});
								if(chrome.runtime.lastError){
									console.log("error runtime")
									console.log(chrome.runtime.lastError);
								}
							});//executeSript:domcontent
							
					
							}//if pluginswitch
						});//storage pluginswitch
					
					}//else
				});//AJAX
		    });
  }
  else{
	  
console.log("void cycle because of tab's loading incomplete");

  }
})

