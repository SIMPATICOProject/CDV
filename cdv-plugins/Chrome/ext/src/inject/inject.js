chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);

		// ----------------------------------------------------------
		// This part of the script triggers when page is done loading
		console.log("Hello, CDV plugin injected on page: "+window.location.href);
		// ----------------------------------------------------------
		
		inputs = document.getElementsByTagName('input');
		for (index = 0; index < inputs.length; ++index) {
			console.log(inputs[index].name) ;
		}
       //instatiate cdv plugin
	   
	   
	   
	   var simpaticoEservice = "3"; //  the id corresponding to the e-service
		      var simpaticoForm = "main";
		      var simpaticoCategory = "Infanzia"; // the general category of the e-service
		      var simpaticoMapping=["AventeTitolo_Telefono","AventeTitolo_EMailPEC","AventeTitolo_Fax","AventeTitolo_EMail","AventeTitolo_EnteProvv","AventeTitolo_NumProt","AventeTitolo_Data","Parametri_TipoLavoroPadre","Parametri_AziendaLavoroPadre","Parametri_ProvAziendaLavoroPadre","Parametri_ComuneAziendaLavoroPadre","Parametri_IndirizzoAziendaLavoroPadre","Parametri_CivicoAziendaLavoroPadre","Parametri_CapAziendaLavoroPadre","Parametri_TelAziendaLavoroPadre","Parametri_EmailAziendaLavoroPadre","Parametri_AgenziaEntratePadre","Parametri_PIVAPadre","Parametri_ScuolaPadre","Parametri_TipoLavoroMadre","Parametri_AziendaLavoroMadre","Parametri_ProvAziendaLavoroMadre","Parametri_ComuneAziendaLavoroMadre","Parametri_IndirizzoAziendaLavoroMadre","Parametri_CivicoAziendaLavoroMadre","Parametri_CapAziendaLavoroMadre","Parametri_TelAziendaLavoroMadre","Parametri_EmailAziendaLavoroMadre","Parametri_AgenziaEntrateMadre","Parametri_PIVAMadre","Parametri_ScuolaMadre"];
              var ERROR_LABELS = {
                      'block1' : 'Manca il codice fiscale',
                      'block2' : 'Selezione Ruolo',
                      'block6' : 'Selezione Part-time / Full-time'                       
                    }
	    	  var serviceName = "M1876 ISCRIZIONE NIDO"; // Eservice example
	          var serviceURL="http://localhost:8080/IFE/M1876-ISCRIZIONE-NIDO-SIMPATICO_v0.3.html";
			  var serviceDatasetId="123456";
			  
			  cdvUI.getInstance().init({
				endpoint: 'http://localhost:8080',
				serviceID: simpaticoEservice,
				datasetId: serviceDatasetId,
				serviceName: serviceName,
				serviceURL: serviceURL,
				dataFields: simpaticoMapping,
				informedConsentLink: "give_consent.html",
				consentGiven:false,
				cdvColor: '#008000',
				dialogTitle: 'Citizen Data Vault',
				tabPFieldsTitle: 'My Data',
				entryMessage: 'Welcome to SIMPATICO CDV!',
				statusMessage: 'Now you can select/update your personal data to fill form fields.',
				notextMessage: 'No field selected',
				dialogSaveTitle: 'Data Saved',
				dialogSaveMessage: 'Data saved successfully into your Data Vault.',
				statusMessageNoAccount: "No CDV Account associated to you. Create?",
				statusMessageNoActive: "CDV is not active for this service. Activate?",
				confirmSaveDataMessage: "Update your Persona Data?",
				buttonSaveData:"Save your data",
				buttonManageData:"Manage your data",
				buttonActivate:"Activate",
				buttonCreate: "Create",
				consentButton: "Consent",
				tabSettingsTitle: 'Settings',
				cdvDashUrl:'http://localhost:8080/cdv-dashboard/index.html'
			  });
			  
			  cdvUI.getInstance().enable();
	   
	   
	}
	}, 10);
});

function toggleDialog() {

	if ($('#dialog-cdv').dialog('isOpen') === true) {
		$('#dialog-cdv').dialog("close");
	} else {
		dataReload=false;
		$('#dialog-cdv').dialog("open");
	}
}