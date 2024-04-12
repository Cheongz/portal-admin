import { Routes } from '@angular/router';

const Routing: Routes = [
  {
    path: 'dashboards',
    loadChildren: () =>
      import('./dashboards/dashboards.module').then((m) => m.DashboardsModule),
  },
  {
    path: '',
    redirectTo: '/dashboards',
    pathMatch: 'full',
  },
];

export { Routing };
