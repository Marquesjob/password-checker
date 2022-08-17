import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Message } from './message';

@Injectable({
  providedIn: 'root'
})
export class SuccessService {
  private readonly url = 'http://localhost:3000/messages';

  constructor(private http: HttpClient) { }

  messages() {
    return this.http.get<Message[]>(this.url);
  }
}
