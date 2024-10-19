import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SsButtonComponent } from '@shared/components/ss-button/ss-button.component';

@Component({
  selector: 'app-home-view',
  standalone: true,
  imports: [CommonModule, SsButtonComponent],
  templateUrl: './home-view.component.html',
  styleUrl: './home-view.component.scss',
})
export class HomeViewComponent {}
