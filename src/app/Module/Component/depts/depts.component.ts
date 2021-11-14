import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DlistComponent } from './dlist/dlist.component';

@Component({
  selector: 'app-depts',
  templateUrl: './depts.component.html',
  styleUrls: ['./depts.component.css'],
})
export class DeptsComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}
  // tslint:disable-next-line:typedef
  openDialog() {
    const dialogRef = this.dialog.open(DlistComponent);
  }
}
