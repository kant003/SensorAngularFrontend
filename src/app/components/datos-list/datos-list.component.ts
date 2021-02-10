import { Component, OnInit } from '@angular/core';
import { Dato } from 'src/app/models/dato';
import { DatosSensorService } from 'src/app/services/datos-sensor.service';

@Component({
  selector: 'app-datos-list',
  templateUrl: './datos-list.component.html',
  styleUrls: ['./datos-list.component.scss']
})
export class DatosListComponent implements OnInit {
  public listaDatos: Dato[]

   constructor(private datosSensorService: DatosSensorService) {
     this.listaDatos = []
    }

  ngOnInit(): void {
    this.getDatos();
  }

  getDatos(){
    this.datosSensorService.getListaDatos().subscribe(
      result => {
        this.listaDatos = result
      },
      error => {
        alert('Error al listar las puntuaciones:'+error.error.mensaje)
      },
    )
  }

  //TODO revisar el error al borrar
  borrarDato(id: string){
    this.datosSensorService.removeDato(id).subscribe(
      result => this.getDatos(),
      error => alert('Error al borrar el dato:'+error.error.mensaje)
    )
  }
}
