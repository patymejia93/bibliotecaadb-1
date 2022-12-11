import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestionesRoutingModule } from './gestiones-routing.module';
import { PrestamoMaterialEscritoComponent } from './pages/prestamo-material-escrito/prestamo-material-escrito.component';
import { PrestamoMaterialAudiovisualComponent } from './pages/prestamo-material-audiovisual/prestamo-material-audiovisual.component';
import { DevolucionesComponent } from './pages/devoluciones/devoluciones.component';
import { MantenimientosRoutingModule } from '../mantenimientos/mantenimientos-routing.module';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { MessageModule } from 'primeng/message';
import { ToastModule } from 'primeng/toast';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConfirmationService, MessageService } from 'primeng/api';


@NgModule({
  declarations: [
    PrestamoMaterialEscritoComponent,
    PrestamoMaterialAudiovisualComponent,
    DevolucionesComponent
  ],
  imports: [
    CommonModule,
    GestionesRoutingModule,
    MantenimientosRoutingModule,
    CardModule,
    TableModule,
    ButtonModule,
    DialogModule,
    InputTextModule,
    DropdownModule,
    ConfirmDialogModule,
    MessageModule,
    ToastModule,
    ProgressSpinnerModule,
    ReactiveFormsModule,
    FormsModule
],
providers: [
    ConfirmationService,
    MessageService
]
})
export class GestionesModule { }
