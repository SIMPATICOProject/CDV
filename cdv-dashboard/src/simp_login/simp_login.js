var cdvServer = "";

var host="";

var aacServer="";

var cdvDashboardURL= "/cdv-dashboard/";

var no_account_message="Sorry! No CDV Account Associated to You! Create?"



function processAuthParams(input) {
	var params = {},
	queryString = input;
	var regex = /([^&=]+)=([^&]*)/g;
	while (m = regex.exec(queryString)) {
		params[m[1]] = m[2];
	}
	return params;
}

function complete() {
	var params = processAuthParams(decodeURIComponent(document.location.hash.substring(1)));
	localStorage.setItem('aacTokenData', JSON.stringify(params));
	jQuery.ajax({
		url: aacServer + '/basicprofile/me',
		type: 'GET',
		dataType: 'json',
		success: function (data) {
			localStorage.userData = JSON.stringify(data);
			cdv_getAccount(storeAccount());
		},
		error: function (err) {
			console.log(err);
		},
		beforeSend: function (xhr) {
			xhr.setRequestHeader('Authorization', 'Bearer ' + JSON.parse(JSON.stringify(params)).access_token);
		}
	});
}

function cancel() {
	window.close();
}

function oncheck() {
	var val = document.getElementById('check').checked;
	if (val)
		localStorage.authorized = 'true';
	else
		localStorage.authorized = 'false';
}

function init() {
	
		
	jQuery.ajax({
		url: '../config.json',
		type: 'GET',
		dataType: 'json',
		success: function (data) {
			host=data.system.host;
			cdvServer=data.system.cdvServer;
			aacServer=data.system.aacServer;
		},
		error: function (err) {
			console.log(err);
		}
	});
	
	
	if (document.location.hash && document.location.hash.substring(1)) {
		if (localStorage.authorized == 'true') {
			complete();
		}
	}
}

this.cdv_getAccount = function (callback) {
	var data = JSON.parse(localStorage.userData || 'null');
	var url = cdvServer + "/account-manager/api/v1/users/" + data.userId + "/serviceLink";
	var tokenData = JSON.parse(localStorage.aacTokenData || 'null');
	console.log(tokenData);

	$.ajax({
		url: url,
		type: 'GET',
		contentType: "application/json; charset=utf-8",
		dataType: 'json',
		success: function (json) {
			console.log(json.username);

			localStorage.setItem('accountData', json.username);
			callback(true);

		},
		error: function (jqxhr, textStatus, err) {
			console.log(textStatus + ", " + err);
			if (confirm(no_account_message)){
				cdv_createAccount(callback);
			} else{
				callback(false);
			}
			

		},
		beforeSend: function (xhr) {
			xhr.setRequestHeader('Authorization', 'Bearer ' + tokenData.access_token);

		}

	});
}

this.cdv_createAccount = function (callback) {

			var data = JSON.parse(localStorage.userData || 'null');
			var url = cdvServer + "/account-manager/api/v1/accounts";
			var tokenData = JSON.parse(localStorage.aacTokenData || 'null');
			console.log(tokenData);
			var account = accountToJSON(data.userId, data.name, data.surname);

			$.ajax({
				url: url,
				type: 'POST',
				data: account,
				contentType: "application/json; charset=utf-8",
				success: function (resp) {
					console.log("account created");
					username = resp.username;
					localStorage.accountData=username;
					cdv_createSLR(callback);
					

				},
				error: function (jqxhr, textStatus, err) {
					console.log(textStatus + ", " + err);
					callback(false);
				},
				beforeSend: function (xhr) {
					xhr.setRequestHeader('Authorization', 'Bearer ' + tokenData.access_token);

				}

			});

		}

		this.cdv_createSLR = function (callback) {

			var data = JSON.parse(localStorage.userData || 'null');
			var url = cdvServer + "/account-manager/api/v1/accounts/" + username + "/serviceLinks";
			var tokenData = JSON.parse(localStorage.aacTokenData || 'null');
			console.log(tokenData);
			var slr = slrToJSON(data.userId, "_cdv", host+cdvDashboardURL,"_cdv");

			$.ajax({
				url: url,
				type: 'POST',
				data: slr,
				contentType: "application/json; charset=utf-8",
				success: function (resp) {
					console.log("slr saved!");
					callback(true);

				},
				error: function (jqxhr, textStatus, err) {
					console.log(textStatus + ", " + err);
					callback(false);
				},
				beforeSend: function (xhr) {
					xhr.setRequestHeader('Authorization', 'Bearer ' + tokenData.access_token);

				}

			});

		}

// Helper function to serialize all account fields into a JSON string
		function accountToJSON(userId, firstname, lastname) {
			var properties = [];
			var jsonStr = JSON.stringify({
					"username": firstname + "." + lastname + userId 
					
				});
			var partStr = JSON.stringify({
					"firstname": firstname,
					"lastname": lastname
				});
			var obj = JSON.parse(jsonStr);
			var part = JSON.parse(partStr);
			obj['particular'] = part;

			jsonStr = JSON.stringify(obj);
			return jsonStr;
		}

		// Helper function to serialize all slr fields into a JSON string
		function slrToJSON(userId, serviceId, serviceURL, serviceName) {
			var properties = [];
			var jsonStr = JSON.stringify({
					"serviceId": serviceId,
					"serviceUri": serviceURL,
					"userId": userId,
					"serviceName":serviceName
				});
			return jsonStr;
		}


function storeAccount() {
	return function (account_exist) {
		console.log("Account " + account_exist);
		if (account_exist) {
			window.opener.document.location.href = host+cdvDashboardURL;
			window.close();
		}
	}
}