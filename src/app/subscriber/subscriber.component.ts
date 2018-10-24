import { Component, OnInit, Input } from '@angular/core';
import { Ng2MessageQueue } from 'ng2-message-queue';

@Component({
  selector: 'app-subscriber',
  templateUrl: './subscriber.component.html',
  styleUrls: ['./subscriber.component.css']
})
export class SubscriberComponent implements OnInit {
  message1: any;
  message2: any;
  message3: any;
  
  @Input() filter1: string = 'age<=5 & gender=M';
  @Input() filter2: string = 'age=13';
  @Input() filter3: string = 'age=25 & gender=F';

  subscriberId1: string;
  subscriberId2: string;
  subscriberId3: string;

  constructor(public messageService: Ng2MessageQueue) {}

  ngOnInit() {
  	this.subscriberId1 = this.messageService.subscribe('myQueue', this.filter1, (headers, payload) => this.handleMessage1(headers, payload));
  	this.subscriberId2 = this.messageService.subscribe('myQueue', this.filter2, (headers, payload) => this.handleMessage2(headers, payload));
  	this.subscriberId3 = this.messageService.subscribe('myQueue', this.filter3, (headers, payload) => this.handleMessage3(headers, payload));
  }

  subscribe1(filter1: string) {
  	// unsubscribe previous subscription
  	this.messageService.unsubscribe(this.subscriberId1);

  	this.subscriberId1 = this.messageService.subscribe('myQueue', filter1, (headers, payload) => this.handleMessage1(headers, payload));
  }

  subscribe2(filter2: string) {
  	// unsubscribe previous subscription
  	this.messageService.unsubscribe(this.subscriberId2);

  	this.subscriberId2 = this.messageService.subscribe('myQueue', filter2, (headers, payload) => this.handleMessage2(headers, payload));
  }

  subscribe3(filter3: string) {
  	// unsubscribe previous subscription
  	this.messageService.unsubscribe(this.subscriberId3);

  	this.subscriberId3 = this.messageService.subscribe('myQueue', filter3, (headers, payload) => this.handleMessage3(headers, payload));
  }

  handleMessage1(headers, payload: any) {
  	this.message1 = payload;
  }

  handleMessage2(headers, payload: any) {
  	this.message2 = payload;
  }

  handleMessage3(headers, payload: any) {
  	this.message3 = payload;
  }

}
