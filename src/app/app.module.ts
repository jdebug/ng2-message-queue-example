import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';

import { AppComponent }         from './app.component';
import { PublisherComponent }  from './publisher/publisher.component';
import { SubscriberComponent }    from './subscriber/subscriber.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    SubscriberComponent,
    PublisherComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
