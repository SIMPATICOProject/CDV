/*append categories and concept to the sidebar PDataFields menu*/
function appendPDFields(data, mod){
	
	
	var htmlString = "";
	if(mod == 1){
		console.log("appendPDFields in mod 1");
		//var servcontent = JSON.stringify(data);
		data = JSON.parse(data);
	}
	console.log("ingresso in appendPDFields");
	console.log("valore di input appendPDFields: ");
	console.log(data);
	//RIMODULARE LE APPEND COME STRINGA HTML ED UNICA APPEND FINALE!!!!
	for(i = 0; i < data.length; i++){ //scorro le categorie
		
		cat = data[i].category;
		
		//set the category in the sidebar, level 1
		//$('#pdf-section').append("<li><a>"+cat+"<span class=\"fa fa-chevron-down\"></span></a>");
		htmlString += "<li><a>"+cat+"<span class=\"fa fa-chevron-down\"></span></a>";
		
		console.log("numero di concetti per la categoria "+cat+": "+data[i].concepts.lenght);
		
		if(data[i].concepts.length > 0){	//se presenti, scorro i concetti appartenenti alle singole categorie
			
			//$('#pdf-section').append("<ul class=\"nav child_menu\">");
			htmlString += "<ul class=\"nav child_menu\">";
			
			for(j = 0; j < data[i].concepts.length; j++){ 
				//set the concepts in the sidebar, level 2, under the above created category at level 1
				con = data[i].concepts[j].name;
				if(j == 0){
					//$('#pdf-section').append("<li class=\"sub_menu\"><a href=\"#\">"+con+"</a></li>");
					htmlString += "<li class=\"sub_menu\"><a href=\"#\">"+con+"</a></li>";
				}
				else{
					//$('#pdf-section').append("<li><a href=\"#\">"+con+"</a></li>");
					htmlString += "<li><a href=\"#\">"+con+"</a></li>";
				}
			}
		}
		//$('#pdf-section').append("</ul></li>");
		htmlString += "</ul></li>";
	}
	$('#pdf-section').append(htmlString);
}

/*query the endpoint to obtain PDFields's categories and concepts. It store the result in the "infoPDF"
 * session variable */
function getPDFields(){
	console.log("ingresso in getPDFields");
    //GET - getPDataCategoryTree_apipath
    var url_ = "http://"+app_parameters.host_param+":"+app_parameters.port_param+"/"+app_parameters.getPDataCategoryTree_apipath;
    console.log("composed url PDF: "+url_);
	    $.ajax({
	        url: url_
	    }).then(function(data) {

	    	//List creation
	    	var servcontent = JSON.stringify(data);
	    	console.log(servcontent.length);
	    	
	    	var jobj = JSON.parse(servcontent);
	    	services_info = jobj;
	    	
	    	//Salvo l'elenco in sessione
	    	sessionStorage.setItem("infoPDF", servcontent);

	    	console.log("valore di jobj: ");
	    	console.log(jobj);
	    	appendPDFields(jobj,0);

	 });
}

