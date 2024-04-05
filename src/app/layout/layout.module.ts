import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule, Routes } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { TopHeaderComponent } from './components/top-header/top-header.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
  },
];

@NgModule({
  declarations: [
    LayoutComponent,
    SidebarComponent,
    FooterComponent,
    HeaderComponent,
    TopHeaderComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatToolbarModule,
    MatDividerModule,
    MatIconModule,
    MatButtonModule,
    MatBadgeModule,
  ],
})
export class LayoutModule {}
