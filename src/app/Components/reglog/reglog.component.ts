import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reglog',
  templateUrl: './reglog.component.html',
  styleUrls: ['./reglog.component.css'],
})
export class ReglogComponent {
  data = [];
  title = 'reglog';
  email = '';
  pass = '';
  name = '';
  remail = '';
  rpass = '';
  localItem = '';
  constructor(private snackBar: MatSnackBar, private router: Router) {
    this.localItem = localStorage.getItem('data');
    if (this.localItem == null) {
      this.data = [];
    } else {
      this.data = JSON.parse(this.localItem);
    }
  }
  // tslint:disable-next-line:typedef
  login(): void {
    if (this.email === 'admin' && this.pass === 'admin') {
      this.snackBar.open('Login as admin', '', { duration: 1000 });
    } else {
      const user = this.data.find(({ remail }) => {
        return remail === this.email;
      });
      if (user && user.remail === this.email && user.rpass === this.pass) {
        this.snackBar.open(`Login Successful as ${user.name}`, '', {
          duration: 1000,
        });
        this.router.navigate(['success']);
      } else {
        this.snackBar.open('Login error please check password/email id', '', {
          duration: 1000,
        });
      }
    }
    this.email = '';
    this.pass = '';
  }

  // tslint:disable-next-line:typedef
  register(): void {
    const val = {
      name: this.name,
      remail: this.remail,
      rpass: this.rpass,
    };
    const userExist = this.data.find(({ remail }) => {
      return remail === this.remail;
    });

    if (!userExist) {
      this.data.push(val);
      localStorage.setItem('data', JSON.stringify(this.data));
      this.snackBar.open('Register Successful', '', { duration: 1000 });
    } else {
      this.snackBar.open('Email id already registered', '', { duration: 1000 });
    }
    this.name = '';
    this.remail = '';
    this.rpass = '';
  }
}
