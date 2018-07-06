import { Component, Input } from '@angular/core';
import { ConsentsService } from './consents.service';
import { ConfigService } from 'ng2-config';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import * as _ from "lodash";
import { BaThemeSpinner } from '../../theme/services';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'consent',
  styleUrls: ['./consents.css'],
  templateUrl: './consents.html'

})
export class consentsComponent {
  @Input() loading: boolean = true;
  private msg: string='';
  private closeResult: string;
  private message: string = '';
  private isCollapsed = false;

  private lastIndex: number = -1;
  private lastDataMapping: any = [];

  private buttons = [
    {
      id: 1,
      name: 'Activate'
    },
    {
      id: 2,
      name: 'Disable'
    },
    {
      id: 3,
      name: 'Withdraw'
    }

  ]

  private consents: any[];
  private res: any[];
  private services: any[];
  private sub: any;

  //private tempSink: any = {};
  //private tempSource: any = {};
  //private tempIndex: number = 0;

  ngOnInit() {
     this.onGetConsent();
	 this.getServices();
     this.sub = this.route.params.subscribe(params => {
       
       console.log(params);
	   if (params['serviceId']&&params['serviceName']){
		this.onFilterConsents(params['serviceId'], params['serviceName']);
	   }
	   
	   
    });
    
  }
  
  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  constructor(private route: ActivatedRoute, private service: ConsentsService, private router: Router, private myconfig: ConfigService, private modalService: NgbModal) { }

  onGetConsent() {
    this.message ="";
    this.service.getConsents().subscribe(
      (consents: any[]) => {
        this.consents = consents;
        this.loading = false;
        if (consents.length == 0) {
          this.message = "No Consent Saved!!!";
        }
      },
      err => {

        let errorJson = eval('(' + err._body + ')');
        if (err.status === 401) {
          this.router.navigate(['/login']);
        }
      }
    );

  }
  
  getServices() {

    this.service.getServices().subscribe(
      (services: any[]) => {
        this.services = services;
        this.loading = false;        
      },
      err => {

        let errorJson = eval('(' + err._body + ')');
        if (err.status === 401) {
          this.router.navigate(['/login']);
        }
      }
    );

  }
  
  onFilterConsents(serviceId, serviceName){
      this.loading = true;
	  console.log("serviceId "+serviceId);
	    this.service.getConsents().subscribe(
      (consents: any[]) => {
        this.consents = [];
			   	   
	   for (var t = 0; t < consents.length; t++){
	   
	        if ((serviceId==consents[t].sourceService.publicServiceID) || (serviceId==consents[t].sinkService.publicServiceID)){
				this.consents.push(consents[t]);
			}
			
	   } 
		
        this.loading = false;
        if (this.consents.length == 0) {
          this.message = "No Consent Saved!!!"
        } else {
		  this.message = "Consents for service: "+ serviceName;
		}
      },
      err => {

        let errorJson = eval('(' + err._body + ')');
        if (err.status === 401) {
          this.router.navigate(['/login']);
        }
      }
    );
	
  }

  updateStatus(rsid: string, status: string) {  
    this.loading = true;

    this.service.updateConsentStatus(rsid, status).subscribe(
      (res: any[]) => {
        this.res = res;
        this.loading = false;
        this.onGetConsent();
      },
      err => {

        let errorJson = eval('(' + err._body + ')');
        if (err.status === 401) {
          this.router.navigate(['/login']);
        }
      }
    );

  }

  forgetMeDataType(type) {
    var message1=""
    var message2=""
    if(type == 'sensitivo'){
      message1 = 'The sensitive data, if not required, will be definitively deleted from the service. Are you sure you want to continue?'
      message2 = 'the data are deleted'
    }else{
      message1 = 'The non-sensitive data, if not required, will be definitively deleted from the service. Are you sure you want to continue?'
      message2 = 'the data are deleted'
    }

    if (window.confirm(message1)) {
      this.loading = true;

//      this.removeConsentBytype(type);



      this.service.forgetMeDataType(type).subscribe(
        (res: any[]) => {
          this.res = res;
          this.removeConsentBytype(type);
          this.msg = message2
        },
        err => {

          let errorJson = eval('(' + err._body + ')');
          if (err.status === 401) {
            this.router.navigate(['/login']);
          }
        }
      );
    }
    else {
      // They clicked no
    }



  }
  

