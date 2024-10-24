import { Component } from '@angular/core';
import { SsBreadcrumbComponent } from '../../../../shared/components/ss-breadcrumb/ss-breadcrumb.component';

@Component({
  selector: 'app-detail-view',
  standalone: true,
  imports: [SsBreadcrumbComponent],
  templateUrl: './detail-view.component.html',
  styleUrl: './detail-view.component.scss',
})
export class DetailViewComponent {}
