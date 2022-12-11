import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ContentLimitePrestamos, ContentLimitePrestamosCreate, ContentLimitePrestamosDelete, LimitePrestamos } from '../interfaces/limitePrestamos';

@Injectable({
    providedIn: 'root'
})
export class LimitePrestamosService {

    private readonly _API: string = '/limitePrestamos'

    constructor(
        private _http: HttpClient
    ) { }

    rols(): Observable<LimitePrestamos> {
        const headers = new HttpHeaders().set('Authorization', environment.token)
        return this._http.get<LimitePrestamos>(`${this._API}?page=0&size=10`, { headers });
    }

    create(params: ContentLimitePrestamosCreate): Observable<ContentLimitePrestamos> {
        // console.log(`params`, params)
        const headers = new HttpHeaders()
        .set('Authorization', environment.token)
        .set('Content-Type', 'application/json')
        return this._http.post<ContentLimitePrestamos>(`${this._API}`, params, { headers });
    }

    delete(param: number){
        // console.log(`params`, params)
        const headers = new HttpHeaders()
        .set('Authorization', environment.token)
        .set('Content-Type', 'application/json')
        return this._http.delete<ContentLimitePrestamosDelete>(`${this._API}/`+ param, { headers });
    }
}
