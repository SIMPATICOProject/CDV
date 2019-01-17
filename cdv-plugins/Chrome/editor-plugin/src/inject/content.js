/*Listen from EXTENSION (BACKGROUND.JS)*/
chrome.runtime.onMessage.addListener( function(request, sender, sendResponse) {
			  
console.log("content in ascolto per messaggi...");
			
		if(request.greeting.msg == "alert_ok_serv"){
			alert("Il servizio che stai visitando è registrato in CDV");
			console.log("Il servizio che stai visitando è registrato in CDV");
			
			//Highlighting campi registrati: durante lo scorrimento degli elementi per evidenziarli assegno a questi una classe specifica.
			//Questa classe è usata come identificatore per getElementByClass unico.
			
			//Gli elementi passati da bg.js
			var focus_ann = request.greeting.iList; 
			var el = null;
			
			for(i = 0; i < focus_ann.length; i++){

				el = document.getElementById(focus_ann[i]);
				el.style.border = "3px solid #209e91";
				el.classList.add("focusable-annotation-group-cdv-plugin");
				
/*				el.onclick = function(){
					console.log("clicked annotation:"+focus_ann[i]);
					var win = window.open("", "Title", "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width=450,height=350,top="+(200)+",left="+(400));
				};*/
			}
			var el = document.getElementsByClassName("focusable-annotation-group-cdv-plugin");
			console.log("valore di element: ");
			console.log(el);
			
			for(i = 0; i < focus_ann.length; i++){
				el[i].onclick = function(){
					console.log("clicked annotation:"+this.getAttribute("id"));
					var win = window.open("", "Title", "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width=450,height=350,top="+(200)+",left="+(400));
					//calling and setting DIALOG_SELECTION
					dataPkg = {
						jsonActiveService: request.greeting.jas,
						property: this.getAttribute("id")
					};
					dialog_selection(dataPkg);
				
				};
			}

		}
		else if(request.greeting == "alert_fail_serv"){
			console.log("Il servizio che stai visitando NON è registrato in CDV");	
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
		else if(request.greeting == "element_without_id"){
			alert("Attenzione, l'elemento selezionato non possiede l'attributo id. Impossibile procedere con le operazioni su questo elemento.");
		}

});


function dialog_selection(dataPkg){
	
	/*dataPkg = [
	 * jsonActiveService: il servizio corrente,
	 * property: l'id dell'input, coincidente con una notation CDV
	 * ]
	 * */
	
/*	//chiudo eventuale DIALOG già aperta
	var od = sessionStorage.getItem("openedDIALOG");
	if(od){
		console.log("OD: ");
		console.log(od);
		od.close();
	}*/
	
	var win = window.open("", "Title", "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width=450,height=350,top="+(200)+",left="+(400));
    win.document.head.innerHTML = "<head><meta charset=\"UTF-8\"><title>Selected Field</title>"
    	+" <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css\"/>"
    	+" <link data-require=\"select2@*\" data-semver=\"3.5.1\" rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/select2/3.5.2/select2.css\"/> "
    	+"<link data-require=\"select2@*\" data-semver=\"3.5.1\" rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/select2/3.5.2/select2-bootstrap.css\"/>"
    	+" <link rel=\"stylesheet\" href=\"http://localhost:8080/account-manager/style.css\"/>";
    
    
    win.document.body.innerHTML = "<script>var window.localJSON = "+sessionStorage.setItem("localSelJSON", JSON.stringify(dataPkg.jsonActiveService))+";</script><div class=\"container-fluid\"> <h1>Annotation</h1> <form> <div class=\"form-group\"> <label for=\"inputProperty\">Property</label>"
    	+"<input type=\"input\" class=\"form-control\" id=\"inputProperty\"placeholder=\"Enter field id\" value=\""+dataPkg.property+"\" disabled>"
    	+"</div><div class=\"form-group\"> <label for=\"inputConcept\">Concept</label> <input type=\"hidden\" class=\"form-control\" id=\"inputConcept\" placeholder=\"Select concept\">"
    	+"</div><div class=\"form-group\"> <label for=\"inputConcept\">Name</label> <input type=\"input\" class=\"form-control\" id=\"inputName\" placeholder=\"Name\"> </div>"
    	+"</form><button id=\"save-sel-bt\" class=\"btn btn-primary\">Save</button></div>"+
    	"<div id=\"selectConcHid\" hidden></div>"
    	"</body>"+
    	"</html>";
	    
console.log("Concepts:");
/*console.log(dataPkg.concepts);*/
	    
    //JS loading, Only read from CDN!!!!!
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
    
/*    //salvo la finestra in sessione
    sessionStorage.setItem("openedDIALOG", win);*/
}



