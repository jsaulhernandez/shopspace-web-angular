import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SsButtonComponent } from '@shared/components/ss-button/ss-button.component';
import { CategoryItemComponent } from '@landing/components/category-item/category-item.component';
import { BrandItemComponent } from '@landing/components/brand-item/brand-item.component';
import { SsProductItemComponent } from '@shared/components/ss-product-item/ss-product-item.component';
import { SwiperProductsComponent } from '@landing/components/swiper-products/swiper-products.component';
import { SavingItemComponent } from '../../components/saving-item/saving-item.component';
import { ServiceItemComponent } from '../../components/service-item/service-item.component';

@Component({
  selector: 'app-home-view',
  standalone: true,
  imports: [
    CommonModule,
    SsButtonComponent,
    SsProductItemComponent,
    CategoryItemComponent,
    BrandItemComponent,
    SwiperProductsComponent,
    SavingItemComponent,
    ServiceItemComponent,
  ],
  templateUrl: './home-view.component.html',
  styleUrl: './home-view.component.scss',
})
export class HomeViewComponent {}
