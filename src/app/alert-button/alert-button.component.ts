import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'app-alert-button',
  templateUrl: './alert-button.component.html',
  styleUrls: ['./alert-button.component.css']
})
export class AlertButtonComponent implements OnInit {

  content = 'ALERT ALERT ALERT !!!';
  isVisible = true;
  severity = 404;

  constructor() { }

  toggle() {
    this.isVisible = !this.isVisible;
  }

  toggleAsync(){
    timer(500).subscribe(x => this.toggle());
  }
  ngOnInit() {
  }

}
