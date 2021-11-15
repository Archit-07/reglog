import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSortModule } from '@angular/material/sort';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReglogComponent } from './Components/reglog/reglog.component';
import { DepartmentListsComponent } from './Module/Component/department-lists/department-lists.component';
import { HeaderComponent } from './Module/Component/header/header.component';
import { UsersComponent } from './Module/Component/users/users.component';
import { DeptsComponent } from './Module/Component/depts/depts.component';
import { DlistComponent } from './Module/Component/depts/dlist/dlist.component';
import { UlistComponent } from './Module/Component/users/ulist/ulist.component';

@NgModule({
  declarations: [
    AppComponent,
    ReglogComponent,
    DepartmentListsComponent,
    HeaderComponent,
    UsersComponent,
    DeptsComponent,
    DlistComponent,
    UlistComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatTabsModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    MatSnackBarModule,
    MatDialogModule,
    MatSortModule,
    Ng2SearchPipeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
