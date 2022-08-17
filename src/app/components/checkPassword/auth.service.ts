import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

import { Password } from './password'


@Injectable()

export class AuthService {

  private authenticationStatus: boolean = false;
  private key: string = '123';

  constructor(private router: Router) { }

  check(password: Password) {

    if (password.key == null) {
        this.authenticationStatus = false;
        window.alert('Este campo não pode ficar vazio')
        return;
    } else {
      if (password.key == this.key) {
        this.authenticationStatus = true;
        this.router.navigate(['/success']); // redireciono caso for correspondente
      } else {
        this.authenticationStatus = true;
        this.router.navigate(['/fail']); // redireciono caso for diferente
      }
    }
  }

  checkAuth() {
    return this.authenticationStatus;
  }

}
  