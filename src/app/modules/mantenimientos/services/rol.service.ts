import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ContentRol, ContentRolCreate, ContentRolDelete, Rol } from '../interfaces/rol';

@Injectable({
    providedIn: 'root'
})
export class RolService {

    private readonly _API: string = '/role'

    constructor(
        private _http: HttpClient
    ) { }

    rols(): Observable<Rol> {
        const headers = new HttpHeaders().set('Authorization', environment.token)
        return this._http.get<Rol>(`${this._API}?page=0&size=10`, { headers });
    }

    create(params: ContentRolCreate): Observable<ContentRol> {
        // console.log(`params`, params)
        const headers = new HttpHeaders()
        .set('Authorization', environment.token)
        .set('Content-Type', 'application/json')
        return this._http.post<ContentRol>(`${this._API}`, params, { headers });
    }

    delete(param: number){
        // console.log(`params`, params)
        const headers = new HttpHeaders()
        .set('Authorization', environment.token)
        .set('Content-Type', 'application/json')
        return this._http.delete<ContentRolDelete>(`${this._API}/`+ param, { headers });
    }
}
