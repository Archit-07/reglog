import { Component, OnInit } from '@angular/core';
import { Sort } from '@angular/material/sort';

export interface Dept {
  did: number;
  dname: string;
  drole: string;
}

@Component({
  selector: 'app-dlist',
  templateUrl: './dlist.component.html',
  styleUrls: ['./dlist.component.css'],
})
export class DlistComponent {
  dept: Dept[] = [
    { did: 123, dname: 'Research', drole: 'Engineer' },
    { did: 124, dname: 'Research', drole: 'HR' },
    { did: 125, dname: 'Research', drole: 'Developer' },
  ];

  sortedData: Dept[];
  // tslint:disable-next-line:ban-types
  search: String = '';

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
        case 'did':
          return compare(a.did, b.did, isAsc);
        case 'dname':
          return compare(a.dname, b.dname, isAsc);
        case 'drole':
          return compare(a.drole, b.drole, isAsc);
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
