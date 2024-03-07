import { Component } from '@angular/core';
import {DashboardHeaderComponent} from "../../share/dashboard-header/dashboard-header.component";
import {DashboardNavComponent} from "../../share/dashboard-nav/dashboard-nav.component";
import {DashboardFooterComponent} from "../../share/dashboard-footer/dashboard-footer.component";
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    DashboardHeaderComponent,
    DashboardNavComponent,
    DashboardFooterComponent,
    RouterOutlet
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}
