/*function copied from custom.js*/
function init_chart_doughnut_int(ajax_data,mod,labels_array){
	
	var chartSel = "";
	if(mod == "type"){
		chartSel = "canvasDoughnut_type";
		console.log("init cake type");
	}
	else if(mod == "sector"){
		chartSel = "canvasDoughnut_sector";
		console.log("init cake sector");
	}
	else{
		return;
	}
			
	console.log("valore di ajax_data INT: ");
	console.log(ajax_data);
	
	if( typeof (Chart) === 'undefined'){ return; }
	
	console.log('init_chart_doughnut INT');
 
	if ($("."+chartSel).length){
		
	var chart_doughnut_settings = {
			type: 'doughnut',
			tooltipFillColor: "rgba(51, 51, 51, 0.55)",
			data: {
				labels: labels_array,
				datasets: [{
					data: ajax_data,
					backgroundColor: [
						"#BDC3C7",
						"#9B59B6",
						"#E74C3C",
						"#26B99A",
						"#3498DB"
					],
					hoverBackgroundColor: [
						"#CFD4D8",
						"#B370CF",
						"#E95E4F",
						"#36CAAB",
						"#49A9EA"
					]
				}]
			},
			options: { 
				legend: false, 
				responsive: false 
			}
		}
	
		$("."+chartSel).each(function(){
			
			var chart_element = $(this);
			var chart_doughnut = new Chart( chart_element, chart_doughnut_settings);
			
		});			
	
	}  
   
}

/*fill #total-services-number with the number of registered services*/
function totalServicesFiller(data){
	
	var num = data[0].total;
	$("#total-services-number").text(num);	
}

/*fill #service-type-distrib with the number of services for each type +
 * fill #DEVICE_USAGE_1 (da stabilire, dopo aver capito il funzionamento della piecake) with the
 * top5 services types*/
function typeFiller(data){
	
	console.log("typeFiller START#######");
	
	/*DISTRIBUTION SECTION*/
	var nRows = data.length;
	var nServ = data[0].total;
	console.log("numero di TYPES: "+nRows);
	var htmlString = "";
	var leftLab = "";
	var rightLab = 0;
	var widthBar = 0;
	
	var maxType = [];
	
	for(i = 0; i < nRows; i++){
		
		leftLab = data[i].category;
		rightLab = data[i].count;
		widthBar = (rightLab * 100)/nServ;
		htmlString = htmlString + "<div class=\"widget_summary\"><div class=\"w_left w_25\">"+
                      "<span id=\"ap-left-label-"+i+"\">"+leftLab+"</span>"+
                   " </div>"+
                    "<div class=\"w_center w_55\">"+
                    "  <div class=\"progress\">"+
                    "    <div class=\"progress-bar bg-green\" role=\"progressbar\" aria-valuenow=\""+rightLab+"\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: "+widthBar+"%;\">"+
                     "     <span class=\"sr-only\" id=\"ap-progress-bar-"+i+"\">60% Complete</span>"+
                    "    </div></div></div><div class=\"w_right w_20\">"+
                "      <span id=\"ap-right-label-"+i+"\">"+rightLab+"</span>"+
                  "  </div><div class=\"clearfix\"></div></div>";
		
		maxType[i] = [rightLab,leftLab];
	}
	
	$("#service-type-distrib").append(htmlString);
	
	/*TOP5 SECTION*/
	console.log("prima di ordinamento: ");
	console.log(maxType);
	
/*	var app = 0;
	var jup = -1;
	for(z = 0; z < maxType.length-1; z++){
		jup++;
		for(j = jup; j < maxType.length-1; j++){
			if(maxType[j][1]<maxType[j+1][1]){
				app = maxType[j];
				maxType[j] = maxType[j+1]; 
				maxType[j+1] = app;
			}
		}
	}*/

	var app = 0;
	var jup = -1;
	for(z = 0; z < maxType.length-1; z++){
		jup++;
		for(j = jup; j < maxType.length-1; j++){
			if(maxType[z][0]<maxType[j+1][0]){
				console.log("SCAMBIOOOOOOOOOOO: "+z);
				app = maxType[z];
				console.log("maxType[z] prima: "+maxType[z][0]);
				maxType[z] = maxType[j+1]; 
				console.log("maxType[z] dopo: "+maxType[z][0]);
				maxType[j+1] = app;
			}
		}
	}
	
	
	console.log("array dei massimi type:");
	console.log(maxType);
	
	var ajax_data = [];
	var labels_array = [];
	htmlString = "";
	for(w = 0; w < maxType.length && w < 5; w++){
		ajax_data[w] = maxType[w][0];
		labels_array[w] = maxType[w][1];
	}
	
	init_chart_doughnut_int(ajax_data,"type",labels_array);
	
	var percent_value = 0;
	var color_array = ["aero", "purple", "red", "green", "blue"];
	for(f = 0; f < 5; f++){
		percent_value = (ajax_data[f] * 100)/nServ;
		htmlString = htmlString + "<tr><td><p><i class=\"fa fa-square "+color_array[f]+"\"></i>"+labels_array[f]+"</p>"+
        "</td><td>"+percent_value.toFixed(1)+"%"+"</td></tr>";
	}
	$("#type-cake").append(htmlString);
	
}

