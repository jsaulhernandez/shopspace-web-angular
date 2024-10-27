import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  ButtonMode,
  FontFamily,
  IconPosition,
} from '@shared/constants/shared.constants';

@Component({
  selector: 'ss-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ss-button.component.html',
  styleUrl: './ss-button.component.scss',
})
export class SsButtonComponent implements OnInit {
  @Input() disabled: boolean = false;
  @Input() mode: ButtonMode = 'primary';
  @Input() fontFamily: FontFamily = 'semi-bold';
  @Input() icon?: string;
  @Input() iconPosition: IconPosition = 'right';
  @Input() dimensionIcon: number = 22;
  @Input() type: string = 'button';
  @Input() isActive: boolean = false;

  fontWeight: string = '';

  ngOnInit(): void {
    this.getFontWeight();
  }

  get isLeftIcon() {
    return this.iconPosition === 'left' && this.icon;
  }

  get isRightIcon() {
    return this.iconPosition === 'right' && this.icon;
  }

  get isPrimary() {
    return this.mode === 'primary';
  }

  get isSecondary() {
    return this.mode === 'secondary';
  }

  get isStatic() {
    return this.mode === 'static';
  }

  get isStaticActive() {
    return this.mode === 'static' && this.isActive;
  }

  get isDark() {
    return this.mode === 'dark';
  }

  get isLight() {
    return this.mode === 'light';
  }

  getFontWeight() {
    switch (this.fontFamily) {
      case 'bold':
        this.fontWeight = '700';
        break;
      case 'semi-bold':
        this.fontWeight = '600';
        break;
      case 'medium':
        this.fontWeight = '500';
        break;
      default:
        this.fontWeight = 'normal';
        break;
    }
  }
}
