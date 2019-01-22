
/*Reset the service info to the stored ones - ANNOTATOR_UP*/
function resetInfo(){
	chrome.storage.local.get(['jsonActiveService'], function(result) {
		
console.log("Valore JSON chrome storage: ");
console.log(result.jsonActiveService);
		
		try{
			var id = result.jsonActiveService.publicServiceID;
			$("#service-id").val(id);
		}catch(err){
			console.log("Service missing publicServiceID, Error: "+err.message);
		}
		try{
			var name = result.jsonActiveService.publicServiceName;
			$("#service-name").val(name);
		}catch(err){
			console.log("Service missing publicServiceName, Error: "+err.message);
		}
		try{
			var descr = result.jsonActiveService.humanReadableDescription[0].description;
			$("#service-descr").val(descr);
		}catch(err){
			console.log("Service missing description, Error: "+err.message);
		}
		});
}

/*Update the service - ANNOTATOR_UP*/
function submitInfo(){
	var r = confirm("Sei sicuro di voler modificare il servizio?");
	if(r == true){
		
		chrome.storage.local.get(['idActiveService'], function(result) {
			
			var actualID = $("#service-id").val();
			var servname = $("#service-name").val();
			
			console.log("NEW VALUES");
			console.log(actualID);
			console.log(servname);
			
			if(actualID == "000"){
				alert("L'ID possiede ancora il valore di default, inserisci il suo valore effettivo per favore");
				return false;
			}else if(servname == "New_Service"){
				alert("Il NAME possiede ancora il valore di default, inserisci il suo valore effettivo per favore"); 
				return false;
			}
			else if(result.idActiveService == "000"){
				
				console.log("registration...");
				
				chrome.storage.local.set({"idActiveService": actualID}, function() {});
				
				chrome.storage.local.get(['jsonActiveService'], function(result) {

					if(result.jsonActiveService){
						
						var appJS = JSON.parse(result.jsonActiveService);
						try{
							appJS.publicServiceID = actualID;
							console.log("actualids: ");
							console.log(actualID);
							
						}catch(err){
							console.log("Service missing publicServiceID, Error: "+err.message);
						}
						try{
							appJS.publicServiceName = servname;

						}catch(err){
							console.log("Service missing publicServiceName, Error: "+err.message);
						}
						try{
							appJS.humanReadableDescription[0].description = $("#service-descr").val();

						}catch(err){
							console.log("Service missing description, Error: "+err.message);
						}
						
						console.log("new service post updated: ");
						console.log(appJS);
						
						//POST - create_apipath
						var url_ = "http://"+app_parameters.host_param+":"+app_parameters.port_param+"/"+app_parameters.create_apipath;
						$.ajax({
							url: url_,
							method: 'POST',
							contentType: "application/json",
							data: JSON.stringify(appJS)
						}).then(function(data) {
							console.log("Nuovo servizio registrato correttamente");
							alert("Registrazione avvenuta con successo. Ritorna in questa pagina dopo che avrai annotato il servizio");
							
						}).fail(function() {
						  alert( "Errors occurred in service registration. Try again later" );
						})
						
						//UPDATING SERVICE STORED IN SESSION
						chrome.storage.local.set({"jsonActiveService": appJS}, function() {});
					}
					else{
						alert("Descrizione json del servizio non disponibile, impossibile salvare il servizio");
					}
				});
			}
			//UPDATING
			else{
				console.log("updating...");
				
				//UPDATING SERVICE_ID STORED IN SESSION (because of id)
				chrome.storage.local.set({"idActiveService": actualID}, function() {});
				
				chrome.storage.local.get(['jsonActiveService'], function(result) {
		
					if(result.jsonActiveService){
						try{
							result.jsonActiveService.publicServiceID = $("#service-id").val();
							
						}catch(err){
							console.log("Service missing publicServiceID, Error: "+err.message);
						}
						try{
							result.jsonActiveService.publicServiceName = $("#service-name").val();
		
						}catch(err){
							console.log("Service missing publicServiceName, Error: "+err.message);
						}
						try{
							result.jsonActiveService.humanReadableDescription[0].description = $("#service-descr").val();
							
						}catch(err){
							console.log("Service missing description, Error: "+err.message);
						}
						
						
						//PUT - update_apipath
						var url_ = "http://"+app_parameters.host_param+":"+app_parameters.port_param+"/"+app_parameters.update_apipath+serviceID;
						$.ajax({
							url: url_,
							method: 'PUT',
							contentType: "application/json",
							data: JSON.stringify(result.jsonActiveService),
						}).done(function(data) {
							alert("Servizio modificato con successo");
						}).fail(function() {
						  alert( "Errors occurred in service update. Please be careful and try again..." );
						})
						
						//UPDATING SERVICE STORED IN SESSION
						chrome.storage.local.set({"jsonActiveService": result.jsonActiveService}, function() {}); //dovrebbe andare in done
						
					}
					else{
						alert("Descrizione json del servizio non disponibile, impossibile salvare il servizio");
					}
				});
			}//UPDATING
			console.log("TESSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSTTTTTTTTTTTTTTTTTTTT");
		});//storage.local.idactiveservice
	}
	else{
		//sottomissione annullata
		return false;
	}
}

