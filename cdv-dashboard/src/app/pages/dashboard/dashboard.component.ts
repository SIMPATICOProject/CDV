import {Component} from '@angular/core';


@Component({
  selector: 'dashboard',
  styleUrls: ['./dashboard.scss'],
  templateUrl: './dashboard.html'
})
export class Dashboard {

  constructor() { 
  }
  
  	public open_cflow(){
	
	  var base = window.location.href;
	  var arr = base.split("/");
	 
      var url = arr[0]+"/control_flow/index.html";
	  				
      var win = window.open(url,'AuthPopup',  'directories=no,titlebar=no,toolbar=no,location=no,width=1200,height=800,resizable=true,menubar=no,scrollbars=true,status=true');
     
      	
	
	}

}
