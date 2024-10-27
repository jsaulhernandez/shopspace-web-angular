import {
  AfterViewInit,
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  Inject,
  Input,
  OnInit,
  PLATFORM_ID,
  signal,
} from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { SwiperOptions } from 'swiper/types';
import { SwiperContainer } from 'swiper/element';

import { SsProductItemComponent } from '@shared/components/ss-product-item/ss-product-item.component';

@Component({
  selector: 'app-swiper-products',
  standalone: true,
  imports: [CommonModule, SsProductItemComponent],
  templateUrl: './swiper-products.component.html',
  styleUrl: './swiper-products.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SwiperProductsComponent implements OnInit, AfterViewInit {
  @Input() identifier: string = '1';
  swiperElement = signal<SwiperContainer | null>(null);

  constructor(@Inject(PLATFORM_ID) private platformID: Object) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformID)) {
      const swiperElementConstructor = document.querySelector(
        `#swiper-container-${this.identifier}`
      );
      const config: SwiperOptions = {
        slidesPerView: 1,
        spaceBetween: 24,
        grabCursor: true,
        scrollbar: { draggable: true },
        loop: false,
        breakpoints: {
          576: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
        },
      };

      Object.assign(swiperElementConstructor!, config);
      this.swiperElement.set(swiperElementConstructor as SwiperContainer);
      this.swiperElement()?.initialize();
    }
  }

  get includeMarginBottomToScroll() {
    return false;
  }
}
