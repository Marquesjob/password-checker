import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Password } from './password';

@Injectable({
  providedIn: 'root'
})
export class CheckPasswordService {

  private readonly API = 'http://localhost:3000/keys';

  constructor( private http: HttpClient ) { }

    getPassword() {
      return this.http.get<Password[]>(this.API);
    }

}
