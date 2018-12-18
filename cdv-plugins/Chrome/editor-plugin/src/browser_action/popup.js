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
		if(result.pluginSwitch){
			$('.optionalRow').show();
			switchON.checked = true;
			switchOFF.checked = false;
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
	if(switchON.checked){
	  $('.optionalRow').show();
	  chrome.storage.local.set({"pluginSwitch": true}, function() {});
	}
	else{
	  $('.optionalRow').hide();
	  chrome.storage.local.set({"pluginSwitch": false}, function() {});
	}
}


	
	
	