import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ContentPrestamo, ContentPrestamoCreate, ContentPrestamoDelete, Prestamo } from '../interfaces/Prestamo';

@Injectable({
    providedIn: 'root'
})
export class PrestamoService {

    private readonly _API: string = '/prestamos'

    constructor(
        private _http: HttpClient
    ) { }

    getPrestamos(): Observable<Prestamo> {
        const headers = new HttpHeaders().set('Authorization', environment.token)
        return this._http.get<Prestamo>(`${this._API}?page=0&size=10`, { headers });
    }

    create(params: ContentPrestamoCreate): Observable<ContentPrestamo> {
        const headers = new HttpHeaders()
        .set('Authorization', environment.token)
        .set('Content-Type', 'application/json')
        return this._http.post<ContentPrestamo>(`${this._API}`, params, { headers });
    }

    delete(param: number){
        // console.log(`params`, params)
        const headers = new HttpHeaders()
        .set('Authorization', environment.token)
        .set('Content-Type', 'application/json')
        return this._http.delete<ContentPrestamoDelete>(`${this._API}/`+ param, { headers });
    }

}
