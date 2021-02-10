import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Dato } from 'src/app/models/dato';
import { DatosSensorService } from 'src/app/services/datos-sensor.service';

@Component({
  selector: 'app-datos-edit',
  templateUrl: './datos-edit.component.html',
  styleUrls: ['./datos-edit.component.scss']
})
export class DatosEditComponent implements OnInit {

  public id = undefined
  public form: FormGroup
  constructor(private formBuilder: FormBuilder,
              private datosSensorService: DatosSensorService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {

    this.form = this.formBuilder.group({
      co2: ['', Validators.required],
      temperatura: ['', Validators.required],
      humedad: ['', Validators.required],
      idsensor: ['', Validators.required],
     })
  }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params.id
  }

  onSubmit(formValue: Dato){
    this.datosSensorService.addDato(formValue).subscribe(
      result => {
        console.log('guardado correctamente'+formValue)
        this.router.navigate(['/datos-list'])
      },
      error => alert('Error al guardar el dato:'+error.text)
    )
  }

}