/*fill #service-sector-distrib with the number of services for each sector +
 * fill #DEVICE_USAGE_2 (da stabilire, dopo aver capito il funzionamento della piecake) with the
 * top5 services sectors*/
function sectorFiller(data){
	
	console.log("sectorFiller START#######");
	
	/*DISTRIBUTION SECTION*/
	var nRows = data.length;
	var nServ = data[0].total;
	console.log("numero di SECTORS: "+nRows);
	var htmlString = "";
	var leftLab = "";
	var rightLab = 0;
	var widthBar = 0;
	
	var maxSector = [];
	
	for(i = 0; i < nRows; i++){
		
		leftLab = data[i].category;
		rightLab = data[i].count;
		widthBar = (rightLab * 100)/nServ;
		htmlString = htmlString + "<div class=\"widget_summary\"><div class=\"w_left w_25\">"+
                      "<span id=\"ap-left-label-"+i+"\">"+leftLab+"</span>"+
                   " </div>"+
                    "<div class=\"w_center w_55\">"+
                    "  <div class=\"progress\">"+
                    "    <div class=\"progress-bar bg-green\" role=\"progressbar\" aria-valuenow=\""+rightLab+"\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: "+widthBar+"%;\">"+
                     "     <span class=\"sr-only\" id=\"ap-progress-bar-"+i+"\">60% Complete</span>"+
                    "    </div></div></div><div class=\"w_right w_20\">"+
                "      <span id=\"ap-right-label-"+i+"\">"+rightLab+"</span>"+
                  "  </div><div class=\"clearfix\"></div></div>";
		
		maxSector[i] = [rightLab,leftLab];
		
	}
	
	$("#service-sector-distrib").append(htmlString);
	
	/*TOP5 SECTION*/
	console.log("prima di ordinamento: ");
	console.log(maxSector);
	var app = 0;
	var jup = -1;
	for(z = 0; z < maxSector.length-1; z++){
		jup++;
		for(j = jup; j < maxSector.length-1; j++){
			if(maxSector[z][0]<maxSector[j+1][0]){
				console.log("SCAMBIOOOOOOOOOOO: "+z);
				app = maxSector[z];
				console.log("maxSector[z] prima: "+maxSector[z][0]);
				maxSector[z] = maxSector[j+1]; 
				console.log("maxSector[z] dopo: "+maxSector[z][0]);
				maxSector[j+1] = app;
			}
		}
	}
	
	console.log("array dei massimi sector:");
	console.log(maxSector);
	
	var ajax_data = [];
	var labels_array = [];
	var t = 0;
	htmlString = "";
	for(w = 0; w < maxSector.length-1 && w < 5; w++){
		ajax_data[w] = maxSector[w][0];
		labels_array[w] = maxSector[w][1];
		t++;
	}
	
	init_chart_doughnut_int(ajax_data,"sector",labels_array);
	
	var percent_value = 0;
	var color_array = ["aero", "purple", "red", "green", "blue"];
	for(f = 0; f < 5; f++){
		percent_value = (ajax_data[f] * 100)/nServ;
		htmlString = htmlString + "<tr><td><p><i class=\"fa fa-square "+color_array[f]+"\"></i>"+labels_array[f]+"</p>"+
        "</td><td>"+percent_value.toFixed(1)+"%"+"</td></tr>";
	}
	$("#sector-cake").append(htmlString);
	
	
}

/*main method managing above specific methods where data are collected from the API*/
function indexStatsFiller(){
	
	console.log("dentro indexStatsFiller");
	
	var typeData = "";
	var sectorData = "";
	
	/*TYPE SECTION*/
	
	//GET service-manager/getServiceReportbyType
	var url_ = "http://"+app_parameters.host_param+":"+app_parameters.port_param+"/"+app_parameters.getServiceReportbyType_apipath;
    $.ajax({
        url: url_
    }).done(function(data) {

    	var servcontent = JSON.stringify(data);
    	console.log("getServiceReportbyType: ");
    	console.log(servcontent.length);
    	
    	var jobj = JSON.parse(servcontent);
    	typeData = jobj;

    	console.log("valore di jobj gsrt: ");
    	console.log(jobj);
    	
    	/*DOM FILLING SECTION*/
    	
    	totalServicesFiller(typeData);
    	typeFiller(typeData);

    });
    
	/*SECTOR SECTION*/
	
	//GET service-manager/getServiceReportbySector
	var url_ = "http://"+app_parameters.host_param+":"+app_parameters.port_param+"/"+app_parameters.getServiceReportbySector_apipath;
	$.ajax({
	    url: url_
	}).done(function(data) {
	
		var servcontent = JSON.stringify(data);
		console.log(servcontent.length);
		
		var jobj = JSON.parse(servcontent);
		sectorData = jobj;
	
		console.log("valore di jobj: ");
		console.log(jobj);
		
		/*DOM FILLING SECTION*/

		sectorFiller(sectorData);

	});


	
}