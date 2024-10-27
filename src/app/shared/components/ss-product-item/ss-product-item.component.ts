import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { SsButtonComponent } from '../ss-button/ss-button.component';

import { ShopSpaceRoutes } from '@shared/constants/routes.constants';

@Component({
  selector: 'ss-product-item',
  standalone: true,
  imports: [SsButtonComponent],
  templateUrl: './ss-product-item.component.html',
  styleUrl: './ss-product-item.component.scss',
})
export class SsProductItemComponent {
  constructor(private router: Router) {}

  onGoDetail() {
    this.router.navigate([ShopSpaceRoutes.PRODUCT_DETAIL.route, 'airpods-max']);
  }
}
