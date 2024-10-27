import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'ss-custom-quantity',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ss-custom-quantity.component.html',
  styleUrl: './ss-custom-quantity.component.scss',
})
export class SsCustomQuantityComponent {
  selectedQuantity = 1;

  onIncrement() {
    this.selectedQuantity++;
  }

  onDecrement() {
    if (this.selectedQuantity === 1) return;

    this.selectedQuantity--;
  }

  get isQuantityEqualOne() {
    return this.selectedQuantity === 1;
  }

  get isQuantityEqualMaxAvailable() {
    return this.selectedQuantity === 5;
  }
}
