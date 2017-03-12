/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TripShowComponent } from './trip-show.component';

describe('TripShowComponent', () => {
  let component: TripShowComponent;
  let fixture: ComponentFixture<TripShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TripShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TripShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
