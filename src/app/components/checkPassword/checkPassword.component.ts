import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { Password } from './password';

@Component({
  selector: 'app-check-password',
  templateUrl: './checkPassword.component.html',
  styleUrls: ['./checkPassword.component.scss']
})

export class CheckPasswordComponent implements OnInit {

  password: Password = new Password();

  show: boolean = false;

  constructor(private authService: AuthService) { }

  ngOnInit() {}

  showPass() {
    this.show = !this.show; // Altera o valor inicial para ser diferente dele mesmo.(bolean)
  }

  checkPass() { 
    this.authService.check(this.password); // Verifica a senha digitada pelo o usuário.
  }
  
}
