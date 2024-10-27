import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SsCustomQuantityComponent } from './ss-custom-quantity.component';

describe('SsCustomQuantityComponent', () => {
  let component: SsCustomQuantityComponent;
  let fixture: ComponentFixture<SsCustomQuantityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SsCustomQuantityComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SsCustomQuantityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
