import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ConfirmationService, MessageService } from 'primeng/api';
import { MaterialAudiovisualControllerService } from 'src/app/modules/mantenimientos/controllers/material-audiovisual-controller.service';
import { ContentMaterialAudiovisual, MaterialAudiovisual } from 'src/app/modules/mantenimientos/interfaces/materialAudiovisual';

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
        this.materialesAudiovisuales = await this._matEscController.getMatEscDisp();
        this._initForm();
        this.hasLoad = true;
    }

    private async _Busquedainit(criterio: string) {
      this.materialesAudiovisuales = await this._matEscController.getMatEscBusqeueda(criterio);
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

    public async search(event: any) {
      if(event.target.criterioBusqueda.value!)
        this._Busquedainit(event.target.criterioBusqueda.value);
      else
        this._init();
    }

}
