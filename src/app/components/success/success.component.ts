import { Component, OnInit } from '@angular/core';
import { Message } from './message'
import { SuccessService } from './success.service';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.scss']
})
export class SuccessComponent implements OnInit {

  messages: Message[];

  constructor(private service: SuccessService) { }

  ngOnInit(): void {

    this.service.messages()
      .subscribe(res => this.messages = res)
  
  }

}
