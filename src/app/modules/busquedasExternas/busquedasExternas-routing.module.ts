import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaterialAudiovisualComponent } from './pages/material-audiovisual/material-audiovisual.component';
import { MaterialEscritoComponent } from './pages/material-escrito/material-escrito.component';

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
        path: '**',
        redirectTo: '/'
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BusquedasRoutingModule { }
