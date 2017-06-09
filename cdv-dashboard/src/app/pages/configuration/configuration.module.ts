import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { routing } from './configuration.routing';
import { NgaModule } from '../../theme/nga.module';
import {ConfigurationComponent} from "./configuration.component";
@NgModule({
  imports: [
    CommonModule,
    routing,
	NgaModule
  ],
  declarations: [
	ConfigurationComponent
  ],
  providers: [
 
   
  ]
})
export class configurationModule {}