import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ConfirmationService, MessageService } from 'primeng/api';
import { LimitePrestamosControllerService } from '../../controllers/limitePrestamos-controller.service';
import { ContentLimitePrestamos, LimitePrestamos } from '../../interfaces/limitePrestamos';

@Component({
    selector: 'app-limitePrestamos',
    templateUrl: './limitePrestamos.component.html',
    styleUrls: ['./limitePrestamos.component.scss']
})
export class LimitePrestamosComponent implements OnInit {

    display: boolean = false;
    displayE: boolean = false;
    status: any[];
    selectedCity: any;

    public limitePrestamos: LimitePrestamos | null = null;
    public hasLoad: boolean = false;
    public formLimitePrestamos: FormGroup | null = null
    public formLimitePrestamosE: FormGroup | null = null

    constructor(
        private confirmationService: ConfirmationService,
        private _limitePrestamosController: LimitePrestamosControllerService,
        private _messageService: MessageService
    ) {
        this.status = [
            { name: 'Activo', value: '1' },
            { name: 'Inactivo', value: '0' },
        ];
    }

    ngOnInit(): void {
        this._init();
    }

    private async _init() {
        this.limitePrestamos = await this._limitePrestamosController.getRols();
        this._initForm();
        this.hasLoad = true;
    }

    private _initForm() {
        this.formLimitePrestamos = new FormGroup({
            sgdLimitePrestamosNombre: new FormControl(null, { validators: [Validators.required] }),
            sgdLimitePrestamosActivo: new FormControl('1', { validators: [Validators.required] })
        })

        this.formLimitePrestamosE = new FormGroup({
            sgdLimitePrestamosId: new FormControl(),
            sgdLimitePrestamosNombre: new FormControl(),
            sgdLimitePrestamosActivo: new FormControl()
        })
        
    }

    public async sendData() {
        console.log('first')
        const response: ContentLimitePrestamos | null = await this._limitePrestamosController.postRols(this.formLimitePrestamos!.value);
        if (response) {
            this._messageService.add({ severity: 'success', summary: 'Acción exitosa' });
        } else {
            this._messageService.add({ severity: 'error', summary: 'Acción denegada', detail: 'Al parecer hubo un error con la solicitud inténtelo mas tarde.' });
        }
        this.ngOnInit();
    }

    public async sendDataE() {
        console.log('Edit')
        const response: ContentLimitePrestamos | null = await this._limitePrestamosController.postEditRols(this.formLimitePrestamosE!.value);
        if (response) {
            this._messageService.add({ severity: 'success', summary: 'Acción exitosa' });
        } else {
            this._messageService.add({ severity: 'error', summary: 'Acción denegada', detail: 'Al parecer hubo un error con la solicitud inténtelo mas tarde.' });
        }
        this.ngOnInit();
    }

    showDialog() {
        this.display = true;
    }

    showDialogE(rol: any) {
        this.displayE = true;

        this.formLimitePrestamosE = new FormGroup({
            sgdRolId: new FormControl(rol.sgdRolId),
            sgdRolNombre: new FormControl(rol.sgdRolNombre),
            sgdRolActivo: new FormControl(rol.sgdRolActivo)
        })
    }

    confirm(id: number) {
        this.confirmationService.confirm({
            message: '¿Estas seguro de eliminar este registro?',
            accept: () => {
                this._limitePrestamosController.deleteLimitePrestamos(id);
                this._messageService.add({ severity: 'success', summary: 'Acción exitosa' });
                this.ngOnInit();

            }
        });

        
    }
}
