import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { NotfoundComponent } from './modules/demo/components/notfound/notfound.component';
import { AppLayoutComponent } from "./modules/layout/app.layout.component";

const routes: Routes =
    [
        {
            path: '', component: AppLayoutComponent,
            children: [
                {
                    path: '',
                    loadChildren: () => import('./modules/demo/components/dashboard/dashboard.module').then(m => m.DashboardModule)
                },
                {
                    path: 'mantenimientos',
                    loadChildren: () => import('./modules/mantenimientos/mantenimientos.module').then(m => m.MantenimientosModule)
                },
                {
                    path: 'gestiones',
                    loadChildren: () => import('./modules/gestiones/gestiones.module').then(m => m.GestionesModule)
                },
                {
                    path: 'busquedas',
                    loadChildren: () => import('./modules/busquedas/busquedas.module').then(m => m.BusquedasModule)
                },
                {
                    path: 'uikit',
                    loadChildren: () => import('./modules/demo/components/uikit/uikit.module').then(m => m.UIkitModule)
                },
                // {
                //     path: 'utilities',
                //     loadChildren: () => import('./modules/demo/components/utilities/utilities.module').then(m => m.UtilitiesModule)
                // },
                // {
                //     path: 'documentation',
                //     loadChildren: () => import('./modules/demo/components/documentation/documentation.module').then(m => m.DocumentationModule)
                // },
                // {
                //     path: 'blocks',
                //     loadChildren: () => import('./modules/demo/components/primeblocks/primeblocks.module').then(m => m.PrimeBlocksModule)
                // },
                {
                    path: 'pages',
                    loadChildren: () => import('./modules/demo/components/pages/pages.module').then(m => m.PagesModule)
                }
            ]
        },
        {
            path: 'auth',
            loadChildren: () => import('./modules/demo/components/auth/auth.module').then(m => m.AuthModule)
        },
        // {
        //     path: 'landing',
        //     loadChildren: () => import('./modules/demo/components/landing/landing.module').then(m => m.LandingModule)
        // },
        // {
        //     path: 'notfound',
        //     component: NotfoundComponent
        // },
        {
            path: '**',
            redirectTo: '/auth/login'
        },
    ];

@NgModule({
    imports: [
        RouterModule.forRoot(routes,
            {
                // scrollPositionRestoration: 'enabled',
                // anchorScrolling: 'enabled',
                // onSameUrlNavigation: 'reload',
                useHash: false
            }
        )
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
