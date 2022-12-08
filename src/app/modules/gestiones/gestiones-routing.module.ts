import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DevolucionesComponent } from './pages/devoluciones/devoluciones.component';
import { PrestamoMaterialAudiovisualComponent } from './pages/prestamo-material-audiovisual/prestamo-material-audiovisual.component';
import { PrestamoMaterialEscritoComponent } from './pages/prestamo-material-escrito/prestamo-material-escrito.component';

const routes: Routes = [
    {
        path: 'devoluciones',
        component: DevolucionesComponent
    },
    {
        path: 'prestamoMaterialAudiovisual',
        component: PrestamoMaterialAudiovisualComponent
    },
    {
        path: 'prestamoMaterialEscrito',
        component: PrestamoMaterialEscritoComponent
    },
    {
        path: '**',
        redirectTo: '/'
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestionesRoutingModule { }
