import {Component,Output,EventEmitter} from '@angular/core';
import {IDatePickerConfig} from 'ng2-date-picker';
import { Router} from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { ConfigService } from 'ng2-config';

import {BlockFormService} from './blockForm.service';
import {
	FormGroup,
	FormArray,
	FormControl,
	FormBuilder,
	Validators,
	NgForm
}
from '@angular/forms';
import {
	Account,
	Email,
	Telephone,
	Contact,
	Particular
}
from '../models/account';
import {
	DatePipe
}
from '@angular/common';
import {
	FileSaver
}
from 'file-saver';
import 'style-loader!./blockForm.scss';
 @ Component({
	selector: 'block-form',
	templateUrl: './blockForm.html',
})
export class BlockForm {

	onFormatChange(event) {

		console.log(event);
	}

	user;
	
	
	config: IDatePickerConfig = {
    firstDayOfWeek: 'su',
    format: 'YYYY-MM-DD',
    monthFormat: 'MMM, YYYY',
    disableKeypress: false,
    allowMultiSelect: false,
    closeOnSelect: undefined,
    closeOnSelectDelay: 100,
    onOpenDelay: 0,
    weekdayNames: {
      su: 'sun',
      mo: 'mon',
      tu: 'tue',
      we: 'wed',
      th: 'thu',
      fr: 'fri',
      sa: 'sat'
    },
    appendTo: document.body,
    drops: 'up',
    opens: 'right',
    showNearMonthDays: true,
    showWeekNumbers: false,
    enableMonthSelector: true,
    yearFormat: 'YYYY',
    showGoToCurrent: true,
    dayBtnFormat: 'DD',
    monthBtnFormat: 'MMM'
  };
	
	
	formUpdated: EventEmitter < any >  = new EventEmitter < any > ();
	saveSuccess = false;
	message='';
	
	public myForm: FormGroup; // our form model
	
	constructor(private fb: FormBuilder, private service: BlockFormService,private translate: TranslateService, private myconfig: ConfigService,private router: Router) {
		
		translate.setDefaultLang('en');
	
	    this.translate.use(this.myconfig.getSettings('i18n').locale);
		this.createForm();
		//this.user=new Account();
		service.getAccount()
		.subscribe(
			result => {

			this.user = result;

			if (this.user.username != undefined)
				this.myForm.controls['username'].setValue(this.user.username, {
					onlySelf: true
				});
			if (this.user.particular != undefined)
				this.setParticular(this.user.particular);
			if (this.user.emails != undefined)
				this.setEmails(this.user.emails);
			if (this.user.telephones != undefined)
				this.setTelephones(this.user.telephones);
			if (this.user.contacts != undefined)
				this.setContacts(this.user.contacts);
			console.log(this.myForm.get('contacts'));
		},
			err => {
			let errorJson = eval('(' + err._body + ')');
			console.log('Error\n' + errorJson['message']);
			this.router.navigate(['/login']);
			
		});

	}
	// we will initialize our form here
	createForm() {
		this.myForm = this.fb.group({
				username: '',
				//	activated: '',
				//	created:'',
				particular: this.fb.group({
					firstname: '',
					lastname: '',
					dateOfBirth: '', //this.datePipe.transform(this.dateOfBirth, 'dd/MM/yyyy'),
					imgUrl: '',

				}),
				emails: this.fb.array([]),
				//	telephones: this.fb.array([]),
				//	contacts: this.fb.array([])
			});
	}

	//////////////////////////////PARTICULAR BLOCK ////////////////////////////////////////////////////
	get particular(): FormGroup {
		return this.myForm.get('particular')as FormGroup;
	};

	setParticular(particular: Particular) {
		console.log(particular.imgUrl);
		if (particular.firstname)
			this.myForm.get('particular').patchValue({
				'firstname': particular.firstname
			});
		if (particular.lastname)
			this.myForm.get('particular').patchValue({
				'lastname': particular.lastname
			});
		if (particular.dateOfBirth)
			this.myForm.get('particular').patchValue({
				'dateOfBirth': particular.dateOfBirth
			});
		if (particular.imgUrl && particular.imgUrl != "")
			this.myForm.get('particular').patchValue({
				'imgUrl': particular.imgUrl
			});
		//this.form.controls["firstName"].setValidators([Validators.minLength(1), Validators.maxLength(30)]);
		/* const particularFG =this.fb.group(particular));
		this.myForm.setControl('particular', particularFG ); */

	}
	////////////////////////////// END PARTICULAR BLOCK ////////////////////////////////////////////////////


	//////////////////////////////EMAIL BLOCK ////////////////////////////////////////////////////
	get emails(): FormArray {
		return this.myForm.get('emails')as FormArray;
	};
	setEmails(emails: Email[]) {
		console.log(emails);
		if (emails.length > 0) {
			const emailFGs = emails.map(email => this.fb.group(email));
			const emailFormArray = this.fb.array(emailFGs);
			this.myForm.setControl('emails', emailFormArray);
		}
	}

	addEmail() {

		if (this.emails === undefined || this.emails === null) {
			this.myForm.addControl('emails', this.fb.array([]));
			this.emails.push(this.fb.group(new Email("", "", false)));
		} else {

			this.emails.push(this.fb.group(new Email("", "", false)));
		}
	}

	removeEmail(i) {
		this.emails.removeAt(1);
	}
	///////////////////////////// END EMAIL BLOCK ////////////////////////////////////////////////////