  removeConsentBytype(type){
    var ind = this.lastIndex;
    var valSensitive = ((type == 'sensitivo') ? true : false);
    console.log(valSensitive)
    var snkService = JSON.parse(JSON.stringify(this.consents[ind].sinkService))
    var snk = JSON.parse(JSON.stringify(this.consents[ind].sink))
    var src = JSON.parse(JSON.stringify(this.consents[ind].source))
    var ds  = JSON.parse(JSON.stringify(this.findActiveDataSet(ind)))
    var serviceDs = JSON.parse(JSON.stringify(this.findServiceActiveDataSet(ind,ds.id)));
    console.log(serviceDs)
    var mapping = serviceDs.dataMapping;
    var new_mapping = new Array();
    //let input: HTMLElement


    delete snk.consentStatusList
    delete snk.common_part.rs_description.resource_set.dataset

    delete src.consentStatusList
    delete src.common_part.rs_description.resource_set.dataset

    snk.common_part.rs_description.resource_set.dataset=new Array(0);
    src.common_part.rs_description.resource_set.dataset=new Array(0);

    ds.dataMapping=[]

    snk.common_part.rs_description.resource_set.dataset[0] = ds
    src.common_part.rs_description.resource_set.dataset[0] = ds

    

    for (var t = 0; t < mapping.length; t++) {
      var ele = mapping[t]

      if(ele.required){
        new_mapping.push(ele)
      }else{
        if(ele.sensitive != valSensitive)
          new_mapping.push(ele)
      }

      //console.log(ele)
      //console.log(ind + "||" + ele.conceptId)
     // input = document.getElementById(ind + "||" + ele.conceptId);
      //  if (input != null) {

            //if (input.checked != true)
            //mapping.splice(t,1)
        //    if (input.checked == true)//aggiungi per segnati
        //      new_mapping.push(ele)
            
         // }else{//aggiungili perchè required
         //   new_mapping.push(ele)
         // } 

    }

    console.log(new_mapping)

    snk.common_part.rs_description.resource_set.dataset[0].dataMapping = new_mapping
    src.common_part.rs_description.resource_set.dataset[0].dataMapping = new_mapping

    


    console.log(JSON.stringify(snk))
    console.log(JSON.stringify(src))



    this.service.updateDataset(snk, src).subscribe(
      (res: any[]) => {
        this.res = res;
        this.loading = false;
        this.lastIndex = -1;
        this.onGetConsent();
       //    window.location.reload();this.router.navigate(['/consents']);
      
      // window.location.reload();

      },
      err => {

        let errorJson = eval('(' + err._body + ')');
        if (err.status === 401) {
          this.router.navigate(['/login']);
        }
      }
    );

  }

  updateDataset(ind) {
    this.loading = true;
    var snkService = JSON.parse(JSON.stringify(this.consents[ind].sinkService))
    var snk = JSON.parse(JSON.stringify(this.consents[ind].sink))
    var src = JSON.parse(JSON.stringify(this.consents[ind].source))
    var ds  = JSON.parse(JSON.stringify(this.findActiveDataSet(ind)))
    var serviceDs = JSON.parse(JSON.stringify(this.findServiceActiveDataSet(ind,ds.id)));
    console.log(serviceDs)
    var mapping = serviceDs.dataMapping;
    
	var new_mapping = new Array();
    let input: HTMLInputElement


    delete snk.consentStatusList
    delete snk.common_part.rs_description.resource_set.dataset

    delete src.consentStatusList
    delete src.common_part.rs_description.resource_set.dataset

    snk.common_part.rs_description.resource_set.dataset=new Array(0);
    src.common_part.rs_description.resource_set.dataset=new Array(0);

    ds.dataMapping=[]

    

    snk.common_part.rs_description.resource_set.dataset[0] = ds
    src.common_part.rs_description.resource_set.dataset[0] = ds



    

    //console.log(JSON.stringify(mapping))


    for (var t = 0; t < mapping.length; t++) {
      var ele = mapping[t]
      //console.log(ele)
      //console.log(ind + "||" + ele.conceptId)
      input = document.getElementById(ind + "||" + ele.conceptId) as HTMLInputElement;
        if (input != null) {

            //if (input.checked != true)
            //mapping.splice(t,1)
            if (input.checked == true)//aggiungi per segnati
              new_mapping.push(ele)
            
          }else{//aggiungili perchè required
            //new_mapping.push(ele)
			if(ele.required==1){
				new_mapping.push(ele)
			}
          } 

    }

    console.log(new_mapping)

    snk.common_part.rs_description.resource_set.dataset[0].dataMapping = new_mapping
    src.common_part.rs_description.resource_set.dataset[0].dataMapping = new_mapping

    


    console.log(JSON.stringify(snk))
    console.log(JSON.stringify(src))



    this.service.updateDataset(snk, src).subscribe(
      (res: any[]) => {
        this.res = res;
        this.loading = false;
        this.lastIndex = -1;
        this.onGetConsent();
       //    window.location.reload();this.router.navigate(['/consents']);
       //window.location.reload();

      },
      err => {

        let errorJson = eval('(' + err._body + ')');
        if (err.status === 401) {
          this.router.navigate(['/login']);
        }
      }
    );



  }

