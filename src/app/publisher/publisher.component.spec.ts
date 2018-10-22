import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { PublisherComponent } from './publisher.component';


describe('PublisherComponent', () => {
  let component: PublisherComponent;
  let fixture: ComponentFixture<Publisher>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublisherComponent ],
      imports: [RouterTestingModule.withRoutes([]), HttpClientTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublisherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
