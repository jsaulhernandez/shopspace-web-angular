import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SsButtonComponent } from './ss-button.component';

describe('SsButtonComponent', () => {
  let component: SsButtonComponent;
  let fixture: ComponentFixture<SsButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SsButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SsButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
