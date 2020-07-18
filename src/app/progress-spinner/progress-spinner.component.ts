import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-spinner',
  templateUrl: './progress-spinner.component.html',
  styleUrls: ['./progress-spinner.component.css']
})
export class ProgressSpinnerComponent implements OnInit {

  val = 66;
  onSpin = false;

  onControlSpin(){
    this.onSpin = !this.onSpin 
  }


  constructor() { }

  ngOnInit() {
  }

}
