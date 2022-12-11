import { Injectable } from '@angular/core';
import { ContentMaterialEscrito, ContentMaterialEscritoCreate, MaterialEscrito } from '../interfaces/materialEscrito';
import { MaterialEscritoService } from '../services/material-escrito.service';

@Injectable({
  providedIn: 'root'
})
export class MaterialEscritoControllerService {

  constructor(
    private _matEscService: MaterialEscritoService
) { }

getMatEsc(): Promise<MaterialEscrito | null> {
    return new Promise<MaterialEscrito | null>((resolve, reject) => {
        this._matEscService.materialesEscritos().subscribe({
            next: (response) => resolve(response),
            error: () => resolve(null)
        });
    })
}
postMatEsc(params: ContentMaterialEscritoCreate): Promise<ContentMaterialEscrito | null> {
    console.log(`params`, params)
    return new Promise<ContentMaterialEscrito | null>((resolve, reject) => {
        this._matEscService.create(params).subscribe({
            next: (response: ContentMaterialEscrito) => {
                console.log(`response`, response)
                resolve(response)
                this.getMatEsc()
            },
            error: () => resolve(null)
        });
    })
}

postEditMatEsc(params: ContentMaterialEscrito): Promise<ContentMaterialEscrito | null> {
    console.log(`params`, params)
    return new Promise<ContentMaterialEscrito | null>((resolve, reject) => {
        this._matEscService.create(params).subscribe({
            next: (response: ContentMaterialEscrito) => {
                console.log(`response`, response)
                resolve(response)
                this.getMatEsc()
            },
            error: () => resolve(null)
        });
    })
}

deleteMatEsc(param: number){
    console.log(`param`, param)
    return new Promise<ContentMaterialEscrito | null>((resolve, reject) => {
        this._matEscService.delete(param).subscribe();
    })
}
}
