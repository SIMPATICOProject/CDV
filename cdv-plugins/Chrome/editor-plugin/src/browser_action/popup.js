//To access option
/*var backgroundPage = chrome.extension.getBackgroundPage();

backgroundPage.options.setLocalStore(key, value)
backgroundPage.options.resetLocalStore(key)

backgroundPage.options.getLocalStore(key)
backgroundPage.options.getLocalStore(key, fallback)
backgroundPage.options.getLocalStore(key, fallback, fn)*/

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
	  //chrome.contextMenus.create({"title": "Save the selection like a CDV concept", "id": "contMenu", "contexts":"selection"});
	}
	//DISATTIVA PLUGIN
	else{
	  $('.optionalRow').hide();
	  chrome.storage.local.set({"pluginSwitch": false}, function() {});
	  //chrome.contextMenus.remove("contMenu");
	}
}


	
	
	