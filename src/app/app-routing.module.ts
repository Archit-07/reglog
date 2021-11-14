import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReglogComponent } from './Components/reglog/reglog.component';

const routes: Routes = [
  {
    path: 'reglog',
    component: ReglogComponent,
  },
  {
    path: '',
    redirectTo: 'reglog',
    pathMatch: 'full',
  },
  {
    path: 'success',
    loadChildren: () => {
      return import('./Module/login-success/login-success.module').then(
        (comp) => {
          return comp.LoginSuccessModule;
        }
      );
    },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
