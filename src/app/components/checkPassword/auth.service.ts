import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

import { Password } from './password'


@Injectable()

export class AuthService {

  constructor(private router: Router) { }

  check(password: Password) { // recebo a senha digitada
    if (password.key == '123') { // verifico
      this.router.navigate(['/success']); // redireciono caso for correspondente
    } else {
      this.router.navigate(['/fail']); // redireciono caso for diferente
    }
  }
  
}