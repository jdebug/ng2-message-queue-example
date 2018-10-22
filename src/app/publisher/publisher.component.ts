import { Component, OnInit } from '@angular/core';

import { Observable, Subject } from 'rxjs';

import {
   debounceTime, distinctUntilChanged, switchMap
 } from 'rxjs/operators';

import { Ng2MessageQueue } from 'ng2-message-queue';


@Component({
  selector: 'app-publisher',
  templateUrl: './publisher.component.html',
  styleUrls: [ './publisher.component.css' ]
})
export class PublisherComponent implements OnInit {
  private searchTerms = new Subject<string>();

  constructor(private messageService: Ng2MessageQueue) {
    messageService.createQueue('myQueue');
  }

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);

    this.messageService.publish('myQueue', term);
  }

  ngOnInit(): void {
    // this.heroes$ = this.searchTerms.pipe(
    //   // wait 300ms after each keystroke before considering the term
    //   debounceTime(300),

    //   // ignore new term if same as previous term
    //   distinctUntilChanged(),

    //   // switch to new search observable each time the term changes
    //   // switchMap((term: string) => this.heroService.searchHeroes(term)),
    // );
  }
}
