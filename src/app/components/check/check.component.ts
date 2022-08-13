import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-check',
  templateUrl: './check.component.html',
  styleUrls: ['./check.component.scss']
})
export class CheckComponent implements OnInit {
  show:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  showPass() {
    this.show = !this.show;
  }
}
