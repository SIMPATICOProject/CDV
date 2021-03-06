//To access options
/*options.setLocalStore(key, value)
options.resetLocalStore(key)

options.getLocalStore(key)
options.getLocalStore(key, fallback)
options.getLocalStore(key, fallback, fn)*/


//Copyright (c) 2010 The Chromium Authors. All rights reserved.
//Use of this source code is governed by a BSD-style license that can be
//found in the LICENSE file.

//A generic onclick callback function.
/*function genericOnClick(info, tab) {
	console.log("item " + info.menuItemId + " was clicked");
	console.log("info: " + JSON.stringify(info));
	console.log("tab: " + JSON.stringify(tab));
}*/

var selectionON = -1; //quando 0 permette di selezionare annotazioni nella pagina

var listenerON = false;
var tabListenerON = "";

function selectionOnClick(){
	
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
		
		//GEMOD: in questo punto le operazioni proseguono soltanto se l'elemento selezionato è parte di un form
		//viceversa comparirà un ALERT che informerà sull'errore di selezione (se non è possibile ottenere 
		//tali info qui, ottenerle mediante content.js)
		chrome.tabs.executeScript( {
		    code: "window.getSelection().focusNode.parentNode.innerHTML"
		}, function(parentCode) {
			parCode = parentCode;
			
			chrome.tabs.executeScript( {
			    code: "window.getSelection().focusNode.parentNode.id"
			}, function(idNode) {
				nodeId = idNode.toString();
				
				console.log("node id: ");
				console.log(nodeId);
				
				//VERIFICA CONDIZIONI
				chrome.tabs.executeScript( {
				    //code: "$(\"#\"+nodeId).is(\"form\")"
					code: "document.getElementById(\""+nodeId+"\").nodeName"
				}, function(fCheck) {
					
					if(fCheck.toString() == "form" || fCheck.toString() == "FORM")
						formCheck = true;
					
				console.log("il padre è un form?: ");
				console.log(formCheck);
				
				if(formCheck){  //se il nodo padre è un form
					//cerco l'id dello specifico elemento
					//SUPPONGO QUI CHE IL NOME VISUALIZZATO SIA IDENTICO ALL'ATTRIBUTO "NAME" DEL TAG INPUT 
					//SUPPONGO INOLTRE CHE OGNI INPUT TAG SIA PROVVISTO DI NAME
//					idTag = $(parCode).find("input[name='"+selected_word+"']").attr("id");
					idTag = $(parCode).find("name=\""+selected_word+"\"").length;
					//idTag = parCode.querySelectorAll("input[name='"+selected_word+"']").getAttribute("id");
					
					console.log("idTag: ");
					console.log(idTag[0]);
				}
				else{
					//è stato selezionato un elemento che non appartiene a un form
					//comunicare il problema al CONTENT.JS
					//comunicare l'errore all'utente mediante alert
					console.log("ACCESSO ELSE FALLIMENTO");
				}

				
				/*Sending to CONTENT-SCRIPT*/
				chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
					  chrome.tabs.sendMessage(tabs[0].id, {greeting: selected_word}, function(response) {
					    //
					  });
				});
				
				console.log("NUOVI DATI: ");
				console.log(parCode);
				console.log(nodeId);
				console.log(idTag);
				
				});
			});
		});
		

		

	});
}

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


//GEMOD: La creazione del menu contestuale deve avvenire SOLAMENTE se ci si trova in una pagina di un 
//servizio già registrato

var procedi = 0;
var pos = "about:blank";

function checkReg(request, sender, sendResponse) {
	  
	pos = request.farewell;
	
	/*CHECK IF SERVICE IS REGISTERED*/
	var app_parameters={
			host_param: 'localhost',
			port_param: '8082',
			getServByUrl_apipath: 'service-manager/api/v1/services/searchByUrl?url='
	};
	var url_ = "http://"+app_parameters.host_param+":"+app_parameters.port_param+"/"+app_parameters.getServByUrl_apipath+pos;
	
	$.ajax({
	    url: url_
	}).then(function(data) {
		var servcontent = JSON.stringify(data);
		
		console.log("risposta servizio ricerca per url:");
		console.log(servcontent);
		
		var jobj = JSON.parse(servcontent);
		var msg = "";
		
		if(jobj.publicServiceID == null){
			//content alert NO REGISTERED SERVICE
			console.log("il servizio visitato non è registrato");
			msg = "alert_fail_serv";
		}
		else{
			//content alert SERVICE REGISTERED
			console.log("il servizio è registrato");
			msg = "alert_ok_serv";
		}
		
		var idTab = chrome.tabs.getSelected(null, function(tab) {return tab.id;});
		console.log("tab corrente: ");
		console.log(idTab);
		
		/*Sending to CONTENT-SCRIPT*/
		chrome.tabs.query({active: true, currentWindow: true,  highlighted: true}, function(tabs) {
			  chrome.tabs.sendMessage(idTab, {greeting: msg}, function(response) {
			  });
		});
		if(chrome.runtime.lastError){
			console.log("error runtime")
			console.log(chrome.runtime.lastError);
		}

	});//ajax
}
/*CHECK ON REFRESH/LOAD_COMPLETE*/
chrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab) {

	  if(changeInfo.status == 'complete' && tab.active) {
		  	
		    console.log("EPPUR SI MOVE");
		    
			//if(!listenerON || (tabListenerON != "" && tabListenerON != tabId)){
				
				listenerON = true;
				tabListenerON = tabId;
			    
			    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {

			        // since only one tab should be active and in the current window at once
			        // the return variable should only have one entry
			        var activeTab = tabs[0];
			        var activeTabId = activeTab.id; // or do whatever you need
			        pos = activeTab.url;
				    
					/*CHECK IF SERVICE IS REGISTERED*/
					var app_parameters={
							host_param: 'localhost',
							port_param: '8082',
							getServByUrl_apipath: 'service-manager/api/v1/services/searchByUrl?url='
					};
					var url_ = "http://"+app_parameters.host_param+":"+app_parameters.port_param+"/"+app_parameters.getServByUrl_apipath+pos;
					console.log("url request: ");
					console.log(url_);
					$.ajax({
					    url: url_
					}).then(function(data) {
						var servcontent = JSON.stringify(data);
						
						console.log("risposta servizio ricerca per url:");
						console.log(servcontent);
						
						var jobj = JSON.parse(servcontent);
						var msg = "";
						
						if(jobj.publicServiceID == null){
							//content alert NO REGISTERED SERVICE
							console.log("il servizio visitato non è registrato");
							msg = "alert_fail_serv";
							
							//disabilito selezione note
							if(selectionON > -1){
								console.log("DISABILITAZIONE MENU BECCATAAAAAAAAAAAAAAAAAAAAA");
								chrome.contextMenus.remove("contMenu");
								selectionON = -1;
							}
						}
						else{
							//content alert SERVICE REGISTERED
							console.log("il servizio è registrato");
							msg = "alert_ok_serv";
							
							//permetto la selezione delle note
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
						/*Sending to CONTENT-SCRIPT*/
						chrome.tabs.query({active: true, currentWindow: true,  highlighted: true}, function(tabs) {
							  chrome.tabs.sendMessage(tabId, {greeting: msg}, function(response) {
							  });
						});
						if(chrome.runtime.lastError){
							console.log("error runtime")
							console.log(chrome.runtime.lastError);
						}
	
					});//ajax
					console.log("selectionON3 true");
					console.log(selectionON);
			    });
		//}//if
  }//IF
  else{
	  console.log("EPPUR STA FERMO");
  }
})
//DOMEG

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

	

	
	
