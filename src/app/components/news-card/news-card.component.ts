import { Component, Input } from '@angular/core';
import { faClock } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.css'],
})
export class NewsCardComponent {
  faClock = faClock;

  @Input() foto = '../../../assets/images/img-not-found.png';
  @Input() fecha = new Date().toLocaleDateString();
  @Input() titulo = 'undefined';
  @Input() sinopsis = '';
}
