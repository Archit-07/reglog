import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UlistComponent } from './ulist/ulist.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}
  // tslint:disable-next-line:typedef
  openDialog() {
    const dialogRef = this.dialog.open(UlistComponent);
  }
}
