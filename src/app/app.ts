import {Component, computed, signal} from '@angular/core';

import { RouterOutlet } from '@angular/router';

import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

import {SidenavMenu} from './core/components/sidenav-menu/sidenav-menu';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    SidenavMenu,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  sidenavCollapsed = signal(false)
  sidenavWidth = computed(() => this.sidenavCollapsed() ? '65px': '250px')

  toggleCollapsed(){
    this.sidenavCollapsed.update(value => !value)
  }

}
