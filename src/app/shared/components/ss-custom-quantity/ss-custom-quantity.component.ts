import { Component } from '@angular/core';

@Component({
  selector: 'ss-custom-quantity',
  standalone: true,
  imports: [],
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
}
