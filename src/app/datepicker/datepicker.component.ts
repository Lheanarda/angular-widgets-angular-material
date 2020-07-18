import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.css']
})
export class DatepickerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  minDate=new Date();
  maxDate=new Date(2020,6,22);

  dateFilter = date=>{
    const day= date.getDay();
    return day !== 0 && day !==6;
  }

  value:any="a";

}
