import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwiperProductsComponent } from './swiper-products.component';

describe('SwiperProductsComponent', () => {
  let component: SwiperProductsComponent;
  let fixture: ComponentFixture<SwiperProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SwiperProductsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SwiperProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
