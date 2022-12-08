import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestionesRoutingModule } from './gestiones-routing.module';
import { PrestamoMaterialEscritoComponent } from './pages/prestamo-material-escrito/prestamo-material-escrito.component';
import { PrestamoMaterialAudiovisualComponent } from './pages/prestamo-material-audiovisual/prestamo-material-audiovisual.component';
import { DevolucionesComponent } from './pages/devoluciones/devoluciones.component';


@NgModule({
  declarations: [
    PrestamoMaterialEscritoComponent,
    PrestamoMaterialAudiovisualComponent,
    DevolucionesComponent
  ],
  imports: [
    CommonModule,
    GestionesRoutingModule
  ]
})
export class GestionesModule { }
