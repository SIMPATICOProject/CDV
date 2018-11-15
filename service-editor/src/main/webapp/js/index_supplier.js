/*fill #total-services-number with the number of registered services*/
function totalServicesFiller(data){
	var num = data[0].total;
	$("#total-services-number").text(num);	
}

/*fill #service-type-distrib with the number of services for each type +
 * fill #DEVICE_USAGE_1 (da stabilire, dopo aver capito il funzionamento della piecake) with the
 * top5 services types*/
function typeFiller(data){
	
	/*DISTRIBUTION SECTION*/
	
	/*TOP5 SECTION*/
	
}

/*fill #service-sector-distrib with the number of services for each sector +
 * fill #DEVICE_USAGE_2 (da stabilire, dopo aver capito il funzionamento della piecake) with the
 * top5 services sectors*/
function sectorFiller(data){
	
	/*DISTRIBUTION SECTION*/
	
	/*TOP5 SECTION*/
	
}

/*main method managing above specific methods where data are collected from the API*/
function indexStatsFiller(){
	
	var typeData = "";
	var sectorData = "";
	
	/*TYPE SECTION*/
	
	//GET service-manager/getServiceReportbyType
	var url_ = "http://"+app_parameters.host_param+":"+app_parameters.port_param+"/"+app_parameters.getServiceReportbyType_apipath;
    $.ajax({
        url: url_
    }).done(function(typeData) {

    	var servcontent = JSON.stringify(typeData);
    	console.log(servcontent.length);
    	
    	var jobj = JSON.parse(servcontent);
    	services_type = jobj;

    	console.log("valore di jobj: ");
    	console.log(jobj);

    });
    
	/*SECTOR SECTION*/
	
	//GET service-manager/getServiceReportbySector
	var url_ = "http://"+app_parameters.host_param+":"+app_parameters.port_param+"/"+app_parameters.getServiceReportbySector_apipath;
	$.ajax({
	    url: url_
	}).done(function(sectorData) {
	
		var servcontent = JSON.stringify(sectorData);
		console.log(servcontent.length);
		
		var jobj = JSON.parse(servcontent);
		services_info = jobj;
	
		console.log("valore di jobj: ");
		console.log(jobj);

	});
	
	/*DOM FILLING SECTION*/
	
	totalServicesFiller(typeData);
	
	typeFiller(typeData);
	
	sectorFiller(sectorData);
	
}