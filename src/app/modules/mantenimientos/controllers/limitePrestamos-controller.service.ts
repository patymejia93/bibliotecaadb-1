import { Injectable } from '@angular/core';
import { ContentLimitePrestamos, ContentLimitePrestamosCreate, LimitePrestamos } from '../interfaces/limitePrestamos';
import { LimitePrestamosService } from '../services/limitePrestamos.service';

@Injectable({
    providedIn: 'root'
})
export class LimitePrestamosControllerService {

    constructor(
        private _limitePrestamosService: LimitePrestamosService
    ) { }

    getRols(): Promise<LimitePrestamos | null> {
        return new Promise<LimitePrestamos | null>((resolve, reject) => {
            this._limitePrestamosService.rols().subscribe({
                next: (response) => resolve(response),
                error: () => resolve(null)
            });
        })
    }
    postRols(params: ContentLimitePrestamosCreate): Promise<ContentLimitePrestamos | null> {
        console.log(`params`, params)
        return new Promise<ContentLimitePrestamos | null>((resolve, reject) => {
            this._limitePrestamosService.create(params).subscribe({
                next: (response: ContentLimitePrestamos) => {
                    console.log(`response`, response)
                    resolve(response)
                    this.getRols()
                },
                error: () => resolve(null)
            });
        })
    }

    postEditRols(params: ContentLimitePrestamos): Promise<ContentLimitePrestamos | null> {
        console.log(`params`, params)
        return new Promise<ContentLimitePrestamos | null>((resolve, reject) => {
            this._limitePrestamosService.create(params).subscribe({
                next: (response: ContentLimitePrestamos) => {
                    console.log(`response`, response)
                    resolve(response)
                    this.getRols()
                },
                error: () => resolve(null)
            });
        })
    }

    deleteLimitePrestamos(param: number){
        console.log(`param`, param)
        return new Promise<ContentLimitePrestamos | null>((resolve, reject) => {
            this._limitePrestamosService.delete(param).subscribe();
        })
    }
}
