import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ContentMaterialEscrito, ContentMaterialEscritoCreate, ContentMaterialEscritoDelete, MaterialEscrito } from '../interfaces/materialEscrito';

@Injectable({
  providedIn: 'root'
})
export class MaterialEscritoService {

  private readonly _API: string = '/materialEscrito'

  constructor(
      private _http: HttpClient
  ) { }

  materialesEscritos(): Observable<MaterialEscrito> {
    const headers = new HttpHeaders().set('Authorization', environment.token)
    return this._http.get<MaterialEscrito>(`${this._API}?page=0&size=10`, { headers });
  }

  materialesEscritosDisp(): Observable<MaterialEscrito> {
    const headers = new HttpHeaders().set('Authorization', environment.token)
    return this._http.get<MaterialEscrito>(`${this._API}/disponible?page=0&size=10`, { headers });
  }

  materialesEscritosBusqueda(criterio: string): Observable<MaterialEscrito> {
    const headers = new HttpHeaders().set('Authorization', environment.token)
    return this._http.get<MaterialEscrito>(`${this._API}/ctg_me_autor/`+criterio, { headers });
  }

create(params: ContentMaterialEscritoCreate): Observable<ContentMaterialEscrito> {
    // console.log(`params`, params)
    const headers = new HttpHeaders()
    .set('Authorization', environment.token)
    .set('Content-Type', 'application/json')
    return this._http.post<ContentMaterialEscrito>(`${this._API}`, params, { headers });
}

delete(param: number){
    // console.log(`params`, params)
    const headers = new HttpHeaders()
    .set('Authorization', environment.token)
    .set('Content-Type', 'application/json')
    return this._http.delete<ContentMaterialEscritoDelete>(`${this._API}/`+ param, { headers });
}
}
