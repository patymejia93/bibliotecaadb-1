import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ConfirmationService, MessageService } from 'primeng/api';
import { MaterialEscritoControllerService } from '../../controllers/material-escrito-controller.service';
import { RolControllerService } from '../../controllers/rol-controller.service';
import { ContentMaterialEscrito, ContentMaterialEscritoCreate, MaterialEscrito } from '../../interfaces/materialEscrito';
import { ContentRol, Rol } from '../../interfaces/rol';
import { MaterialEscritoService } from '../../services/material-escrito.service';

@Component({
  selector: 'app-material-escrito',
  templateUrl: './material-escrito.component.html',
  styleUrls: ['./material-escrito.component.scss']
})
export class MaterialEscritoComponent implements OnInit {

    display: boolean = false;
    displayE: boolean = false;
    status: any[];
    selectedCity: any;

    public materialesEscritos: MaterialEscrito | null = null;
    public hasLoad: boolean = false;
    public formMatEsc: FormGroup | null = null
    public formMatEscE: FormGroup | null = null

    constructor(
        private confirmationService: ConfirmationService,
        private _matEscController: MaterialEscritoControllerService,
        private _messageService: MessageService
    ) {
        this.status = [
            { name: 'Libros', value: 1 },
            { name: 'Revistas', value: 2 }
        ];
    }

    ngOnInit(): void {
        this._init();
    }

    private async _init() {
        this.materialesEscritos = await this._matEscController.getMatEsc();
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

    public async sendData() {
        console.log('first')
        const response: ContentMaterialEscrito | null = await this._matEscController.postMatEsc(this.formMatEsc!.value);
        if (response) {
            this._messageService.add({ severity: 'success', summary: 'Acción exitosa' });
            this.display = false;
        } else {
            this._messageService.add({ severity: 'error', summary: 'Acción denegada', detail: 'Al parecer hubo un error con la solicitud inténtelo mas tarde.' });
        }
        this.ngOnInit();
    }

    public async sendDataE() {
        console.log('Edit')
        const response: ContentMaterialEscrito | null = await this._matEscController.postEditMatEsc(this.formMatEscE!.value);
        if (response) {
            this._messageService.add({ severity: 'success', summary: 'Acción exitosa' });
            this.display = false;
        } else {
            this._messageService.add({ severity: 'error', summary: 'Acción denegada', detail: 'Al parecer hubo un error con la solicitud inténtelo mas tarde.' });
        }
        this.ngOnInit();
    }

    showDialog() {
        this.display = true;
    }

    showDialogE(matEsc: any) {
        this.displayE = true;

        this.formMatEscE = new FormGroup({
          ctgMaterialEscritoId: new FormControl(matEsc.ctgMaterialEscritoId),
          ctgMaterialEscritoCorrelativo: new FormControl(matEsc.ctgMaterialEscritoCorrelativo),
          ctgMaterialEscritoTitulo: new FormControl(matEsc.ctgMaterialEscritoTitulo),
          ctgMaterialEscritoAutor: new FormControl(matEsc.ctgMaterialEscritoAutor),
          ctgMaterialEscritoNumeroPaginas: new FormControl(matEsc.ctgMaterialEscritoNumeroPaginas),
          ctgMaterialEscritoEditorial: new FormControl(matEsc.ctgMaterialEscritoEditorial),
          ctgMaterialEscritoIsbn: new FormControl(matEsc.ctgMaterialEscritoIsbn),
          ctgMaterialEscritoAnioPublicacion: new FormControl(matEsc.ctgMaterialEscritoAnioPublicacion),
          ctgMaterialEscritoUnidadesDisponibles: new FormControl(matEsc.ctgMaterialEscritoUnidadesDisponibles),
          ctgTipoArticulo: new FormGroup({
            ctgTipoArticuloId: new FormControl(matEsc.ctgTipoArticulo.ctgTipoArticuloId),
            ctgTipoarticuloDescripcion: new FormControl(),
            ctgTIpoArticuloActivo: new FormControl()
          }),
          ctgMaterialEscritoPeriodicidad: new FormControl(matEsc.ctgMaterialEscritoPeriodicidad),
          ctgMaterialEscritoFechaPublicacion: new FormControl(matEsc.ctgMaterialEscritoFechaPublicacion),
          ctgMaterialEscritoTema: new FormControl(matEsc.ctgMaterialEscritoTema),
          ctgMaterialEscritoIdioma: new FormControl(matEsc.ctgMaterialEscritoIdioma),
          ctgMaterialEscritoInformacionAdicional: new FormControl(matEsc.ctgMaterialEscritoInformacionAdicional)
        })
    }

    confirm(id: number) {
        this.confirmationService.confirm({
            message: '¿Estas seguro de eliminar este registro?',
            accept: () => {
                this._matEscController.deleteMatEsc(id);
                this._init();
                this._messageService.add({ severity: 'success', summary: 'Acción exitosa' });
                this.ngOnInit();
            }
        }); 
        this.ngOnInit();
    }

}
