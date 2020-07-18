import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  opened = false;
  onToggle(){
    this.opened = !this.opened;
  }
  constructor() { }

  ngOnInit() {
  }

}
