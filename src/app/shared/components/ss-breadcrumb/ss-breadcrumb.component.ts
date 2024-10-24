import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { IBreadCrumb } from '@shared/interfaces/breadcrumb.interface';

@Component({
  selector: 'ss-breadcrumb',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ss-breadcrumb.component.html',
  styleUrl: './ss-breadcrumb.component.scss',
})
export class SsBreadcrumbComponent {
  breadcrumbs: IBreadCrumb[] = [
    {
      label: 'Electronics',
    },
    {
      label: 'Audio',
    },
    {
      label: 'Headphones',
    },
    {
      label: 'Shop Headphones by type',
    },
    {
      label: 'airpods-max',
    },
  ];
}
