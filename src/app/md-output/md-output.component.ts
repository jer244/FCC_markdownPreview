import { Component, Input, OnChanges } from '@angular/core';

declare var marked;

@Component({
  selector: 'md-output',
  templateUrl: './md-output.component.html',
  styleUrls: ['./md-output.component.css']
})
export class MdOutputComponent implements OnChanges {
  marked;

  parsedOutput: string;

  @Input() fromMdInput: string = "";

  constructor() { 
    this.marked=marked;
  }

  ngOnChanges(fromMdInput) {
    this.parsedOutput=this.marked(this.fromMdInput);
  }

}
