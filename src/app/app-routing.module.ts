import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckPasswordComponent } from './components/checkPassword/checkPassword.component';
import { FailComponent } from './components/fail/fail.component';
import { SuccessComponent } from './components/success/success.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'checkpassword'},
  { path: 'checkpassword', component: CheckPasswordComponent },
  { path: 'success', component: SuccessComponent },
  { path: 'fail', component: FailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