	//////////////////////////////TELEPHONES BLOCK ////////////////////////////////////////////////////
	get telephones(): FormArray {
		return this.myForm.get('telephones', )as FormArray;
	};
	setTelephones(telephones: Telephone[]) {
		if (telephones.length > 0) {
			const telephoneFGs = telephones.map(telephone => this.fb.group(telephone));
			const telephoneFormArray = this.fb.array(telephoneFGs);
			this.myForm.setControl('telephones', telephoneFormArray);
		}
	}

	addTelephone() {
		console.log(this.telephones);
		if (this.telephones === undefined || this.telephones === null) {
			this.myForm.addControl('telephones', this.fb.array([]));
			this.telephones.push(this.fb.group(new Telephone("", "", false)));
		} else {

			this.telephones.push(this.fb.group(new Telephone("", "", false)));
		}
	}
	removeTelephone(i) {
		this.telephones.removeAt(1);
	}
	///////////////////////////// END TELEPHONE BLOCK ////////////////////////////////////////////////////

	//////////////////////////////CONTACTS BLOCK ////////////////////////////////////////////////////
	get contacts(): FormArray {
		return this.myForm.get('contacts')as FormArray;
	};
	setContacts(contacts: Contact[]) {
		if (contacts.length > 0) {
			const contactFGs = contacts.map(contact => this.fb.group(contact, {
						validator: Validators.compose([Validators.required, Validators.minLength(2)])
					}));
			console.log(contactFGs);
			const contactFormArray = this.fb.array(contactFGs);
			this.myForm.setControl('contacts', contactFormArray);
		}
	}

	addContact() {
		if (this.contacts === undefined || this.contacts === null) {
			this.myForm.addControl('contacts', this.fb.array([]));
			this.contacts.push(this.fb.group(new Contact("", "", "", "", "", "", "", false)));

		} else {

			this.contacts.push(this.fb.group(new Contact("", "", "", "", "", "", "", false)));
		}
	}
	removeContact(i) {
		this.contacts.removeAt(1);
	}
	///////////////////////////// END CONTACTS BLOCK ////////////////////////////////////////////////////

	public onSubmit(blockForm: NgForm) {
		console.log(blockForm)
		// event.preventDefault();
		//blockForm.value.particular['dateOfBirth'] = blockForm.value.particular['dateOfBirth'].format('YYYY-MM-DD');
		//check if particular object contains all fields not empty or null
		for (var key in blockForm.value.particular) {
			if (blockForm.value.particular[key] === null || blockForm.value.particular[key] === "") {
				delete blockForm.value.particular[key];
			}
		}
		//check if emails array contains all fields not empty or null
		console.log(blockForm.value.emails);
		for (var email in blockForm.value.emails) {
			for (var key in blockForm.value.emails[email]) {
				if (blockForm.value.emails[email][key] === null || blockForm.value.emails[email][key] === "") {
					blockForm.value.emails = blockForm.value.emails.slice(0, email);
					break;
				}
			}
		}
		console.log(blockForm.value.emails);
		//check if telephones array contains all fields not empty or null
		for (var tel in blockForm.value.telephones) {
			for (var key in blockForm.value.telephones[tel]) {
				if (blockForm.value.telephones[tel][key] === null || blockForm.value.telephones[tel][key] === "") {
					blockForm.value.telephones = blockForm.value.telephones.slice(0, tel);
					break;
				}
			}
		}

		//check if contacts array contains all fields not empty or null

		for (let contact in blockForm.value.contacts) {

			for (var key in blockForm.value.contacts[contact]) {
				if (blockForm.value.contacts[contact][key] === null || blockForm.value.contacts[contact][key] === "") {
					console.log(key);
					blockForm.value.contacts = blockForm.value.contacts.slice(0, contact);
					break;
				}
			}
		}
		console.log(JSON.stringify(blockForm.value));
		/////Update Account///////
		this.service.updateAccount(blockForm.value)
		.subscribe(
			result => {
			console.log(result);
			window.alert('Success');

		},
			err => {
			let errorJson = eval('(' + err._body + ')');
			console.log(eval('(' + err._body + ')'));
			console.log('Error\n' + errorJson['message']);
			this.router.navigate(['/login']);
		});

	}
	public defaultPicture = 'assets/img/theme/no-photo.png';

	exportData(event) {
		console.log(event);
		this.service.downloadAllPdata(event).subscribe(
			result => {
			console.log(result);
			var blob = new Blob([result._body], {
					type: "text/plain"
				});
			var file_saver_1 = require('file-saver');
			switch (event) {
			case "csv":
				file_saver_1.saveAs(blob, "cdv.csv");
				break;
			case "json":
				file_saver_1.saveAs(blob, "cdv.json");
				break;
			}
		},
			err => {
			let errorJson = eval('(' + err._body + ')');
			console.log(errorJson);
			console.log('Error\n' + errorJson['message']);
			if(errorJson['statusCode']=="404" && errorJson['title']=="PDataNotFoundException") 
			 {window.alert('No Personal Data to export');}
			else{
				this.router.navigate(['/login']);
			}
			
			
			
		}); 
	} 
	removeAccount() {
        
		this.translate.get('general.account.remove_alert_msg').subscribe(label => this.message = label);
		console.log(event);
		if (window.confirm(this.message)) {
			console.log("remove");
			this.service.deleteAccount().subscribe(
			result => {
			console.log(result);
			window.alert('Account removed');
            this.router.navigate(['/login']);
			},
			err => {
			let errorJson=eval('('+err._body+')');
			console.log(eval('('+err._body+')'));
			this.router.navigate(['/login']);
			}); 
		} else {
			console.log("no remove");
		}
	}

}
