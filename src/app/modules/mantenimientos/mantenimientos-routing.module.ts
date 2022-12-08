import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaterialAudiovisualComponent } from './pages/material-audiovisual/material-audiovisual.component';
import { MaterialEscritoComponent } from './pages/material-escrito/material-escrito.component';
import { RolesComponent } from './pages/roles/roles.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';

const routes: Routes = [
    {
        path: 'materialAudiovisual',
        component: MaterialAudiovisualComponent
    },
    {
        path: 'materialEscrito',
        component: MaterialEscritoComponent
    },
    {
        path: 'roles',
        component: RolesComponent
    },
    {
        path: 'usuarios',
        component: UsuariosComponent
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
export class MantenimientosRoutingModule { }
