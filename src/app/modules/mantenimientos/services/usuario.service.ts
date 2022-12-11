import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ContentUsuario, ContentUsuarioCreate, ContentUsuarioDelete, Usuario } from '../interfaces/usuario';

@Injectable({
    providedIn: 'root'
})
export class UsuarioService {

    private readonly _API: string = '/user'

    constructor(
        private _http: HttpClient
    ) { }

    usuarios(): Observable<Usuario> {
        const headers = new HttpHeaders().set('Authorization', environment.token)
        return this._http.get<Usuario>(`${this._API}?page=0&size=10`, { headers });
    }

    create(params: ContentUsuarioCreate): Observable<ContentUsuario> {
        // console.log(`params`, params)
        const headers = new HttpHeaders()
        .set('Authorization', environment.token)
        .set('Content-Type', 'application/json')
        return this._http.post<ContentUsuario>(`${this._API}`, params, { headers });
    }

    delete(param: number){
        // console.log(`params`, params)
        const headers = new HttpHeaders()
        .set('Authorization', environment.token)
        .set('Content-Type', 'application/json')
        return this._http.delete<ContentUsuarioDelete>(`${this._API}/`+ param, { headers });
    }
}
