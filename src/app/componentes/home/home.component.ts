import { Alarma } from './../modelo/alarma';
import { EditarAlarmaComponent } from './../editar-alarma/editar-alarma.component';
import { CrearAlarmaComponent } from './../crear-alarma/crear-alarma.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  readonly MED_OMEPRAZOL: number = 1;
  readonly PRESION: number = 2;
  readonly MED_VITAMINA: number = 3;
  readonly INSULINA: number = 4;
  readonly PESO: number = 5;
  readonly SATURACION: number = 6;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  creacionDialogCrearAlarma() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.panelClass = 'mat-dialog-container-custom-tabla';

    const dialogRef = this.dialog.open(
      CrearAlarmaComponent,
      dialogConfig
    );

    dialogRef.afterClosed().subscribe({
      next: (result) => {

      }

    });

  }

  editarAlarma(idLlamado: number) {
    let alarma = new Alarma();
    switch (idLlamado) {
      case this.MED_OMEPRAZOL:
        alarma.nombre = "Toma diaria";
        alarma.posponer = "5 minutos";
        alarma.repetir = "Diariamiente";
        alarma.sonido = "Cuckoo";
        alarma.tipo = "Medicamento";
        this.creacionDialogEditarAlarma(alarma);
        break;

      case this.PRESION:
        alarma.nombre = "Niveles de presion";
        alarma.posponer = "2 minutos";
        alarma.repetir = "4 horas";
        alarma.sonido = "Rooster";
        alarma.tipo = "Presión";
        this.creacionDialogEditarAlarma(alarma);

        break;

      case this.MED_VITAMINA:
        alarma.nombre = "Toma en la mañana";
        alarma.posponer = "5 minutos";
        alarma.repetir = "Diariamente";
        alarma.sonido = "Cuckoo";
        alarma.tipo = "Medicamento";
        this.creacionDialogEditarAlarma(alarma);

        break;

      case this.INSULINA:

        alarma.nombre = "Inyección";
        alarma.posponer = "5 minutos";
        alarma.repetir = "Semanalmente";
        alarma.sonido = "Cuckoo";
        alarma.tipo = "Insulina";
        this.creacionDialogEditarAlarma(alarma);

        break;
      case this.PESO:

        alarma.nombre = "Control peso";
        alarma.posponer = "60 minutos";
        alarma.repetir = "Mensualmente";
        alarma.sonido = "Ring";
        alarma.tipo = "Peso";
        this.creacionDialogEditarAlarma(alarma);

        break;
      case this.SATURACION:

        alarma.nombre = "Toma diaria";
        alarma.posponer = "5 minutos";
        alarma.repetir = "3 horas";
        alarma.sonido = "Cuckoo";
        alarma.tipo = "Saturación";
        this.creacionDialogEditarAlarma(alarma);

        break;
      default:
        break;
    }
  }

  creacionDialogEditarAlarma(datos: Alarma) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = datos;
      dialogConfig.panelClass = 'mat-dialog-container-custom-tabla';

    const dialogRef = this.dialog.open(
      EditarAlarmaComponent,
      dialogConfig
    );

    dialogRef.afterClosed().subscribe({
      next: (result) => {

      }

    });

  }

}
