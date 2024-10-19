import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SsButtonComponent } from '@shared/components/ss-button/ss-button.component';
import { CategoryItemComponent } from '@landing/components/category-item/category-item.component';
import { BrandItemComponent } from '@landing/components/brand-item/brand-item.component';
import { SsProductItemComponent } from '../../../../shared/components/ss-product-item/ss-product-item.component';

@Component({
  selector: 'app-home-view',
  standalone: true,
  imports: [
    CommonModule,
    SsButtonComponent,
    CategoryItemComponent,
    BrandItemComponent,
    SsProductItemComponent,
  ],
  templateUrl: './home-view.component.html',
  styleUrl: './home-view.component.scss',
})
export class HomeViewComponent {}