/*Delete a concept from the service - ANNOTATOR_DOWN*/
function deleteConcept(i){
	
	var r = confirm("Se sicuro di voler eliminare l'annotazione dal servizio?");
	if(r == true){
		chrome.storage.local.get(['jsonActiveService'], function(result) {

			if(result.jsonActiveService){
				var njson = result.jsonActiveService.publicServiceIsDescribedAt[0].dataMapping.splice(i,1);
				
console.log("JSON POST MODIFICA SPLICE: ");
console.log(njson);
console.log(JSON.stringify(njson));
console.log(JSON.stringify(result.jsonActiveService));
				
				//PUT - update_apipath
				var url_ = "http://"+app_parameters.host_param+":"+app_parameters.port_param+"/"+app_parameters.update_apipath+serviceID;
				$.ajax({
					url: url_,
					method: 'PUT',
					contentType: "application/json",
					data: JSON.stringify(result.jsonActiveService),
				}).done(function(data) {
					location.reload();
				}).fail(function() {
				  alert( "Errors occurred in service update. Please be careful and try again..." );
				})
			}
			else{
				alert("Descrizione json del servizio non disponibile, impossibile eliminare il concetto");
			}
		});
	}
}

/*Single concept update (using DIALOG) - ANNOTATOR_DOWN*/
function editConcept(i){
	
console.log("VALORE PARAMETRO: "+i);
	
	//La DIALOG si apre con:
	//PROPERTY - data.publicServiceIsDescribedAt[0].dataMapping[i].conceptId
	//CONCEPT - già selezionato in menu a tendina
	//NAME - già iscritto con valore selezionato in CONCEPT
	var conceptAnn = null;
	
	chrome.storage.local.get(['jsonActiveService'], function(result) {
		
/*console.log("Valore JSON chrome storage EDIT: ");
console.log(result.jsonActiveService);
console.log(result.jsonActiveService.publicServiceIsDescribedAt[0]);
console.log(result.jsonActiveService.publicServiceIsDescribedAt[0].dataMapping[i]);
console.log(i);*/
		
		var conceptAnn = result.jsonActiveService.publicServiceIsDescribedAt[0].dataMapping[i].conceptId;
		var propertyAnn = result.jsonActiveService.publicServiceIsDescribedAt[0].dataMapping[i].property;
		var nameAnn = result.jsonActiveService.publicServiceIsDescribedAt[0].dataMapping[i].name;
		var serviceId = $("#service-id").val();
	    
		//chiudo eventuale DIALOG già aperta
		//
		
	    var win = window.open("", "Title", "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width=450,height=350,top="+(200)+",left="+(400));
	    
	    win.document.head.innerHTML = "<head><title>Selected Field</title>"
	    	+" <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css\"/> <link data-require=\"select2@*\" data-semver=\"3.5.1\" rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/select2/3.5.2/select2.css\"/> <link data-require=\"select2@*\" data-semver=\"3.5.1\" rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/select2/3.5.2/select2-bootstrap.css\"/> <link rel=\"stylesheet\" href=\"http://localhost:8080/account-manager/style.css\"/>";
	    
	    win.document.body.innerHTML = "<script>var window.localJSON = "+sessionStorage.setItem("localJSON", JSON.stringify(result.jsonActiveService))+";</script><div class=\"container-fluid\"> <h1>Annotation</h1> <form> <div class=\"form-group\"> <label for=\"inputProperty\">Property</label>"
	    	+"<input type=\"input\" class=\"form-control\" id=\"inputProperty\"placeholder=\"Enter field id\" value=\""+propertyAnn+"\" disabled> </div><div class=\"form-group\"><label for=\"inputConcept\">Concept</label>"
	    	+"<input type=\"hidden\" class=\"form-control\" id=\"inputConcept\" placeholder=\"Select concept\"> </div><div class=\"form-group\"> <label for=\"inputConcept\">Name</label>"
	    	+"<input type=\"input\" class=\"form-control\" id=\"inputName\" placeholder=\"Name\" value=\""+nameAnn+"\"></div></form><button id=\"save-bt\" class=\"btn btn-primary\">Save</button></div>"+
	    	"<div id=\"hidNumCon\" hidden>"+i+"</div><div id=\"hidNumServ\" hidden>"+serviceId+"</div>"
	    	+"</body>"+
	    	"</html>";
	    
	    //JS loading //Only read from CDN
	    var script = document.createElement('script');
	    script.src = 'https://code.jquery.com/jquery-2.1.3.min.js';
	    script.async = false;
	    win.document.head.appendChild(script);
	    
	    var script2 = document.createElement('script');
	    script2.src = 'https://cdnjs.cloudflare.com/ajax/libs/select2/3.5.2/select2.js';
	    script2.async = false;
	    win.document.head.appendChild(script2);
	    
	    var script3 = document.createElement('script');
	    script3.src = 'http://localhost:8080/account-manager/script.js';
	    script3.async = false;
	    win.document.body.appendChild(script3);
    
	});
}

