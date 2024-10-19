import { Component } from '@angular/core';
import { SsButtonComponent } from '../ss-button/ss-button.component';

@Component({
  selector: 'ss-product-item',
  standalone: true,
  imports: [SsButtonComponent],
  templateUrl: './ss-product-item.component.html',
  styleUrl: './ss-product-item.component.scss',
})
export class SsProductItemComponent {}
