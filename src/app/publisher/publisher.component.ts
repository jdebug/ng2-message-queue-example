import { Component, OnInit } from '@angular/core';

import { Observable, Subject } from 'rxjs';

import { NgxMessageQueue } from 'ngx-message-queue';

@Component({
  selector: 'app-publisher',
  templateUrl: './publisher.component.html',
  styleUrls: [ './publisher.component.css' ]
})
export class PublisherComponent implements OnInit {

  constructor(private messageService: NgxMessageQueue) {
    messageService.createQueue('myQueue');
  }

  // Push a search message into the queue.
  postMessage(message: string, headers: any): void {
    this.messageService.publish('myQueue', JSON.parse(headers) , message);
  }

  ngOnInit() {

  }
}
