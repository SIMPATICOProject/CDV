
/*TEXT REPLACER*/
/*var elements = document.getElementsByTagName('*');

for (var i = 0; i < elements.length; i++) {
    var element = elements[i];

    for (var j = 0; j < element.childNodes.length; j++) {
    	
        var node = element.childNodes[j];

        if (node.nodeType === 3) {
            var text = node.nodeValue;

            var replacedText = text.replace("NASA","ESA");

            if (replacedText !== text) {
                element.replaceChild(document.createTextNode(replacedText), node);
            }
        }
    }
}*/

/*Listen from EXTENSION (BACKGROUND.JS)*/
chrome.runtime.onMessage.addListener(
		  function(request, sender, sendResponse) {
		    //console.log(sender.tab ? "from a content script:"+ sender.tab.url :"from the extension");
		    //console.log("through background.js, CDV Service Annotator says: "+ request.greeting);
			console.log("content in ascolto per messaggi...");
			
			if(request.greeting == "alert_ok_serv"){
				alert("Il servizio che stai visitando è registrato in CDV");
			}
			else if(request.greeting == "alert_fail_serv"){
				alert("Il servizio che stai visitando NON è registrato in CDV");
			}
			else if (request.greeting == "dispatch_page"){
		    	console.log("pervenuta richiesta da background.js");
		    	var pos = window.location.href;
		    	
		    	chrome.runtime.sendMessage({farewell: pos}, function(response) {
		    		  console.log("mex inviato");
		    		});
		    }
		    else{
			    var win = window.open("", "Title", "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width=450,height=350,top="+(200)+",left="+(400));
			    win.document.head.innerHTML = "<head><meta charset=\"UTF-8\"><title>Selected Field</title>"
			    	+"<link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\" integrity=\"sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u\" crossorigin=\"anonymous\">";
			    win.document.body.innerHTML = "<style>body{padding:20px !important;}</style><script type=\"text/javascript\">console.log(\"ciao\")</script><body style\"padding: 20px;\">"+
			    	"<div class=\"row\"> <div class=\"col-md-12 col-sm-12 col-xs-12\"> <div class=\"x_panel\" style=\"padding-bottom: 0! important\"><div class=\"x_content\"><form id=\"demo-form2\" data-parsley-validate class=\"form-horizontal form-label-left\"> <div class=\"form-group\"> <label class=\"control-label col-md-3 col-sm-3 col-xs-12\" for=\"property-field\">Property <span class=\"required\">*</span> </label> <div class=\"col-md-6 col-sm-6 col-xs-12\"> <input type=\"text\" id=\"property-field\" required=\"required\" value=\""+
			    	request.greeting+"\" class=\"form-control col-md-7 col-xs-12\"> </div></div><div class=\"form-group\"> <label class=\"control-label col-md-3 col-sm-3 col-xs-12\" for=\"concept\">Concept <span class=\"required\">*</span> </label> <div class=\"col-md-6 col-sm-6 col-xs-12\"> <input type=\"text\" id=\"concept\" name=\"concept\" required=\"required\" class=\"form-control col-md-7 col-xs-12\"> </div></div><div class=\"form-group\"> <label for=\"property-name\" class=\"control-label col-md-3 col-sm-3 col-xs-12\">Name</label> <div class=\"col-md-6 col-sm-6 col-xs-12\"> <input id=\"property-name\" class=\"form-control col-md-7 col-xs-12\" type=\"text\" name=\"property-name\"> </div></div><!-- <div class=\"form-group\"> <label class=\"control-label col-md-3 col-sm-3 col-xs-12\">Toggle Button</label> <div class=\"col-md-6 col-sm-6 col-xs-12\"> <div id=\"gender\" class=\"btn-group\" data-toggle=\"buttons\"> <label class=\"btn btn-default\" data-toggle-class=\"btn-primary\" data-toggle-passive-class=\"btn-default\"> <input type=\"radio\" name=\"gender\" value=\"male\"> &nbsp; A &nbsp; </label> <label class=\"btn btn-primary\" data-toggle-class=\"btn-primary\" data-toggle-passive-class=\"btn-default\"> <input type=\"radio\" name=\"gender\" value=\"female\"> B </label> </div></div></div>--><!-- <div class=\"form-group\"> <label class=\"control-label col-md-3 col-sm-3 col-xs-12\">Date Of Birth <span class=\"required\">*</span> </label> <div class=\"col-md-6 col-sm-6 col-xs-12\"> <input id=\"birthday\" class=\"date-picker form-control col-md-7 col-xs-12\" required=\"required\" type=\"text\"> </div></div>--> <div class=\"ln_solid\"></div><div class=\"form-group\"> <div class=\"col-md-6 col-sm-6 col-xs-12 col-md-offset-3\" style=\"padding-top: 10px;\"> <button class=\"btn btn-warning\" type=\"reset\">Reset</button> <button type=\"submit\" onclick=\"clickFun()\" class=\"btn btn-success\">Submit</button> </div></div></form> </div></div></div></div>"+
			    	"</body></html>";
			    
			    var script = document.createElement('script');
			    //script.setAttribute("type","text/javascript");
			    //Can read only from CDN
			    script.src = 'http://localhost:8080/account-manager/test.js';
			    //script.text = 'console.log("ciao")';
			    console.log("script: ");
			    console.log(script);
			    win.document.head.appendChild(script);
		    }
});


