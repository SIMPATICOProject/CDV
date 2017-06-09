var host = "https://localhost:8080";

var endpoint = host+"" ;

var cdvDashboardURL= "/cdv-dashboard/";



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
		url: host + '/aac/basicprofile/me',
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
	if (document.location.hash && document.location.hash.substring(1)) {
		if (localStorage.authorized == 'true') {
			complete();
		}
	}
}

this.cdv_getAccount = function (callback) {
	var data = JSON.parse(localStorage.userData || 'null');
	var url = endpoint + "/account-manager/api/v1/users/" + data.userId + "/serviceLink";
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
			alert("Sorry! No CDV Account Associated to You!")
			callback(false);

		},
		beforeSend: function (xhr) {
			xhr.setRequestHeader('Authorization', 'Bearer ' + tokenData.access_token);

		}

	});

}

function storeAccount() {
	return function (account_exist) {
		console.log("Account " + account_exist);
		if (account_exist) {
			window.opener.document.location.href = cdvDashboardURL;
			window.close();
		}
	}
}