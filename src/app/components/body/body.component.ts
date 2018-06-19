import {Component} from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html'
})
export class BodyComponent {
  mostrar: true;

  frase: any = {
    mensaje: 'Me llaman body',
    autor: 'il capo'
  };
  personajes: string [] = ['papa noel', 'melchor', 'gaspar', 'baltasar'];
}
