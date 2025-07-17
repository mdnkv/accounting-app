import {Component, input, signal} from '@angular/core';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {SIDENAV_MENU_ITEMS} from '../../models/core.models';

@Component({
  selector: 'app-sidenav-menu',
  imports: [
    MatListModule,
    MatIconModule
  ],
  templateUrl: './sidenav-menu.html',
  styleUrl: './sidenav-menu.css'
})
export class SidenavMenu {

  collapsed = input.required<boolean>()
  menuItems = signal(SIDENAV_MENU_ITEMS)

}
