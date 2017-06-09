import { Component, Input, OnInit } from '@angular/core';

import { ViewCell } from 'ng2-smart-table';

@Component({
  template: `
    <a href={{renderValue}} target="_blank">{{renderValue}}<a>
  `,
})
export class LinkRenderComponent implements ViewCell, OnInit {

  renderValue;

  @Input() value;
  

  ngOnInit() {
    this.renderValue = this.value.serviceUri;
  }

}