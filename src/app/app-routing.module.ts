import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FailComponent } from './components/fail/fail.component';
import { LoginComponent } from './components/login/login.component';
import { SuccessComponent } from './components/success/success.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'success', component: SuccessComponent },
  { path: 'fail', component: FailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
