/*Function: getServicesAnnotator*/
var services_info;
//GET - getServices_apipath
var url_ = "http://"+app_parameters.host_param+":"+app_parameters.port_param+"/"+app_parameters.getServices_apipath;

$.ajax({
    url: url_
}).then(function(data) {
	
	var servcontent = JSON.stringify(data);
	//console.log(servcontent.length);
	
	var jobj = JSON.parse(servcontent);
	services_info = jobj;

	var name = "";
	var id = "";

	for(i = 0; i < data.length; i++){
		
		try{
			id = data[i].publicServiceID;
			//console.log("id ok: "+id);
		}catch(err){
			console.log("Service missing publicServiceID, Error: "+err.message);
		}
		try{
			name = data[i].publicServiceName;
			//console.log("name ok: "+name);
		}catch(err){
			console.log("Service missing publicServiceName, Error: "+err.message);
		}
		
		//se è presente un servizio senza id lo si interpreta come corrotto e non si visualizza in lista
		if(id == ""){
			console.log("Service missing publicServiceID, Error: not assigned");
		}
		else{
			$('#datatable-buttons').append("<tr id=\"info-row-"+i+"\"><td>"+id+"</td><td>"+name+"</td><td>"+name+"</td><td>CONCEPT</td>"+
				"<td>TYPE</td>"+
				"<td style=\"text-align: center\"><button style=\"margin-right: 2em;\" id=\""+
				id+"\" value=\""+name+
				"\" class=\"btn btn-primary\" onClick=\"EditService(\'"+id+"\')\">EDIT</button><button id=\""+
				id+"\" value=\""+name+
				"\" class=\"btn btn-danger\" onClick=\"DeleteService(\'"+id+"\')\">DELETE</button></td></tr>");
		}
	}
   });
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

    