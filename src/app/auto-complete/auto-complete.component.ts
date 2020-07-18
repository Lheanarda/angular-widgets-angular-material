import { ReactiveFormsModule, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs'
import { map, startWith} from 'rxjs/operators'

@Component({
  selector: 'app-auto-complete',
  templateUrl: './auto-complete.component.html',
  styleUrls: ['./auto-complete.component.css']
})
export class AutoCompleteComponent implements OnInit {
  options:string[]=['Angular','React','Vue'];
  objectOptions=[
    {name:'Angular Material', duration:5,owner: 'Alex'},
    {name:'ReactUI', duration: 9, owner: 'Nathan'},
    {name:'VueUI', duration : 2, owner: 'Nico'}
  ];
  
  myControl = new FormControl();
  filteredOptions: Observable<string[]>;

  ngOnInit(){
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value=>this._filter(value))
    )
  }

  private _filter(value:string):string[]{
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.toLowerCase().includes(filterValue))
  }

  displayFn(subject){
    return subject? subject.owner : undefined
  }

}
