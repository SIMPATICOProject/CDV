/*Redirect to services-list*/
function CreateNewService(){
	window.location.href = window.location.href+"services-list.html";
};
/*Enables edit-service to import json*/
function uploadJSON(){
	    	 var x = document.getElementById("import");
	    	    var txt = "";
	    	    if ('files' in x) {
	    	        if (x.files.length == 0) {
	    	            //nessun file caricato
	    	            //console.log("IMPORT JSON, NO FILE");
	    	        } else {
	    	            //file caricati
	    	            //console.log("IMPORT JSON, DONE");
	    	            //ogni volta che arriva un nuovo file lo applico al JSON EDITOR (overwrite)
	    	            var file = x.files[0];
	    	            var jsonFile = "";
	    	            
	    	            if (file.type.match('\.json$')) {
	    	            	
	    	            	//console.log("json file uploaded.");  
	    	            	
	    	            	  var reader = new FileReader();

	    	            	  reader.onload = function(e) {
	    	            		  jsonFile = reader.result;
	    	            		  sessionStorage.setItem("jsonSink", jsonFile);
	    	            	  }

	    	            	  reader.readAsText(file); 
	    	            	  location.reload();
	    	            	  
	    	            } 
	    	            else {
	    	            	  alert("File not supported!");
	    	            }
	    	        }
	    	    } 
	    	    else {
	    	        if (x.value == "") {
	    	            //nessun file caricato
	    	            console.log("IMPORT JSON, NO FILE");
	    	        } else {
	    	            //file non supportato dal browser 
	    	            console.log("IMPORT JSON, FILE NOT SUPPORTED");
	    	        }
	    	    }
	    	}

/*Initialize jsonEditor with service value*/
function editManager(){
	var serviceID=window.location.href;
    var start = serviceID.indexOf("&");
    
    var importJSONSink = sessionStorage.getItem("jsonSink");
    
    //PUT - UPDATE SELECTED SERVICE
    if(start != -1){
    	console.log("start !=-1");
	    var len = serviceID.length - start - 1;
	    serviceID = serviceID.substr(start+1, len);
		var starting_value="{}"
		$(function() {
			//findById_apipath
			var url = "http://"+app_parameters.host_param+":"+app_parameters.port_param+"/"+app_parameters.findById_apipath+serviceID;
			console.log("composed url: "+url);
	        $.get( url, function( data ) {
	        	console.log("STAMPA DI CONTROLLO:"+data);
	        	console.log(data);
	        	
       	      if(importJSONSink){
		        console.log("inside importJSONSink, valorized");
		        console.log(importJSONSink);
			    starting_value = JSON.parse(importJSONSink);
       	      }
       	      else{
       	    	starting_value=data;
       	      }
		      // Initialize the editor
		      var editor = new JSONEditor(document.getElementById('editor_holder'),{
		        // Enable fetching schemas via ajax
		        ajax: true,
		        
		        // The schema for the editor
		        schema: {
		          $ref: schemaDir/*,
		          format: "grid"*/ //no tab version
		        },
		        
		        // Seed the form with a starting value
		        startval: starting_value
		      });
		      
		      if(importJSONSink){
		      	//Clear the sessionStorage to implement standard behaviour on refreshing page
		      	sessionStorage.removeItem('jsonSink');
		      }
		      
		      // Hook up the submit button to log to the console
		      document.getElementById('submit').addEventListener('click',function() {
	
		    	if (confirm('Il servizio verrà modificato, sei sicuro di voler procedere?')){
		    		
		    		var payload = editor.getValue();
		    		
		    		//console.log("UPDATING SERVICE, submitting to CDV: ");
		    		//console.log(payload);
		    		
		    		//PUT - update_apipath
		    		var url_ = "http://"+app_parameters.host_param+":"+app_parameters.port_param+"/"+app_parameters.update_apipath+serviceID;
		    		//console.log("composed url: "+url_);
			        $.ajax({
				        url: url_,
				        method: 'PUT',
				        contentType: "application/json",
				        data: JSON.stringify(editor.getValue()),
				    }).done(function(data) {
				    	//console.log("RIPOSTA PUT MODIFICA NUOVO SERVIZIO: "+data);
				    	//console.log(data);
				    	
				    	var nome = payload.publicServiceName.replace(" ","-");
				    	window.location.href = window.location.origin+"/service-editor/edit-service.html?"+nome+"&"+payload.publicServiceID;
				    
				    }).fail(function() {
				      alert( "Errors occurred in service update. Please be careful and try again..." );
				    })
		    	}
		      });
		      
		      // Hook up the Restore to Default button
		      document.getElementById('restore').addEventListener('click',function() {
		        editor.setValue(starting_value);
		      });
	        });
		  });
    }
    //POST - ADDING NEW SERVICE
    else{
    	//console.log("start -1");
    	  $('#submit').text("Create Service");
    	  $('#restore').hide();
	      // Initialize the editor
   	      if(importJSONSink){
		        //console.log("inside importJSONSink, valorized");
		        //console.log(importJSONSink);
			    starting_value = JSON.parse(importJSONSink);
			    
			      
		        var editor = new JSONEditor(document.getElementById('editor_holder'),{
		          // Enable fetching schemas via ajax
		          ajax: true,
		          // The schema for the editor
		          schema: {
		            $ref: schemaDir/*,
		            format: "grid"*/ //no tab version
		         },
		        
		          // Seed the form with a starting value
		          startval: starting_value
		      });
     	  }
     	  else{
    	      
    	      var editor = new JSONEditor(document.getElementById('editor_holder'),{
    	        // Enable fetching schemas via ajax
    	        ajax: true,
    	        // The schema for the editor
    	        schema: {
    	          $ref: schemaDir/*,
    	          format: "grid"*/ //no tab version
    	        }
    	      });
     	  }
	      
	      if(importJSONSink){
		      	//Clear the sessionStorage to implement standard behaviour on refreshing page
		      	sessionStorage.removeItem('jsonSink');
		  }
	      
	      // Hook up the submit button to log to the console
	      document.getElementById('submit').addEventListener('click',function() {

	    	if (confirm( 'Il servizio verrà creato, sei sicuro di voler procedere?')){  
	    		
	    		var payload = editor.getValue();
	    		
	    		//console.log("REGISTERING NEW SERVICE, submitting to CDV: ");
	    		//console.log(payload);
	    		
	    		//POST - create_apipath
	    		var url_ = "http://"+app_parameters.host_param+":"+app_parameters.port_param+
	    					"/"+app_parameters.create_apipath;
		        $.ajax({
			        url: url_,
			        method: 'POST',
			        contentType: "application/json",
			        data: JSON.stringify(editor.getValue()),
			    }).done(function(data) {
			    	//console.log("RIPOSTA POST REGISTRAZIONE NUOVO SERVIZIO: "+data);
			    	//console.log(data);
			    	
			    	var nome = payload.publicServiceName.replace(" ","-");
			    	window.location.href = window.location.origin+"/service-editor/edit-service.html?"+nome+"&"+payload.publicServiceID;
			    
			    }).fail(function() {
			      alert( "Errors occurred in service registration. Please be careful and try again..." );
			    })
	    	}
	      });
	      
          /* Old jsonEditor dummy RESTORE feature
           * // Hook up the Restore to Default button
	      document.getElementById('restore').addEventListener('click',function() {
	        editor.setValue(starting_value);
	      });*/
    }
}