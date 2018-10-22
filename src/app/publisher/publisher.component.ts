import { Component, OnInit } from '@angular/core';

import { Observable, Subject } from 'rxjs';

import { Ng2MessageQueue } from 'ng2-message-queue';

@Component({
  selector: 'app-publisher',
  templateUrl: './publisher.component.html',
  styleUrls: [ './publisher.component.css' ]
})
export class PublisherComponent implements OnInit {
  private searchTerms: string;

  constructor(private messageService: Ng2MessageQueue) {
    messageService.createQueue('myQueue');
  }

  // Push a search term into the queue.
  search(term: string): void {
    this.messageService.publish('myQueue', term);
  }

  ngOnInit() {
    
  }
}
