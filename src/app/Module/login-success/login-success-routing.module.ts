import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/Guard/auth.guard';
import { DepartmentListsComponent } from '../Component/department-lists/department-lists.component';
import { DeptsComponent } from '../Component/depts/depts.component';
import { UsersComponent } from '../Component/users/users.component';

const routes: Routes = [
  {
    path: '',
    component: DepartmentListsComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'depts',
        component: DeptsComponent,
      },
      {
        path: 'users',
        component: UsersComponent,
      },
      { path: '', redirectTo: '/success/depts', pathMatch: 'full' },
    ],
  },
  {
    path: '',
    redirectTo: '/success/depts',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginSuccessRoutingModule {}
