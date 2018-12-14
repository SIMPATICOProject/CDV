
/*Delete a concept from the service*/
function deleteConcept(i){
	
	var r = confirm("Sicuro di voler eliminare l'annotazione dal servizio?");
	if(r == true){
		chrome.storage.local.get(['jsonActiveService'], function(result) {
			//se presente
			if(jsonActiveService){
				var njson = jsonActiveService.publicServiceIsDescribedAt[0].dataMapping.splice(i,1);
				
				//PUT - update_apipath
				var url_ = "http://"+app_parameters.host_param+":"+app_parameters.port_param+"/"+app_parameters.update_apipath+serviceID;
				$.ajax({
					url: url_,
					method: 'PUT',
					contentType: "application/json",
					data: njson,
				}).done(function(data) {
					
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

/*Permits single concept update calling the DIALOG*/
function editConcept(i){
	
}


/*Function: getAnnotatorData*/
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
	
/*	var servcontent = JSON.stringify(data);
	//console.log(servcontent.length);
	
	var jobj = JSON.parse(servcontent);
	services_info = jobj;*/
	
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
		//console.log("id ok: "+id);
	}catch(err){
		console.log("Service missing publicServiceID, Error: "+err.message);
	}
	try{
		name = data.publicServiceName;
		$("#service-name").val(name);
		//console.log("name ok: "+name);
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
	console.log("numero di concetti internoooooooooooooooooooooooooooo:");
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
			+"<button style=\"margin-right: 2em;\" id=\"edit"+
			i+"\" value=\""+nameAnn+"\" class=\"btn btn-primary\">EDIT</button>"
			+"<button id=\"delete"+i+"\" value=\""+nameAnn+"\" class=\"btn btn-danger\">DELETE</button></td></tr>");
	
		//var link = document.getElementById('delete'+i);
		
/*		//adding delete callback
		document.addEventListener('DOMContentLoaded', function() {
		//window.addEventListener('load', function () {
		    var link = document.getElementById('delete'+i);
		    // onClick's logic below:
		    link.addEventListener('click', function() {
		    	deleteConcept(i);
		    });
		});

		//adding edit callback
		document.addEventListener('DOMContentLoaded', function() {
		    var link = document.getElementById('edit'+i);
		    // onClick's logic below:
		    link.addEventListener('click', function() {
		    	editConcept(i);
		    });
		});*/
		
	}//for
	addListeners();
   });
});//getStorage


console.log("Before cascade...");
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
console.log("After cascade...");

/*$(document).on('click', '#delete1', function() {
    deleteConcept(0);
});*/

//LISTENER DI TEST
document.addEventListener('DOMContentLoaded', function() {
    var link = document.getElementById('testDiv');
    console.log("LISTENER TEST");
    // onClick's logic below:
    link.addEventListener('click', function() {
    	deleteConcept(99);
    });
});

//FUNZIONE PER L'AGGIUNZIONE DEI LISTENER
function addListeners(){
	console.log("NUMERO DI CONCETTI:")
	console.log(numConcept);
	for(i = 0; i < numConcept; i++){
		//adding delete callback
		document.addEventListener('DOMContentLoaded', function() {
			console.log("DENTRO LISTENER");
		    var link = document.getElementById('delete'+i);
		    // onClick's logic below:
		    link.addEventListener('click', function() {
		    	deleteConcept(i);
		    });
		});
	
		//adding edit callback
		document.addEventListener('DOMContentLoaded', function() {
		    var link = document.getElementById('edit'+i);
		    // onClick's logic below:
		    link.addEventListener('click', function() {
		    	editConcept(i);
		    });
		});
	}
};
    