import { Injectable } from '@angular/core';
import { ContentUsuario, ContentUsuarioCreate, Usuario } from '../interfaces/usuario';
import { UsuarioService } from '../services/usuario.service';

@Injectable({
    providedIn: 'root'
})
export class UsuarioControllerService {

    constructor(
        private _usuarioService: UsuarioService
    ) { }

    getUsuarios(): Promise<Usuario | null> {
        return new Promise<Usuario | null>((resolve, reject) => {
            this._usuarioService.usuarios().subscribe({
                next: (response) => resolve(response),
                error: () => resolve(null)
            });
        })
    }
    postUsuarios(params: ContentUsuarioCreate): Promise<ContentUsuario | null> {
        console.log(`params`, params)
        return new Promise<ContentUsuario | null>((resolve, reject) => {
            this._usuarioService.create(params).subscribe({
                next: (response: ContentUsuario) => {
                    console.log(`response`, response)
                    resolve(response)
                    this.getUsuarios()
                },
                error: () => resolve(null)
            });
        })
    }

    postEditUsuarios(params: ContentUsuario): Promise<ContentUsuario | null> {
        console.log(`params`, params)
        return new Promise<ContentUsuario | null>((resolve, reject) => {
            this._usuarioService.create(params).subscribe({
                next: (response: ContentUsuario) => {
                    console.log(`response`, response)
                    resolve(response)
                    this.getUsuarios()
                },
                error: () => resolve(null)
            });
        })
    }

    deleteUsuarios(param: number){
        console.log(`param`, param)
        return new Promise<ContentUsuario | null>((resolve, reject) => {
            this._usuarioService.delete(param).subscribe();
        })
    }
}
