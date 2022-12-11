import { Injectable } from '@angular/core';
import { ContentLimitePrestamosCreate } from '../interfaces/limitePrestamos';
import { ContentMaterialEscrito, ContentMaterialEscritoCreate, MaterialEscrito } from '../interfaces/materialEscrito';
import { ContentPrestamo, ContentPrestamoCreate, Prestamo } from '../interfaces/Prestamo';
import { MaterialEscritoService } from '../services/material-escrito.service';
import { PrestamoService } from '../services/prestamo.service';

@Injectable({
  providedIn: 'root'
})
export class PrestamoControllerService {

  constructor(
    private _prestamoService: PrestamoService
) { }

getPrestamos(): Promise<Prestamo | null> {
    return new Promise<Prestamo | null>((resolve, reject) => {
        this._prestamoService.getPrestamos().subscribe({
            next: (response) => resolve(response),
            error: () => resolve(null)
        });
    })
}

/*getMatEscBusqueda(criterio: string): Promise<MaterialEscrito | null> {
    return new Promise<MaterialEscrito | null>((resolve, reject) => {
        this._matEscService.materialesEscritosBusqueda(criterio).subscribe({
            next: (response) => resolve(response),
            error: () => resolve(null)
        });
    })
}*/
postPrestamo(params: ContentPrestamoCreate): Promise<ContentPrestamo | null> {
    console.log(`params`, params)
    return new Promise<ContentPrestamo | null>((resolve, reject) => {
        this._prestamoService.create(params).subscribe({
            next: (response: ContentPrestamo) => {
                console.log(`response`, response)
                resolve(response)
            },
            error: () => resolve(null)
        });
    })
}

/*postEditMatEsc(params: ContentMaterialEscrito): Promise<ContentMaterialEscrito | null> {
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
}*/
}
