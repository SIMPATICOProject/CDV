
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
			else if(request.greeting == "not_form_element"){
				alert("Attenzione, l'elemento selezionato non appartiene ad un form");
			}
		    else{
		    	var dataPkg = request.greeting;

			    /*var win = window.open("", "Title", "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width=450,height=350,top="+(200)+",left="+(400));
			    win.document.head.innerHTML = "<head><meta charset=\"UTF-8\"><title>Selected Field</title>"
			    	+"<link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\" integrity=\"sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u\" crossorigin=\"anonymous\">";
			    win.document.body.innerHTML = "<style>body{padding:20px !important;}</style><script type=\"text/javascript\">console.log(\"ciao\")</script><body style\"padding: 20px;\">"+
			    	"<div class=\"row\"> <div class=\"col-md-12 col-sm-12 col-xs-12\"> <div class=\"x_panel\" style=\"padding-bottom: 0! important\"><div class=\"x_content\"><form id=\"demo-form2\" data-parsley-validate class=\"form-horizontal form-label-left\"> <div class=\"form-group\"> <label class=\"control-label col-md-3 col-sm-3 col-xs-12\" for=\"property-field\">Property <span class=\"required\">*</span> </label> <div class=\"col-md-6 col-sm-6 col-xs-12\"> <input type=\"text\" id=\"property-field\" required=\"required\" value=\""+
			    	dataPkg.property+"\" class=\"form-control col-md-7 col-xs-12\"> </div></div><div class=\"form-group\"> <label class=\"control-label col-md-3 col-sm-3 col-xs-12\" for=\"concept\">Concept <span class=\"required\">*</span> </label> <div class=\"col-md-6 col-sm-6 col-xs-12\"> <input type=\"text\" id=\"concept\" name=\"concept\" required=\"required\" class=\"form-control col-md-7 col-xs-12\"> </div></div><div class=\"form-group\"> <label for=\"property-name\" class=\"control-label col-md-3 col-sm-3 col-xs-12\">Name</label> <div class=\"col-md-6 col-sm-6 col-xs-12\"> <input id=\"property-name\" class=\"form-control col-md-7 col-xs-12\" type=\"text\" name=\"property-name\"> </div></div><!-- <div class=\"form-group\"> <label class=\"control-label col-md-3 col-sm-3 col-xs-12\">Toggle Button</label> <div class=\"col-md-6 col-sm-6 col-xs-12\"> <div id=\"gender\" class=\"btn-group\" data-toggle=\"buttons\"> <label class=\"btn btn-default\" data-toggle-class=\"btn-primary\" data-toggle-passive-class=\"btn-default\"> <input type=\"radio\" name=\"gender\" value=\"male\"> &nbsp; A &nbsp; </label> <label class=\"btn btn-primary\" data-toggle-class=\"btn-primary\" data-toggle-passive-class=\"btn-default\"> <input type=\"radio\" name=\"gender\" value=\"female\"> B </label> </div></div></div>--><!-- <div class=\"form-group\"> <label class=\"control-label col-md-3 col-sm-3 col-xs-12\">Date Of Birth <span class=\"required\">*</span> </label> <div class=\"col-md-6 col-sm-6 col-xs-12\"> <input id=\"birthday\" class=\"date-picker form-control col-md-7 col-xs-12\" required=\"required\" type=\"text\"> </div></div>--> <div class=\"ln_solid\"></div><div class=\"form-group\"> <div class=\"col-md-6 col-sm-6 col-xs-12 col-md-offset-3\" style=\"padding-top: 10px;\"> <button class=\"btn btn-warning\" type=\"reset\">Reset</button> <button type=\"submit\" onclick=\"clickFun()\" class=\"btn btn-success\">Submit</button> </div></div></form> </div></div></div></div>"+
			    	"</body></html>";*/
		    	
		    	var win = window.open("", "Title", "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width=450,height=350,top="+(200)+",left="+(400));
			    win.document.head.innerHTML = "<head><meta charset=\"UTF-8\"><title>Selected Field</title>"
			    	+" <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css\"/> <link data-require=\"select2@*\" data-semver=\"3.5.1\" rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/select2/3.5.2/select2.css\"/> <link data-require=\"select2@*\" data-semver=\"3.5.1\" rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/select2/3.5.2/select2-bootstrap.css\"/> <link rel=\"stylesheet\" href=\"http://localhost:8080/account-manager/style.css\"/>";
			    //+"<script src=\"https://code.jquery.com/jquery-2.1.3.min.js\"></script> <script src=\"https://cdnjs.cloudflare.com/ajax/libs/select2/3.5.2/select2.js\"></script>";
			    
			    win.document.body.innerHTML = "<div class=\"container-fluid\"> <h1>Annotation</h1> <form> <div class=\"form-group\"> <label for=\"inputProperty\">Property</label>"
			    	+"<input type=\"input\" class=\"form-control\" id=\"inputProperty\"placeholder=\"Enter field id\" value=\""+dataPkg.property+"\"> </div><div class=\"form-group\"> <label for=\"inputConcept\">Concept</label> <input type=\"hidden\" class=\"form-control\" id=\"inputConcept\" placeholder=\"Select concept\"> </div><div class=\"form-group\"> <label for=\"inputConcept\">Name</label> <input type=\"input\" class=\"form-control\" id=\"inputName\" placeholder=\"Name\"> </div><button type=\"submit\" class=\"btn btn-primary\">Save</button></form></div>"+
			    	"</body>"+
			    	"</html>";
			    
			    console.log("Concepts:");
			    console.log(dataPkg.concepts);
			    
			    //JS loading //Only read from CDN
			    var script = document.createElement('script');
			    script.src = 'https://code.jquery.com/jquery-2.1.3.min.js';
			    script.async = false;
			    //script.text = 'console.log("ciao")';
		    	//script.setAttribute("type","text/javascript");
			    win.document.head.appendChild(script);
			    
			    var script2 = document.createElement('script');
			    script2.src = 'https://cdnjs.cloudflare.com/ajax/libs/select2/3.5.2/select2.js';
			    script2.async = false;
			    win.document.head.appendChild(script2);
			    
			    var script3 = document.createElement('script');
			    script3.src = 'http://localhost:8080/account-manager/script.js';
			    script3.async = false;
			    win.document.body.appendChild(script3);
		    }
});


