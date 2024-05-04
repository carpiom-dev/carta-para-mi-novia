import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-carta',
  templateUrl: './carta.component.html',
  styleUrls: ['./carta.component.css'],
  animations: [
    trigger('slideIn', [
      state('void', style({ opacity: 0, transform: 'scale(0.5)' })),
      transition(':enter', [
        animate('0.5s ease-out', style({ opacity: 1, transform: 'scale(1)' }))
      ]),
    ]),
  ],
})
export class CartaComponent {
  isVisible = false;
}
