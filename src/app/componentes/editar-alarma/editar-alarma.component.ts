import { Alarma } from './../modelo/alarma';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-editar-alarma',
  templateUrl: './editar-alarma.component.html',
  styleUrls: ['./editar-alarma.component.css']
})
export class EditarAlarmaComponent {
  tipo: string | undefined;
  nombre: string | undefined;
  repetir: string | undefined;
  sonido: string | undefined;
  posponer: string | undefined;

  constructor(public dialogRef: MatDialogRef<EditarAlarmaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Alarma) {
      this.tipo = data.tipo;
      this.nombre = data.nombre;
      this.repetir = data.repetir;
      this.sonido = data.sonido;
      this.posponer = data.posponer;

    }

  onCancel(): void {
    this.dialogRef.close();
  }

}
