import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ConfirmationService, MessageService } from 'primeng/api';
import { MaterialAudiovisualControllerService } from '../../controllers/material-audiovisual-controller.service';
import { ContentMaterialAudiovisual, ContentMaterialAudiovisualCreate, MaterialAudiovisual } from '../../interfaces/materialAudiovisual';
import { MaterialAudiovisualService } from '../../services/material-audiovisual.service';

@Component({
  selector: 'app-material-audiovisual',
  templateUrl: './material-audiovisual.component.html',
  styleUrls: ['./material-audiovisual.component.scss']
})
export class MaterialAudiovisualComponent implements OnInit {

    display: boolean = false;
    displayE: boolean = false;
    status: any[];
    selectedCity: any;

    public materialesAudiovisuales: MaterialAudiovisual | null = null;
    public hasLoad: boolean = false;
    public formMatEsc: FormGroup | null = null
    public formMatEscE: FormGroup | null = null

    constructor(
        private confirmationService: ConfirmationService,
        private _matEscController: MaterialAudiovisualControllerService,
        private _messageService: MessageService
    ) {
        this.status = [
            { name: 'CD', value: 3 },
            { name: 'DVD', value: 4 }
        ];
    }

    ngOnInit(): void {
        this._init();
    }

    private async _init() {
        this.materialesAudiovisuales = await this._matEscController.getMatEsc();
        this._initForm();
        this.hasLoad = true;
    }

    private _initForm() {
        this.formMatEsc = new FormGroup({
            ctgMaterialAudiovisualId: new FormControl(),
            ctgMaterialAudiovisualCorrelativo: new FormControl(),
            ctgMaterialAudiovisualTitulo: new FormControl(),
            ctgMaterialAudiovisualDirector: new FormControl(),
            ctgMaterialAudiovisualDuracion: new FormControl(),
            ctgMaterialAudiovisualGenero: new FormControl(),
            ctgMaterialAudiovisualUnidadesDisponibles: new FormControl(),
            ctgMaterialAudiovisualIsbn: new FormControl(),
            ctgMaterialAudiovisualAutor: new FormControl(),
            ctgTipoArticulo: new FormGroup({
              ctgTipoArticuloId: new FormControl(3),
              ctgTipoarticuloDescripcion: new FormControl(),
              ctgTIpoArticuloActivo: new FormControl()
            }),
            ctgMaterialAudiovisualIdioma: new FormControl()

        })

        this.formMatEscE = new FormGroup({
            ctgMaterialAudiovisualId: new FormControl(),
            ctgMaterialAudiovisualCorrelativo: new FormControl(),
            ctgMaterialAudiovisualTitulo: new FormControl(),
            ctgMaterialAudiovisualDirector: new FormControl(),
            ctgMaterialAudiovisualDuracion: new FormControl(),
            ctgMaterialAudiovisualGenero: new FormControl(),
            ctgMaterialAudiovisualUnidadesDisponibles: new FormControl(),
            ctgMaterialAudiovisualIsbn: new FormControl(),
            ctgMaterialAudiovisualAutor: new FormControl(),
            ctgTipoArticulo: new FormGroup({
              ctgTipoArticuloId: new FormControl(3),
              ctgTipoarticuloDescripcion: new FormControl(),
              ctgTIpoArticuloActivo: new FormControl()
            }),
            ctgMaterialAudiovisualIdioma: new FormControl()
        })
        
    }

    public async sendData() {
        console.log('first')
        const response: ContentMaterialAudiovisual | null = await this._matEscController.postMatEsc(this.formMatEsc!.value);
        if (response) {
            this._messageService.add({ severity: 'success', summary: 'Acción exitosa' });
            this.display = false;
        } else {
            this._messageService.add({ severity: 'error', summary: 'Acción denegada', detail: 'Al parecer hubo un error con la solicitud inténtelo mas tarde.' });
        }
    }

    public async sendDataE() {
        console.log('Edit')
        const response: ContentMaterialAudiovisual | null = await this._matEscController.postEditMatEsc(this.formMatEscE!.value);
        if (response) {
            this._messageService.add({ severity: 'success', summary: 'Acción exitosa' });
            this.display = false;
        } else {
            this._messageService.add({ severity: 'error', summary: 'Acción denegada', detail: 'Al parecer hubo un error con la solicitud inténtelo mas tarde.' });
        }
    }

    showDialog() {
        this.display = true;
    }

    showDialogE(matEsc: any) {
        this.displayE = true;

        this.formMatEscE = new FormGroup({
          ctgMaterialAudiovisualId: new FormControl(matEsc.ctgMaterialAudiovisualId),
          ctgMaterialAudiovisualCorrelativo: new FormControl(matEsc.ctgMaterialAudiovisualCorrelativo),
          ctgMaterialAudiovisualTitulo: new FormControl(matEsc.ctgMaterialAudiovisualTitulo),
          ctgMaterialAudiovisualDirector: new FormControl(matEsc.ctgMaterialAudiovisualDirector),
          ctgMaterialAudiovisualDuracion: new FormControl(matEsc.ctgMaterialAudiovisualDuracion),
          ctgMaterialAudiovisualGenero: new FormControl(matEsc.ctgMaterialAudiovisualGenero),
          ctgMaterialAudiovisualUnidadesDisponibles: new FormControl(matEsc.ctgMaterialAudiovisualUnidadesDisponibles),
          ctgMaterialAudiovisualIsbn: new FormControl(matEsc.ctgMaterialAudiovisualIsbn),
          ctgMaterialAudiovisualAutor: new FormControl(matEsc.ctgMaterialAudiovisualAutor),
          ctgTipoArticulo: new FormGroup({
            ctgTipoArticuloId: new FormControl(matEsc.ctgTipoArticulo.ctgTipoArticuloId),
            ctgTipoarticuloDescripcion: new FormControl(),
            ctgTIpoArticuloActivo: new FormControl()
          }),
          ctgMaterialAudiovisualIdioma: new FormControl(matEsc.ctgMaterialAudiovisualIdioma)
        })
    }

    confirm(id: number) {
        this.confirmationService.confirm({
            message: '¿Estas seguro de eliminar este registro?',
            accept: () => {
                this._matEscController.deleteMatEsc(id);
                this._init();
                this._messageService.add({ severity: 'success', summary: 'Acción exitosa' });
               
            }
        }); 
    }

}