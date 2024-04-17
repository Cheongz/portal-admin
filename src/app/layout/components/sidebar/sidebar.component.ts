import { Component, OnInit } from '@angular/core';
import { SidebarService } from './service/sidebar-service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  isOpen = false;

  constructor(private sidebarService: SidebarService) {}

  ngOnInit() {}

  toggleSidebar() {
    //this.sidebarService.toggle();

    this.isOpen = !this.isOpen;
  }
}
