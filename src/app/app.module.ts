import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SuccessComponent } from './components/success/success.component';
import { FailComponent } from './components/fail/fail.component';
import { CheckPasswordComponent } from './components/checkPassword/checkPassword.component';
import { AuthService } from './components/checkPassword/auth.service';


@NgModule({
  declarations: [
    AppComponent,
    SuccessComponent,
    FailComponent,
    CheckPasswordComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})

export class AppModule { }
