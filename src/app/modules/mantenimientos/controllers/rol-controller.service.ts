import { Injectable } from '@angular/core';
import { ContentRol, ContentRolCreate, Rol } from '../interfaces/rol';
import { RolService } from '../services/rol.service';

@Injectable({
    providedIn: 'root'
})
export class RolControllerService {

    constructor(
        private _rolService: RolService
    ) { }

    getRols(): Promise<Rol | null> {
        return new Promise<Rol | null>((resolve, reject) => {
            this._rolService.rols().subscribe({
                next: (response) => resolve(response),
                error: () => resolve(null)
            });
        })
    }
    postRols(params: ContentRolCreate): Promise<ContentRol | null> {
        console.log(`params`, params)
        return new Promise<ContentRol | null>((resolve, reject) => {
            this._rolService.create(params).subscribe({
                next: (response: ContentRol) => {
                    console.log(`response`, response)
                    resolve(response)
                },
                error: () => resolve(null)
            });
        })
    }
}
