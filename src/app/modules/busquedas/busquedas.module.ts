import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BusquedasRoutingModule } from './busquedas-routing.module';
import { MaterialAudiovisualComponent } from './pages/material-audiovisual/material-audiovisual.component';
import { MaterialEscritoComponent } from './pages/material-escrito/material-escrito.component';


@NgModule({
  declarations: [
    MaterialAudiovisualComponent,
    MaterialEscritoComponent
  ],
  imports: [
    CommonModule,
    BusquedasRoutingModule
  ]
})
export class BusquedasModule { }
