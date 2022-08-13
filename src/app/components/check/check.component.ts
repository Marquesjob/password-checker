import { Component, OnInit } from '@angular/core';
import { TesteModel } from './teste.model';

@Component({
  selector: 'app-check',
  templateUrl: './check.component.html',
  styleUrls: ['./check.component.scss']
})
export class CheckComponent implements OnInit {
  show: boolean = false;
  lowUpperCase: boolean = false;
  number: boolean = false;
  specialChar: boolean = false;
  eightChar: boolean = false;
  passwordStrength: boolean = false;
  testano:any;

  constructor() { }

  ngOnInit(): void {
  }

  showPass() {
    let result = document.getElementById("result");
    this.show = !this.show;
    this.testano = new TesteModel({
      name: 'name',
      pass: 'senha',
      tipo: 0
    });
    console.log(this.testano);
    
  }

  checkStrength(e: KeyboardEvent) {
    let password = (e.target as HTMLInputElement).value;
    let strength = 0;


    console.log(password);


    //If password contains both lower and uppercase characters
    if (password.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)) {
      strength += 1;
      console.log('entrou no if do lowUppercase');
      this.lowUpperCase = true;
    } else {
      console.log('entrou no else do lowUppercase');
      this.lowUpperCase = false;
    }
    //If it has numbers and characters
    if (password.match(/([0-9])/)) {
      strength += 1;
      console.log('entrou no if do number');
      this.number = true;
    } else {
      console.log('entrou no else do number');
      this.number = false;
    }
    //If it has one special character
    if (password.match(/([!,%,&,@,#,$,^,*,?,_,~])/)) {
      strength += 1;
      console.log('entrou no if do specialChar');
      this.specialChar = true;
    } else {
      console.log('entrou no else do specialChar');
      this.specialChar = false;
    }
    //If password is greater than 7
    if (password.length > 7) {
      strength += 1;
      console.log('entrou no if do eightChar');
      this.eightChar = true;
    } else {
      console.log('entrou no else do eightChar');
      this.eightChar = false;
    }

    // If value is less than 2
    if (strength < 2) {
      console.log('entrou no if do passwordStrength');

      // passwordStrength.classList.remove('progress-bar-warning');
      // passwordStrength.classList.remove('progress-bar-success');
      // passwordStrength.classList.add('progress-bar-danger');
      // passwordStrength.style = 'width: 10%';
    } else if (strength == 3) {
      console.log('entrou no else if do passwordStrength');

      // passwordStrength.classList.remove('progress-bar-success');
      // passwordStrength.classList.remove('progress-bar-danger');
      // passwordStrength.classList.add('progress-bar-warning');
      // passwordStrength.style = 'width: 60%';
    } else if (strength == 4) {
      console.log('entrou no else if do passwordStrength');

      // passwordStrength.classList.remove('progress-bar-warning');
      // passwordStrength.classList.remove('progress-bar-danger');
      // passwordStrength.classList.add('progress-bar-success');
      // passwordStrength.style = 'width: 100%';
    }
  }
}
