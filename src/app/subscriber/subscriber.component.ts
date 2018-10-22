import { Component, OnInit } from '@angular/core';
import { Ng2MessageQueue } from 'ng2-message-queue';

@Component({
  selector: 'app-subscriber',
  templateUrl: './subscriber.component.html',
  styleUrls: ['./subscriber.component.css']
})
export class SubscriberComponent implements OnInit {
  message: any;

  constructor(public messageService: Ng2MessageQueue) {}

  ngOnInit() {
  	this.messageService.subscribe('myQueue', payload => this.handleMessage(payload));
  }

  handleMessage(payload: any) {
  	this.message = payload;
  }
}
