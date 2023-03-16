import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-crear-alarma',
  templateUrl: './crear-alarma.component.html',
  styleUrls: ['./crear-alarma.component.css']
})
export class CrearAlarmaComponent{

  constructor(public dialogRef: MatDialogRef<CrearAlarmaComponent>){

  }
  onCancel(): void {
    this.dialogRef.close();
  }


}
