import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './login-form/login-form.component';
import { RoleCardComponent } from './role-card/role-card.component';

const routes: Routes = [
  { path: '', component: LoginFormComponent},
  { path: 'roles', component: RoleCardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
