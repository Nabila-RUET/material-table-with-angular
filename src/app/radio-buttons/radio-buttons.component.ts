import { Component, OnInit,EventEmitter ,Output} from '@angular/core';
import { MatRadioChange } from '@angular/material/radio';

@Component({
  selector: 'app-radio-buttons',
  template: `<div class = "container">
             <label  class="example-margin">Users</label>
             <span class = "buttons">
             <mat-radio-group  aria-label="Select an option" class = "buttons">
             <mat-radio-button  (change)="onChangeRadio($event)" value="Private"> Private </mat-radio-button>
             <mat-radio-button  (change)="onChangeRadio($event)" value="Public"> Public </mat-radio-button>
             </mat-radio-group>
             </span>
             </div>
             `,
  styles: [`.buttons{
    margin: 10px 10px 10px 10px;
  }
  .mat-radio-button ~ .mat-radio-button {
    margin-left: 16px;
  }
  .example-margin {
    margin: 0 10px;
    font-weight: bold;
    color: blue;
  }
  .container{
    margin-top: 20px;
    margin-bottom: 50px;
  }
  `]
})

export class RadioButtonsComponent implements OnInit {
  @Output()
  change: EventEmitter<MatRadioChange> 
  constructor() { }

  ngOnInit() {
  }
  onChangeRadio(mrChange: MatRadioChange) {
    console.log(mrChange.value,mrChange.source.checked );
 } 

}
