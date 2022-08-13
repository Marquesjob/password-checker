import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FailComponent } from './components/fail/fail.component';
import { CheckComponent } from './components/check/check.component';
import { SuccessComponent } from './components/success/success.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'check'},
  { path: 'check', component: CheckComponent },
  { path: 'success', component: SuccessComponent },
  { path: 'fail', component: FailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
