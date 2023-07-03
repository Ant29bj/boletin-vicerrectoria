import { Component } from '@angular/core';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent {
  open = false;

  faClock = faClock;
  faBars = faBars;

  home = 'inicio';

  handleMenu(): void {
    this.open = !this.open;
  }
}
