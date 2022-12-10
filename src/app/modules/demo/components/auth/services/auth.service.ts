import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Token } from '../interfaces/token';
import { TokenParams } from '../interfaces/token-params';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private _API: string = '/oauth/token'

    constructor(
        private _http: HttpClient
    ) { }

    token(params: TokenParams): Observable<Token> {

        const headers = new HttpHeaders().set(
            'Authorization', 'Basic dmlldy1jaGVxdWVzOjE3QUQwQzI3NEM1RDM5MzJDQjJBQjAxRUE0ODRGNDND')
        return this._http.post<Token>(`${this._API}`, params, { headers });
    }
}
