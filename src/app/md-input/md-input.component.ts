import { Component, Input } from '@angular/core';

@Component({
  selector: 'md-input',
  templateUrl: './md-input.component.html',
  styleUrls: ['./md-input.component.css']
})
export class MdInputComponent {

  @Input() rawInput: string="";


}
