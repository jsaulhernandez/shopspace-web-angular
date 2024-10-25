import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

import { HomeViewComponent } from '@landing/views/home-view/home-view.component';
import { DetailViewComponent } from '@landing/views/detail-view/detail-view.component';
import { FaqViewComponent } from '@landing/views/faq-view/faq-view.component';

export const routes: Routes = [
  // {
  //   path: '**',
  //   redirectTo: 'shop-space',
  //   pathMatch: 'full',
  // },
  {
    path: '',
    redirectTo: 'shop-space/home',
    pathMatch: 'full',
  },
  {
    path: 'shop-space',
    component: LayoutComponent,
    children: [
      {
        path: 'home',
        component: HomeViewComponent,
      },
      {
        path: 'product-detail/:product',
        component: DetailViewComponent,
      },
      {
        path: 'faq',
        component: FaqViewComponent,
      },
    ],
  },
];
