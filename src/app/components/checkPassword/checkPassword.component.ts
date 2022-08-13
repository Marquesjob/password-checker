import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { Password } from './password';

@Component({
  selector: 'app-check-password',
  templateUrl: './checkPassword.component.html',
  styleUrls: ['./checkPassword.component.scss']
})

export class CheckPasswordComponent implements OnInit {

  public password: Password = new Password();

  show: boolean = false;

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  showPass() {
    this.show = !this.show;
  }

  checkPass() {
    console.log(this.password.key)
  }

}
