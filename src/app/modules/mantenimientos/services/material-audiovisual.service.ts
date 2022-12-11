import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ContentMaterialAudiovisual, ContentMaterialAudiovisualCreate, ContentMaterialAudiovisualDelete, MaterialAudiovisual } from '../interfaces/materialAudiovisual';

@Injectable({
  providedIn: 'root'
})
export class MaterialAudiovisualService {

  private readonly _API: string = '/materialAudiovisual'

  constructor(
      private _http: HttpClient
  ) { }

  materialesAudiovisuales(): Observable<MaterialAudiovisual> {
    const headers = new HttpHeaders().set('Authorization', environment.token)
    return this._http.get<MaterialAudiovisual>(`${this._API}?page=0&size=10`, { headers });
}

create(params: ContentMaterialAudiovisualCreate): Observable<ContentMaterialAudiovisual> {
    // console.log(`params`, params)
    const headers = new HttpHeaders()
    .set('Authorization', environment.token)
    .set('Content-Type', 'application/json')
    return this._http.post<ContentMaterialAudiovisual>(`${this._API}`, params, { headers });
}

delete(param: number){
    // console.log(`params`, params)
    const headers = new HttpHeaders()
    .set('Authorization', environment.token)
    .set('Content-Type', 'application/json')
    return this._http.delete<ContentMaterialAudiovisualDelete>(`${this._API}/`+ param, { headers });
}
}
