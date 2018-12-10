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
function genericOnClick(info, tab) {
	console.log("item " + info.menuItemId + " was clicked");
	console.log("info: " + JSON.stringify(info));
	console.log("tab: " + JSON.stringify(tab));
}

function selectionOnClick(){
	
	chrome.tabs.executeScript( {
	    code: "window.getSelection().toString();"
	}, function(selection) {
		var selected_word = selection[0];
	    //document.getElementById("output").innerHTML = selected_word;
		console.log("è stata selezionata la parola: "+selected_word);
		
		/*Sending to CONTENT-SCRIPT*/
		chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
			  chrome.tabs.sendMessage(tabs[0].id, {greeting: selected_word}, function(response) {
			    //
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


//Create one test item for SELECTION context only
var contexts = ["selection"];

	for (var i = 0; i < contexts.length; i++) {
		var context = contexts[i];
		var title = "Save the '" + context + "' like a CDV concept";
		var id = chrome.contextMenus.create({"title": title, "contexts":[context],"onclick": selectionOnClick});
		
		console.log("'" + context + "' item:" + id);
	
}



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

	

	
	