/*Single concept update (using DIALOG) - ANNOTATOR_DOWN*/
function editConcept_1(result){
	
	var i = result.property;
	
console.log("VALORE PARAMETRO: "+i);
	
	//La DIALOG si apre con:
	//PROPERTY - data.publicServiceIsDescribedAt[0].dataMapping[i].conceptId
	//CONCEPT - già selezionato in menu a tendina
	//NAME - già iscritto con valore selezionato in CONCEPT
	var conceptAnn = null;
	
		
console.log("Valore JSON chrome storage EDITCONCEPT_1 ");
console.log(result.jsonActiveService);
console.log(result.jsonActiveService.publicServiceIsDescribedAt[0]);
console.log(result.jsonActiveService.publicServiceIsDescribedAt[0].dataMapping[i]);
console.log(i);
		
		var conceptAnn = result.jsonActiveService.publicServiceIsDescribedAt[0].dataMapping[i].conceptId;
		var propertyAnn = result.jsonActiveService.publicServiceIsDescribedAt[0].dataMapping[i].property;
		var nameAnn = result.jsonActiveService.publicServiceIsDescribedAt[0].dataMapping[i].name;
		var serviceId = $("#service-id").val();
	    
		//chiudo eventuale DIALOG già aperta
		//
		
	    var win = window.open("", "Title", "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width=450,height=350,top="+(200)+",left="+(400));
	    
	    win.document.head.innerHTML = "<head><title>Selected Field</title>"
	    	+" <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css\"/> <link data-require=\"select2@*\" data-semver=\"3.5.1\" rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/select2/3.5.2/select2.css\"/> <link data-require=\"select2@*\" data-semver=\"3.5.1\" rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/select2/3.5.2/select2-bootstrap.css\"/> <link rel=\"stylesheet\" href=\"http://localhost:8080/account-manager/style.css\"/>";
	    
	    win.document.body.innerHTML = "<script>var window.localJSON = "+sessionStorage.setItem("localJSON", JSON.stringify(result.jsonActiveService))+";</script><div class=\"container-fluid\"> <h1>Annotation</h1> <form> <div class=\"form-group\"> <label for=\"inputProperty\">Property</label>"
	    	+"<input type=\"input\" class=\"form-control\" id=\"inputProperty\"placeholder=\"Enter field id\" value=\""+propertyAnn+"\" disabled> </div><div class=\"form-group\"><label for=\"inputConcept\">Concept</label>"
	    	+"<input type=\"hidden\" class=\"form-control\" id=\"inputConcept\" placeholder=\"Select concept\"> </div><div class=\"form-group\"> <label for=\"inputConcept\">Name</label>"
	    	+"<input type=\"input\" class=\"form-control\" id=\"inputName\" placeholder=\"Name\" value=\""+nameAnn+"\"></div></form><button id=\"save-bt\" class=\"btn btn-primary\">Save</button></div>"+
	    	"<div id=\"hidNumCon\" hidden>"+i+"</div><div id=\"hidNumServ\" hidden>"+serviceId+"</div>"
	    	+"</body>"+
	    	"</html>";
	    
	    //JS loading //Only read from CDN
	    var script = document.createElement('script');
	    script.src = 'https://code.jquery.com/jquery-2.1.3.min.js';
	    script.async = false;
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

/*Fills the ANNOTATOR page*/
var serviceID = "";
var delHandlerON = false;
var editHandlerON = false;
var numConcept = 0;

chrome.storage.local.get(['idActiveService'], function(result) {
	
console.log('Value currently is ' + result.idActiveService);
    
    serviceID = result.idActiveService;
    
console.log("dato: "+serviceID);
  
//GET - getServices_apipath
var url_ = "http://"+app_parameters.host_param+":"+app_parameters.port_param+"/"+app_parameters.findById_apipath+serviceID;
$.ajax({
    url: url_
}).then(function(data) {
	
	console.log("DATA:");
	console.log(data.publicServiceID);
	//UPDATING
	if(data.publicServiceID){
		console.log("UPDATING MODE");
		chrome.storage.local.set({"jsonActiveService": data}, function() {});
	
		var name = "";
		var id = "";
		var descr = "";
		var fieldAnn = "";		//publicServiceIsDescribedAt.dataMapping[i].property
		var nameAnn = "";		//publicServiceIsDescribedAt.dataMapping[i].name
		var conceptAnn = "";	//publicServiceIsDescribedAt.dataMapping[i].conceptId
		var typeAnn = "";		//publicServiceIsDescribedAt.dataMapping[i].type
	
		try{
			id = data.publicServiceID;
			$("#service-id").val(id);
	
		}catch(err){
			console.log("Service missing publicServiceID, Error: "+err.message);
		}
		try{
			name = data.publicServiceName;
			$("#service-name").val(name);
	
		}catch(err){
			console.log("Service missing publicServiceName, Error: "+err.message);
		}
		try{
			descr = data.humanReadableDescription[0].description;
			$("#service-descr").val(descr);
			
		}catch(err){
			console.log("Service missing description, Error: "+err.message);
		}
	console.log(url_);
	console.log(data);
		
		numConcept = data.publicServiceIsDescribedAt[0].dataMapping.length;
		
	console.log("numero di concetti interno:");
	console.log(numConcept);
		
		//scorro i concetti
		for(i = 0; i < numConcept; i++){
	
			try{
				fieldAnn = data.publicServiceIsDescribedAt[0].dataMapping[i].property;
			}catch(err){
				
			}
			try{
				nameAnn = data.publicServiceIsDescribedAt[0].dataMapping[i].name;
			}catch(err){
				
			}
			try{
				conceptAnn = data.publicServiceIsDescribedAt[0].dataMapping[i].conceptId;
			}catch(err){
				
			}
			try{
				typeAnn = data.publicServiceIsDescribedAt[0].dataMapping[i].type;
			}catch(err){
				
			}
	
			$('#datatable-buttons').append("<tr id=\"info-row-"+i+"\"><td>"+i+"</td><td>"+fieldAnn+"</td><td>"
				+nameAnn+"</td><td>"+conceptAnn+"</td>"+
				"<td>"+typeAnn+"</td>"+"<td style=\"text-align: center\">"
				+"<div style=\"margin-right: 2em;\" id=\"edit"+
				i+"\" value=\""+nameAnn+"\" class=\"btn btn-primary edit-class\">EDIT</div>"
				+"<button id=\"delete"+i+"\" value=\""+nameAnn+"\" class=\"btn btn-danger delete-class\">DELETE</button></td></tr>");
			
		}//for

		var el = document.getElementsByClassName("edit-class");
		console.log("valore di element: ");
		console.log(el);
		
		var winTest = null;
		
		for(i = 0; i < numConcept; i++){
			if(el[i]){
				el[i].onclick = function(){
					
					console.log("clicked annotation:"+this.getAttribute("id"));
					var idl = this.getAttribute("id");
					var ide = idl.substring(4,idl.length);
					
					console.log("VALORE PARAMETRO: "+ide);
					var conceptAnn = null;
						
					console.log("Valore JSON chrome storage EDITCONCEPT_1 ");
					console.log(data);
					console.log(data.publicServiceIsDescribedAt[0]);
					console.log(data.publicServiceIsDescribedAt[0].dataMapping[ide]);
					console.log(ide);
							
					var conceptAnn = data.publicServiceIsDescribedAt[0].dataMapping[ide].conceptId;
					var propertyAnn = data.publicServiceIsDescribedAt[0].dataMapping[ide].property;
					var nameAnn = data.publicServiceIsDescribedAt[0].dataMapping[ide].name;
					var serviceId = $("#service-id").val();
				    var datastr = JSON.stringify(data);
					 
				    //svuoto eventuale DIALOG già aperta
					console.log("WIIIIIIIIIIINTEST: ");
					console.log(winTest);
					var checkRE = false;
					if(winTest){
						if(winTest.closed){
							winTest = null;
							console.log("rilevato vecchia finestra chiusa");
						}
						else{
							console.log("prima di chiusura finestra old");
							winTest.document.body.innerHTML = "";
							checkRE = true;
						}
					}
					var win = null;
					window.setTimeout(() => {
					    win = window.open("", "Title", "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width=450,height=350,top="+(200)+",left="+(400));
					    winTest = win;   
					}, 300) 
				    
				    
		            window.setTimeout(() => {

		            	console.log("dentro test: ");
		            	console.log(datastr);
				    	
				        console.log("inside onload " + new Date($.now()));
				        if(!checkRE){
						    win.document.head.innerHTML = "<head><title>Selected Field</title>"
						    	+" <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css\"/> <link data-require=\"select2@*\" data-semver=\"3.5.1\" rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/select2/3.5.2/select2.css\"/> <link data-require=\"select2@*\" data-semver=\"3.5.1\" rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/select2/3.5.2/select2-bootstrap.css\"/> <link rel=\"stylesheet\" href=\"http://localhost:8080/account-manager/style.css\"/>";
								    
					    //JS loading //Only read from CDN
					    var script = document.createElement('script');
					    script.src = 'https://code.jquery.com/jquery-2.1.3.min.js';
					    script.async = false;
					    win.document.head.appendChild(script);
					    
					    var script2 = document.createElement('script');
					    script2.src = 'https://cdnjs.cloudflare.com/ajax/libs/select2/3.5.2/select2.js';
					    script2.async = false;
					    win.document.head.appendChild(script2);
				        }
					    win.document.body.innerHTML = "<div class=\"container-fluid\"> <h1>Annotation</h1> <form> <div class=\"form-group\"> <label for=\"inputProperty\">Property</label>"
				    	+"<input type=\"input\" class=\"form-control\" id=\"inputProperty\"placeholder=\"Enter field id\" value=\""+propertyAnn+"\" disabled> </div><div class=\"form-group\"><label for=\"inputConcept\">Concept</label>"
				    	+"<input type=\"hidden\" class=\"form-control\" id=\"inputConcept\" placeholder=\"Select concept\"> </div><div class=\"form-group\"> <label for=\"inputConcept\">Name</label>"
				    	+"<input type=\"input\" class=\"form-control\" id=\"inputName\" placeholder=\"Name\" value=\""+nameAnn+"\"></div></form><button id=\"save-bt\" class=\"btn btn-primary\">Save</button></div>"+
				    	"<div id=\"hidNumCon\" hidden>"+ide+"</div><div id=\"hidNumServ\" hidden>"+serviceId+"</div><div id=\"hidServ\" hidden>"+datastr+"</div>"
				    	+"</body>"+
				    	"</html>";
					    window.setTimeout(() => {
					    var script3 = document.createElement('script');
					    script3.src = 'http://localhost:8080/account-manager/script.js';
					    script3.async = false;
					    win.document.body.appendChild(script3);
					    }, 100)
				        
		            }, 400)

				};//el[i]
			}//if(el[i])
		}//for
	}//if updating
	//REGISTRATION
	else{
		console.log("REGISTRATION MODE");
		chrome.storage.local.get(['jsonActiveService'], function(result) {
			
			console.log(result.jsonActiveService);
			
			var app = JSON.parse(result.jsonActiveService);
			
			try{
				var id = app.publicServiceID;
				$("#service-id").val(id);
				console.log("service-id updating");
				console.log(id);
			}catch(err){
				console.log("Service missing publicServiceID, Error: "+err.message);
			}
			try{
				var name = app.publicServiceName;
				$("#service-name").val(name);
		
			}catch(err){
				console.log("Service missing publicServiceName, Error: "+err.message);
			}
		});
	}
	
   });
});//getStorage


//CASCADE SCRIPT LOADING
$.getScript("../vendors/bootstrap/distrib/js/bootstrap.min.js", function(){
	console.log("cascade eins");
	$.getScript("../vendors/datatables.net/js/jquery.dataTables.js", function(){
		console.log("cascade zwei");
		$.getScript("../vendors/datatables.net-bs/js/dataTables.bootstrap.min.js", function(){
			console.log("cascade drei");
/*			$.getScript("../vendors/datatables.net-buttons-bs/js/buttons.bootstrap.min.js",function() {
				console.log("cascade vier");*/
				$.getScript("../vendors/datatables.net-buttons/js/buttons.html5.min.js", function(){
					console.log("cascade funf");
					$.getScript("../vendors/datatables.net-buttons/js/buttons.print.min.js", function(){
						console.log("cascade sechs");
						$.getScript("../vendors/datatables.net-responsive/js/dataTables.responsive.min.js", function(){
							console.log("cascade sieben");
							$.getScript("../vendors/datatables.net-responsive-bs/js/responsive.bootstrap.js", function(){
								console.log("cascade acht");
								$.getScript("../vendors/pdfmake/build_dir/vfs_fonts.js", function(){
									console.log("cascade neun");
									$.getScript("../js/custom.min.js", function(){
										$.getScript("../vendors/pdfmake/build_dir/pdfmake.min.js");
										console.log("end of cascade");
									})
								})
							})
						})
					})
				})
			})
		//})
	})
})

$(document).on('click', '.delete-class', function() {
    var idL = $(this).attr("id");
    idL = idL.substring(6,idL.length);
    
console.log("CLASSES: "+idL);
    
	deleteConcept(idL);
});

/*$(document).on('click', '.edit-class', function() {
    var idL = $(this).attr("id");
    var idL2 = idL.substring(4,idL.length);
    
//console.log("EDITS: "+idL2);
    
	editConcept(idL2);
});*/

$(document).on('click', '#reset-bt', function() {
	resetInfo();
});

$(document).on('click', '#submit-bt', function() {
	return submitInfo();
});


