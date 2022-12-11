import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ConfirmationService, MessageService } from 'primeng/api';
import { MaterialEscritoControllerService } from 'src/app/modules/mantenimientos/controllers/material-escrito-controller.service';
import { PrestamoControllerService } from 'src/app/modules/mantenimientos/controllers/prestamo-controller.service';
import { ContentMaterialEscrito, MaterialEscrito } from 'src/app/modules/mantenimientos/interfaces/materialEscrito';
import { ContentPrestamo, Prestamo } from 'src/app/modules/mantenimientos/interfaces/Prestamo';

@Component({
  selector: 'app-devoluciones',
  templateUrl: './devoluciones.component.html',
  styleUrls: ['./devoluciones.component.scss']
})
export class DevolucionesComponent implements OnInit {

  public prestamo: Prestamo | null = null;
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
      this.prestamo = await this._prestamoController.getPrestamos();
      this._initForm();
      this.hasLoad = true;
  }

  private async _Busquedainit(criterio: string) {
    //this.prestamo = await this._prestamoController.get
    this._initForm();
    this.hasLoad = true;
}

  private _initForm() {
          this.formMatEsc = new FormGroup({
            gstPrestamoId: new FormControl(),
            gstPrestamoFechaInicial: new FormControl(),
            gstPrestamoFechaFinal: new FormControl(),
            sgdUsuario: new FormGroup({
              sgdUsuarioId: new FormControl(),
              sgdUsuarioPrimerNombre: new FormControl(),
              sgdUsuarioPrimerApellido: new FormControl(),
              sgdCorreo: new FormControl(),
              sgdUsuarioTelefono: new FormControl(),
              sgdUsuarioUsuario: new FormControl(),
              sgdUsuarioPassword: new FormControl(),
              sgdRoles: new FormGroup({

                sgdRolId:     new FormControl(),
                sgdRolNombre: new FormControl(),
                sgdRolActivo: new FormControl()
              }),
              sgdUsuarioActivo: new FormControl()
            }),
            ctgMaterialEscrito: new FormGroup({
              ctgMaterialEscritoId: new FormControl(),
              ctgMaterialEscritoCorrelativo: new FormControl(),
              ctgMaterialEscritoTitulo: new FormControl(),
              ctgMaterialEscritoAutor: new FormControl(),
              ctgMaterialEscritoNumeroPaginas: new FormControl(),
              ctgMaterialEscritoEditorial: new FormControl(),
              ctgMaterialEscritoIsbn: new FormControl(),
              ctgMaterialEscritoAnioPublicacion: new FormControl(),
              ctgMaterialEscritoUnidadesDisponibles: new FormControl(),
              ctgTipoArticulo : new FormGroup({
                ctgTipoArticuloId: new FormControl(),
                ctgTipoarticuloDescripcion: new FormControl(),
                ctgTIpoArticuloActivo: new FormControl()
              }),
              ctgMaterialEscritoPeriodicidad: new FormControl(),
              ctgMaterialEscritoFechaPublicacion: new FormControl(),
              ctgMaterialEscritoTema: new FormControl(),
              ctgMaterialEscritoIdioma: new FormControl(),
              ctgMaterialEscritoInformacionAdicional: new FormControl(),
            }),
            gstPrestamoMora: new FormControl(0.0),
            ctgEstadoPrestamo: new FormGroup({
              ctgEstadoPrestamoId: new FormControl(1),
              ctgEstadoPrestamoEstado: new FormControl(),
              ctgEstadoPrestamoActivo: new FormControl()
            })
      })  
  }


  public async search(event: any) {
    if(event.target.criterioBusqueda.value!)
      this._Busquedainit(event.target.criterioBusqueda.value);
    else
      this._init();
  }

  confirm(articulo: ContentPrestamo) {
    this.confirmationService.confirm({
        message: '¿Desea Devolver el art&iacute;culo ' + articulo.gstPrestamoId + '?',
        accept: () => {
              this.formPrestamo = new FormGroup({
                    gstPrestamoId: new FormControl()
              }) 

          this._prestamoController.deletePrestamo(articulo.gstPrestamoId);
           
        }
    }); 
  }
}
