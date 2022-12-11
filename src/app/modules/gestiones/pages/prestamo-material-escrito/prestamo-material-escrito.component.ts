import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ConfirmationService, MessageService } from 'primeng/api';
import { MaterialEscritoControllerService } from 'src/app/modules/mantenimientos/controllers/material-escrito-controller.service';
import { PrestamoControllerService } from 'src/app/modules/mantenimientos/controllers/prestamo-controller.service';
import { ContentMaterialEscrito, MaterialEscrito } from 'src/app/modules/mantenimientos/interfaces/materialEscrito';

@Component({
  selector: 'app-prestamo-material-escrito',
  templateUrl: './prestamo-material-escrito.component.html',
  styleUrls: ['./prestamo-material-escrito.component.scss']
})
export class PrestamoMaterialEscritoComponent implements OnInit {

  public materialesEscritos: MaterialEscrito | null = null;
  public hasLoad: boolean = false;
  public formMatEsc: FormGroup | null = null
  public formPrestamo: FormGroup | null = null

  constructor(
      private confirmationService: ConfirmationService,
      private _matEscController: MaterialEscritoControllerService,
      private _messageService: MessageService,
      private _prestamoController: PrestamoControllerService
  ) {}

  ngOnInit(): void {
      this._init();
  }

  private async _init() {
      this.materialesEscritos = await this._matEscController.getMatEscDisp();
      this._initForm();
      this.hasLoad = true;
  }

  private async _Busquedainit(criterio: string) {
    this.materialesEscritos = await this._matEscController.getMatEscBusqueda(criterio);
    this._initForm();
    this.hasLoad = true;
}

  private _initForm() {
          this.formMatEsc = new FormGroup({
            ctgMaterialEscritoId: new FormControl(),
            ctgMaterialEscritoCorrelativo: new FormControl(),
            ctgMaterialEscritoTitulo: new FormControl(),
            ctgMaterialEscritoAutor: new FormControl(),
            ctgMaterialEscritoNumeroPaginas: new FormControl(),
            ctgMaterialEscritoEditorial: new FormControl(),
            ctgMaterialEscritoIsbn: new FormControl(),
            ctgMaterialEscritoAnioPublicacion: new FormControl(),
            ctgMaterialEscritoUnidadesDisponibles: new FormControl(),
            ctgTipoArticulo: new FormGroup({
              ctgTipoArticuloId: new FormControl(1),
              ctgTipoarticuloDescripcion: new FormControl(),
              ctgTIpoArticuloActivo: new FormControl()
            }),
            ctgMaterialEscritoPeriodicidad: new FormControl(),
            ctgMaterialEscritoFechaPublicacion: new FormControl(),
            ctgMaterialEscritoTema: new FormControl(),
            ctgMaterialEscritoIdioma: new FormControl(),
            ctgMaterialEscritoInformacionAdicional: new FormControl()
        })    
  }


  public async search(event: any) {
    if(event.target.criterioBusqueda.value!)
      this._Busquedainit(event.target.criterioBusqueda.value);
    else
      this._init();
  }

  confirm(articulo: ContentMaterialEscrito) {
    this.confirmationService.confirm({
        message: '¿Desea prestar el art&iacute;culo ' + articulo.ctgMaterialEscritoCorrelativo + '?',
        accept: () => {
              this.formPrestamo = new FormGroup({
                    gstPrestamoId: new FormControl(),
                    gstPrestamoFechaInicial: new FormControl(Date),
                    gstPrestamoFechaFinal: new FormControl(new Date().getDate()+3),
                    sgdUsuario: new FormGroup({
                      sgdUsuarioId: new FormControl(1)
                    }),
                    ctgMaterialEscrito: new FormGroup({
                      ctgMaterialEscritoId: new FormControl(articulo.ctgMaterialEscritoId)
                    }),
                    gstPrestamoMora: new FormControl(),
                    ctgEstadoPrestamo: new FormGroup({
                      ctgEstadoPrestamoId: new FormControl()
                    }),
                    ctgMaterialAudiovisual: new FormGroup({
                      ctgMaterialAudiovisualId: new FormControl()
                    }) 
              }) 

          this._prestamoController.postPrestamo(this.formPrestamo!.value);
            //this._matEscController.deleteMatEsc(id);
            //this._init();
            //this._messageService.add({ severity: 'success', summary: 'Acción exitosa' });
           
        }
    }); 
}

}
