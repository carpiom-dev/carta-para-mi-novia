import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  cartaVisible = false;
  pirncpalVisible = true;
  isChecked = false;
  @ViewChild('heartSVG', { static: false }) heartSVG!: ElementRef;


  onHeartCheckboxChange(event: Event) {
    this.isChecked = (event.target as HTMLInputElement).checked;
    if (this.isChecked) {
      // Después de un tiempo para permitir que la animación termine, muestra el componente
      setTimeout(() => {
        this.cartaVisible = true;
        this.pirncpalVisible = false;
      }, 2000); // Asegúrate de ajustar el tiempo al mismo de la animación
    } else {
      // Si el checkbox se desmarca, ocultar el componente
      this.cartaVisible = false;
      this.pirncpalVisible = true;
    }
  }
}
