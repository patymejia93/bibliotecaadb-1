import { Injectable } from '@angular/core';
import { ContentMaterialAudiovisual, ContentMaterialAudiovisualCreate, MaterialAudiovisual } from '../interfaces/materialAudiovisual';
import { MaterialAudiovisualService } from '../services/material-audiovisual.service';

@Injectable({
  providedIn: 'root'
})
export class MaterialAudiovisualControllerService {

  constructor(
    private _matEscService: MaterialAudiovisualService
) { }

getMatEsc(): Promise<MaterialAudiovisual | null> {
    return new Promise<MaterialAudiovisual | null>((resolve, reject) => {
        this._matEscService.materialesAudiovisuales().subscribe({
            next: (response) => resolve(response),
            error: () => resolve(null)
        });
    })
}
postMatEsc(params: ContentMaterialAudiovisualCreate): Promise<ContentMaterialAudiovisual | null> {
    console.log(`params`, params)
    return new Promise<ContentMaterialAudiovisual | null>((resolve, reject) => {
        this._matEscService.create(params).subscribe({
            next: (response: ContentMaterialAudiovisual) => {
                console.log(`response`, response)
                resolve(response)
                this.getMatEsc()
            },
            error: () => resolve(null)
        });
    })
}

postEditMatEsc(params: ContentMaterialAudiovisual): Promise<ContentMaterialAudiovisual | null> {
    console.log(`params`, params)
    return new Promise<ContentMaterialAudiovisual | null>((resolve, reject) => {
        this._matEscService.create(params).subscribe({
            next: (response: ContentMaterialAudiovisual) => {
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
    return new Promise<ContentMaterialAudiovisual | null>((resolve, reject) => {
        this._matEscService.delete(param).subscribe();
    })
}
}
