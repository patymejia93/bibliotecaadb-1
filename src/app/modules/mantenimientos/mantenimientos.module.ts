import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MantenimientosRoutingModule } from './mantenimientos-routing.module';
import { MaterialEscritoComponent } from './pages/material-escrito/material-escrito.component';
import { MaterialAudiovisualComponent } from './pages/material-audiovisual/material-audiovisual.component';
import { RolesComponent } from './pages/roles/roles.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { MessageModule } from 'primeng/message';
import { ToastModule } from 'primeng/toast';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
    declarations: [
        MaterialEscritoComponent,
        MaterialAudiovisualComponent,
        RolesComponent,
        UsuariosComponent
    ],
    imports: [
        CommonModule,
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
export class MantenimientosModule { }
