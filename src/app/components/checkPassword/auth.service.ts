import { Router } from '@angular/router';
import { Injectable, EventEmitter } from '@angular/core';


import { Password } from './password'


@Injectable()
export class AuthService {

  private checked: boolean = false;

  // mostrarMenuEmitter = new EventEmitter<boolean>();

  constructor(private router: Router) { }

  auth(password: Password){

    if (password.key == '123') {

      this.checked = true;

      // this.mostrarMenuEmitter.emit(true);

      this.router.navigate(['/']);

    } else {
      this.checked = false;

      // this.mostrarMenuEmitter.emit(false);
    }
  }

  isChecked(){
    return this.checked;
  }

}