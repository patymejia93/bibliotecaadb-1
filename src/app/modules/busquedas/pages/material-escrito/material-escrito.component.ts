import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ConfirmationService, MessageService } from 'primeng/api';
import { MaterialEscritoControllerService } from 'src/app/modules/mantenimientos/controllers/material-escrito-controller.service';
import { ContentMaterialEscrito, MaterialEscrito } from 'src/app/modules/mantenimientos/interfaces/materialEscrito';

@Component({
  selector: 'app-material-escrito',
  templateUrl: './material-escrito.component.html',
  styleUrls: ['./material-escrito.component.scss']
})
export class MaterialEscritoComponent implements OnInit {

  public materialesEscritos: MaterialEscrito | null = null;
  public hasLoad: boolean = false;
  public formMatEsc: FormGroup | null = null
  public formMatEscE: FormGroup | null = null

  constructor(
      private confirmationService: ConfirmationService,
      private _matEscController: MaterialEscritoControllerService,
      private _messageService: MessageService
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

      this.formMatEscE = new FormGroup({
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
          ctgTipoArticuloId: new FormControl(),
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

}