  open(rsid: string, buttonid: number) {
    // console.log(content)

    // this.modalService.open(content).result.then((result) => {
    //   this.closeResult = `Closed with: ${result}`;
    // }, (reason) => {
    //   this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    // });
  }

  openConsentHistory(consentHistory) {
    this.modalService.open(consentHistory).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  convertZoneDateTimeToString(zdt: any) {

    var date = zdt.date
    var time = zdt.time

    return date.year + '-' + date.month + '-' + date.day + ' ' + time.hour + ':' + time.minute + ':' + time.second;
  }

  getNowDateTime() {

    var dateTime = new Date()

    return dateTime.getFullYear() + '-' + dateTime.getMonth() + '-' + dateTime.getDay() + ' ' + dateTime.getHours() + ':' + dateTime.getMinutes() + ':' + dateTime.getSeconds();


  }

  getLastStatus(indx) {
    return this.consents[indx].sink.consentStatusList[this.consents[indx].sink.consentStatusList.length - 1].consent_status == 'ACTIVE'

    //this.verifyConsentStatusList(this.consents[indx].sink.consentStatusList);

  }

  verifyConsentStatusList(json) {
    var result = json.sort(function (a, b) {
      return new Date(b.issuedAt).getTime() - new Date(a.issuedAt).getTime();
      //parseFloat(a.value.displayOrder) - parseFloat(b.value.displayOrder);
    });
    if (result[0].consent_status == 'ACTIVE') {
      return true;
    }

    return false;
  }


  openDatasetHistory(datasetHistory) {
    this.modalService.open(datasetHistory).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }


  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  onClick(rs_id: string, id: number) {
    // console.log("rs_id")consent
    // console.log(rs_id)
    // console.log("name")
    var newStatus = ''
    //console.log(id)
    switch (true) {
      case (id === 1): {
        console.log("Enable");
        newStatus = 'ACTIVE'
        break;
      }
      case (id === 2): {
        console.log("Disable");
        newStatus = 'DISABLED'
        break;
      }
      case (id === 3): {
        console.log("Withdraw");
        newStatus = 'WITHDRAWN'
        break;
      }
      case (id === 4): {
        console.log("Details");
        //jQuery('#consentModalDetail-'+rs_id).show();
        break;
      }
      default: {
        console.log("Nothing to do");
        break;
      }

    }
    if (newStatus !== '')
      this.updateStatus(rs_id, newStatus);
  }

  isActive(index: number, buttonId: number) {
    //consent.sink.consentStatusList[consent.sink.consentStatusList.length - 1].consent_status, button.id
    var cns = this.consents[index];
    var status = cns.sink.consentStatusList[cns.sink.consentStatusList.length - 1].consent_status;
    //console.log(status)
    //enable button
    if (buttonId == 1 && status == 'DISABLED')
      return true;
    if (buttonId == 1 && status == 'ACTIVE')
      return false;
    if (buttonId == 1 && status == 'WITHDRAWN')
      return false;
    //disable button
    if (buttonId == 2 && status == 'ACTIVE')
      return true;
    if (buttonId == 2 && status == 'DISABLED')
      return false;
    if (buttonId == 2 && status == 'WITHDRAWN')
      return false;
    //withdraw button
    if (buttonId == 3 && status == 'DISABLED')
      return true;
    if (buttonId == 3 && status == 'ACTIVE')
      return true;
    if (buttonId == 3 && status == 'WITHDRAWN')
      return false;
    //details button always active
    if (buttonId == 4)
      return true;
  }

  getPurposeByDatasetIdAndServiceId(datasetId: string, serviceId: string) {
    console.log("getPurposeByDatasetIdAndServiceId "+ JSON.stringify(this.consents));
	var index = _.findIndex(this.consents, function (o) { return o.sinkService.publicServiceID == serviceId; });
    var snkservice = this.consents[index].sinkService;
    var snkServiceDescr:any[] = snkservice.publicServiceIsDescribedAt;
    var index2 = _.findIndex(snkServiceDescr, function (o) { return o.id == datasetId; });
    //console.log(datasetId)
    //console.log(index)

    return snkservice.publicServiceIsDescribedAt[index2].purpose[0];

    //console.log("index vale: " + first)
  }

  findActiveDataMappingByConsentIndex(cind) {
    //return this.findActiveDataMappingByresId(this.consents[cind].sink.common_part.rs_description.resource_set.rs_id)
	var datasets: any[]= this.consents[cind].sink.common_part.rs_description.resource_set.dataset;
	var i2 = _.findIndex(datasets, function (o) { return o.status == true; });
	
	console.log("cind "+cind);
	console.log("i2 "+i2);
	console.log("datasets[i2].id "+datasets[i2].id);
	var snkServiceDescr:any[] = this.consents[cind].sinkService.publicServiceIsDescribedAt
	var serviceMappingIndex = _.findIndex(snkServiceDescr, function (o) { return o.publicServiceDatasetID == datasets[i2].id; });
	console.log("serviceMappingIndex "+serviceMappingIndex);
	var serviceDM=this.servicesDataMapping(this.consents[cind].sinkService.publicServiceIsDescribedAt[serviceMappingIndex].dataMapping,this.consents[cind].sourceService.publicServiceIsDescribedAt[serviceMappingIndex].dataMapping);
	
	//return this.compareDataMapping(this.consents[cind].sinkService.publicServiceIsDescribedAt[serviceMappingIndex].dataMapping, datasets[i2].dataMapping);
	return this.compareDataMapping(serviceDM, datasets[i2].dataMapping);
  }

  findActiveDataMappingByresId(rs_id: string) {
    //find dataset of active consent
    //console.log(rs_id)
    var i1 = _.findIndex(this.consents, function (o) { return o.sink.common_part.rs_description.resource_set.rs_id == rs_id; });
    //console.log(i1)
    var datasets :any[] = this.consents[i1].sink.common_part.rs_description.resource_set.dataset;
    //console.log(datasets)
    var i2 = _.findIndex(datasets, function (o) { return o.status == true; });
    //find dataset of service
	var snkServiceDescr:any[] = this.consents[i1].sinkService.publicServiceIsDescribedAt;
    var serviceMappingIndex = _.findIndex(snkServiceDescr, function (o) { return o.publicServiceDatasetID == datasets[i2].id; });
    var serviceDM=this.servicesDataMapping(this.consents[i1].sinkService.publicServiceIsDescribedAt[serviceMappingIndex].dataMapping,this.consents[i1].sourceService.publicServiceIsDescribedAt[serviceMappingIndex].dataMapping);
	
    //return this.compareDataMapping(this.consents[i1].sinkService.publicServiceIsDescribedAt[serviceMappingIndex].dataMapping, datasets[i2].dataMapping);
    return this.compareDataMapping(serviceDM, datasets[i2].dataMapping);

  }

  findActiveDataSet(index) {
    var datasets :any[] = this.consents[index].sink.common_part.rs_description.resource_set.dataset;
    var i2 = _.findIndex(datasets, function (o) { return o.status == true; });
    return datasets[i2];

  }
  
  findServiceActiveDataSet(index,dsId) {
    var datasets :any[]= this.consents[index].sinkService.publicServiceIsDescribedAt;
    var i2 = _.findIndex(datasets, function (o) { return o.publicServiceDatasetID == dsId; });
	return datasets[i2];
  }
  

  compareDataMapping(dmFromService, dmFromConsent) {
    var res = new Array()
    //return _.unionBy([dmFromService, dmFromConsent], 'conceptId')[0];
    var isIn = -1;
    //JSON.parse(JSON.stringify(
      for (var i = 0; i < dmFromConsent.length; i++) {
        var consentProp = dmFromConsent[i]
        consentProp.isIn = true

        res.push(consentProp)
      }  

    for (var i = 0; i < dmFromService.length; i++) {
      var serviceProp = dmFromService[i];
      isIn = 0;
      for (var t = 0; t < res.length; t++) {
        var consentProp = res[t];
        if (serviceProp.conceptId == consentProp.conceptId) {
          isIn = 1
        }

        if (isIn == 1)
          break;
      }
      if (isIn == 0) {
        serviceProp.isIn = false
        res.push(serviceProp)
      }
    }
    //console.log(dmFromConsent);
    return res;
  }
  
  
  servicesDataMapping(dmFromSink, dmFromSource) {
    var res = new Array()
    
    
    for (var i = 0; i < dmFromSink.length; i++) {
      var serviceProp = dmFromSink[i];
      for (var t = 0; t < dmFromSource.length; t++) {
        var sourceProp = dmFromSource[t];
        if (serviceProp.conceptId == sourceProp.conceptId) {
          res.push(serviceProp)
        }
        
      }
      
    }
    console.log(res);
    return res;
  }
  
  

  changeMe(event: any) {
    //console.log(event)
    let element: HTMLInputElement = event.target;
    let id = element.id;
    let value = element.checked;

    let updateButton: HTMLInputElement;
    let disableButton: HTMLInputElement;
    let nmb = id.split("||")[0];
   // console.log("nmb: " + nmb)
   // console.log("this.lastindex: " + this.lastIndex)
   // console.log(this.lastDataMapping)
    let input: HTMLInputElement

    if (nmb == ''+this.lastIndex) {

      var isChanged = false;
      for (var p = 0; p < this.lastDataMapping.length; p++) {
        var ele = this.lastDataMapping[p]
        // console.log(this.lastIndex + "||" + ele.conceptId)
        input = document.getElementById(this.lastIndex + "||" + ele.conceptId) as HTMLInputElement;
        if (input != null) {
          if (!ele.isIn) {
            if (input.checked != false)
              isChanged = true;
          } else {
            if (input.checked != true)
              isChanged = true;

          }
        }
        if (isChanged)
          break;
        //console.log(ele.isIn)
      }
      updateButton = document.getElementById("updateButton" + this.lastIndex) as HTMLInputElement;
      disableButton = document.getElementById("disableButton" + this.lastIndex) as HTMLInputElement;

      //console.log(updateButton)

      if (isChanged) {
        disableButton.disabled = false
        updateButton.classList.add("to-update");
      } else {
        disableButton.disabled = true
        updateButton.classList.remove("to-update");
      }
    }
    //console.log(element.checked)

    //let ele: HTMLElement = document.getElementById("button"+5);
    //console.log(ele)
    //ele.click();


  }


  openDetails(ind) {

    let button: HTMLElement;
    let nmb = ind;
   // console.log("nmb: " + nmb)
   // console.log("this.lastindex: " + this.lastIndex)
   // console.log(this.lastDataMapping)
    let input: HTMLInputElement
    let div: HTMLElement
    var selector = 'show'
    var className = " " + selector + " ";
    let updateButton: HTMLInputElement;
    let disableButton: HTMLInputElement;


    if (this.lastIndex == -1) {
      this.lastIndex = nmb;
      this.lastDataMapping = this.findActiveDataMappingByConsentIndex(nmb);

    } else {
      if (nmb != this.lastIndex) {
        //reset data e chiudi
        for (var p = 0; p < this.lastDataMapping.length; p++) {
          var ele = this.lastDataMapping[p]
          console.log(this.lastIndex + "||" + ele.conceptId)
          input = document.getElementById(this.lastIndex + "||" + ele.conceptId) as HTMLInputElement;
          if (input != null) {
            if (!ele.isIn == null) {
              input.checked = true

            } else {
              input.checked = false

            }
          }
          //sconsole.log(ele.isIn)
        }




        div = document.getElementById("detailsCollapse" + this.lastIndex);
        if ((" " + div.className + " ").replace(/[\n\t]/g, " ").indexOf(" show ") > -1) {
          button = document.getElementById("button" + this.lastIndex);
          button.click();
        }


        this.lastIndex = nmb;
        this.lastDataMapping = this.findActiveDataMappingByConsentIndex(ind);

        updateButton = document.getElementById("updateButton" + this.lastIndex) as HTMLInputElement;
        disableButton = document.getElementById("disableButton" + this.lastIndex) as HTMLInputElement;

        if(disableButton != null)
          disableButton.disabled = true
        if(updateButton)
          updateButton.classList.remove("to-update");

      }

      //var className = " " + selector + " ";
      //exif ( (" " + element.className + " ").replace(/[\n\t]/g, " ").indexOf(" thatClass ") > -1 )
    }

    //this.lastIndex = ind;
    //console.log(this.lastIndex)



    /*
    if(this.tempIndex == 0){
      //vuol dire che dopo aver ricaricato la pagina dei consensi
      //è la prima volta che apro un dettaglio
      this.tempSink = this.consents[ind].sink;
      delete this.tempSink.consentStatusList;
      this.tempSource = this.consents[ind].source
      delete this.tempSource.consentStatusList;
      this.tempIndex = ind;

    }else if(this.tempIndex != ind)true{
      //vuoldire che ho cambiato details
      //ma ripristinando i dati come erano nell'interfaccia
      //usando il vecchio tmpIndex

      //la stessa cosa del caso precedente
      this.tempSink = this.consents[ind].sink;
      delete this.tempSink.consentStatusList;
      this.tempSource = this.consents[ind].source
      delete this.tempSource.consentStatusList;
      //lo setto a quello nuovo
      this.tempIndex = ind;
    }else{
      //vuol dire che non devo fare nulla
    }
*/
    //console.log(this.tempSink)
  }





}
