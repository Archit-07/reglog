import { Component, OnInit } from '@angular/core';
import { Sort } from '@angular/material/sort';

export interface Dept {
  uid: number;
  name: string;
  email: string;
  dname: string;
  uaddress: string;
}

@Component({
  selector: 'app-ulist',
  templateUrl: './ulist.component.html',
  styleUrls: ['./ulist.component.css'],
})
export class UlistComponent {
  dept: Dept[] = [
    {
      uid: 1,
      name: 'abc',
      email: 'abc@gmail.com',
      dname: 'Research',
      uaddress: 'abc-1, backer street',
    },
    {
      uid: 2,
      name: 'pqr',
      email: 'pqr@gmail.com',
      dname: 'Development',
      uaddress: 'pqr-1, backer street',
    },
    {
      uid: 3,
      name: 'xyz',
      email: 'xyz@gmail.com',
      dname: 'QA',
      uaddress: 'xyz-1, backer street',
    },
  ];

  sortedData: Dept[];

  constructor() {
    this.sortedData = this.dept.slice();
  }

  // tslint:disable-next-line:typedef
  sortData(sort: Sort) {
    const data = this.dept.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedData = data;
      return;
    }

    this.sortedData = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'uid':
          return compare(a.uid, b.uid, isAsc);
        case 'name':
          return compare(a.name, b.name, isAsc);
        case 'email':
          return compare(a.email, b.email, isAsc);
        case 'dname':
          return compare(a.dname, b.dname, isAsc);
        case 'uaddress':
          return compare(a.uaddress, b.uaddress, isAsc);
        default:
          return 0;
      }
    });
  }
}

// tslint:disable-next-line:typedef
function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
