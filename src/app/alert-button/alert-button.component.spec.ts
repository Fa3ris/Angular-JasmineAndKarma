import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { AlertButtonComponent } from './alert-button.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('AlertButtonComponent', () => {
  let component: AlertButtonComponent;
  let fixture: ComponentFixture<AlertButtonComponent>;
  let de: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlertButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    de = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a message containing `ALERT`', () => {
    expect(component.content).toContain('ALERT');
  });

  it('should have a message being exactly `ALERT ALERT ALERT !!!`', () => {
    expect(component.content).toBe('ALERT ALERT ALERT !!!');
  });

  it('should have a severity greater than 200', () => {
    expect(component.severity).toBeGreaterThan(200);
  });

  it('should have an H1 tag with content `Alert Button`', () => {
    expect(de.query(By.css('h1')).nativeElement.innerText).toBe('Alert Button');
  });

  it('should toggle the isVisible boolean', () => {
    expect(component.isVisible).toBeTruthy();
    component.toggle();
    expect(component.isVisible).toBeFalsy();
  });

  it('should toggle the isVisible boolean asynchronously', fakeAsync(() => {
    expect(component.isVisible).toBeTruthy();
    component.toggleAsync();
    tick(500); // wait for the component to actually toggle
    expect(component.isVisible).toBeFalsy();
  }));

});
