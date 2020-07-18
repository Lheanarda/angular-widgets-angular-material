import { MatSnackBar } from '@angular/material/snack-bar';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.css']
})
export class SnackbarComponent implements OnInit {

  constructor(private snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  openSnackBar(message:string,action){
    this.snackBar.open(message,action);
  }

  openSnackBar_undo(message:string,action){
    let snackBarRef= this.snackBar.open(message,action,{duration: 2000});
    snackBarRef.afterDismissed().subscribe(()=>{
      console.log('the snackbar was dismissed')
    });
    snackBarRef.onAction().subscribe(()=>{
      console.log('The snackbar option was triggered')
    })
  }

  openSnackBar_duration(message:string,action){
    this.snackBar.open(message,action,{duration: 2000});
  }





}
