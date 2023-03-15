import { MaterialModule } from './shared/material/material.module';
import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './componentes/home/home.component';
import { EstadisticasComponent } from './componentes/estadisticas/estadisticas.component';
import { CrearAlarmaComponent } from './componentes/crear-alarma/crear-alarma.component';
import { EditarAlarmaComponent } from './componentes/editar-alarma/editar-alarma.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EstadisticasComponent,
    CrearAlarmaComponent,
    EditarAlarmaComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
