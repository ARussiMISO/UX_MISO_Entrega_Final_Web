import { CrearAlarmaComponent } from './../crear-alarma/crear-alarma.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  creacionDialogCrearAlarma(){
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

}
