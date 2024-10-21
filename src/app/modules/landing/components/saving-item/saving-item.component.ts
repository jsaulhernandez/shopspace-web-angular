import { CommonModule, isPlatformBrowser } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  Inject,
  PLATFORM_ID,
  ViewChild,
} from '@angular/core';

import { extractColor } from '@shared/utils/color.utils';

@Component({
  selector: 'app-saving-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './saving-item.component.html',
  styleUrl: './saving-item.component.scss',
})
export class SavingItemComponent implements AfterViewInit {
  @ViewChild('image', { static: true }) imageRef!: ElementRef<HTMLImageElement>;

  dominantColor: string | null = null;
  dominantColorText: string | null = null;

  constructor(
    @Inject(PLATFORM_ID) private platformID: Object,
    private cdr: ChangeDetectorRef
  ) {}

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformID)) {
      this.getColorFromImage();
    }
  }

  getColorFromImage() {
    const image = this.imageRef.nativeElement;
    image.crossOrigin = 'Anonymous'; // Set crossOrigin for CORS

    image.onload = () => {
      const result = extractColor(image);

      if (result.includes('var'))
        this.dominantColor = this.dominantColorText = result;
      else {
        this.dominantColor = `rgba(${result},0.3)`;
        this.dominantColorText = `rgb(${result})`;
      }

      this.cdr.detectChanges();
    };

    if (!image.complete) image.src = image.src;
    else {
      // @ts-ignore
      image.onload();
    }
  }
}
