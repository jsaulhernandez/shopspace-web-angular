import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SsProductItemComponent } from './ss-product-item.component';

describe('SsProductItemComponent', () => {
  let component: SsProductItemComponent;
  let fixture: ComponentFixture<SsProductItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SsProductItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SsProductItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
