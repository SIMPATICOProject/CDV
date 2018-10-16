import {Directive, ElementRef, Output, HostListener, EventEmitter} from "@angular/core";
@Directive({    selector: '[clickOutside]'})
export class ClickOutsideDirective {   
     constructor(private _elementRef: ElementRef) {    }  
       @Output()    public clickOutside = new EventEmitter<MouseEvent>(); 
         @HostListener('select', ['$event', '$event.target'])   
          public onSelect(event: MouseEvent, targetElement: HTMLElement): void {  
              console.log(targetElement);  
                  if (!targetElement) {            return;        }   
                       const clickedInside = this._elementRef.nativeElement.contains(targetElement);   
                            if (!clickedInside) {            this.clickOutside.emit(event);        }    }}
