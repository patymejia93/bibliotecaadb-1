import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BusquedasRoutingModule } from './busquedasExternas-routing.module';
import { MaterialAudiovisualComponent } from './pages/material-audiovisual/material-audiovisual.component';
import { MaterialEscritoComponent } from './pages/material-escrito/material-escrito.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ToastModule } from 'primeng/toast';
import { MessageModule } from 'primeng/message';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { CardModule } from 'primeng/card';


@NgModule({
  declarations: [
    MaterialAudiovisualComponent,
    MaterialEscritoComponent
  ],
  imports: [
    CommonModule,
    BusquedasRoutingModule,
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
export class BusquedasModule { }
