import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendboxComponent } from './sendbox.component';

describe('SendboxComponent', () => {
  let component: SendboxComponent;
  let fixture: ComponentFixture<SendboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SendboxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SendboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
