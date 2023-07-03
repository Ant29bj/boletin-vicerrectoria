import { Component, Input } from '@angular/core';

@Component({
  selector: 'mLink',
  templateUrl: './mobile-link.component.html',
  styleUrls: ['./mobile-link.component.css'],
})
export class MobileLinkComponent {
  @Input() label: string = '';
  @Input() route: string = '';

  constructor() {}

  ngOnInit() {
    console.log(this.label);
  }
}
