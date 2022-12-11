import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ConfirmationService, MessageService } from 'primeng/api';
import { RolControllerService } from '../../controllers/rol-controller.service';
import { ContentRol, Rol } from '../../interfaces/rol';

@Component({
    selector: 'app-roles',
    templateUrl: './roles.component.html',
    styleUrls: ['./roles.component.scss']
})
export class RolesComponent implements OnInit {

    display: boolean = false;
    displayE: boolean = false;
    status: any[];
    selectedCity: any;

    public rols: Rol | null = null;
    public hasLoad: boolean = false;
    public formRol: FormGroup | null = null
    public formRolE: FormGroup | null = null

    constructor(
        private confirmationService: ConfirmationService,
        private _rolController: RolControllerService,
        private _messageService: MessageService
    ) {
        this.status = [
            { name: 'Activo', value: '1' },
            { name: 'Desactivado', value: '0' },
        ];
    }

    ngOnInit(): void {
        this._init();
    }

    private async _init() {
        this.rols = await this._rolController.getRols();
        this._initForm();
        this.hasLoad = true;
    }

    private _initForm() {
        this.formRol = new FormGroup({
            sgdRolNombre: new FormControl(null, { validators: [Validators.required] }),
            sgdRolActivo: new FormControl('1', { validators: [Validators.required] })
        })

        this.formRolE = new FormGroup({
            sgdRolId: new FormControl(),
            sgdRolNombre: new FormControl(),
            sgdRolActivo: new FormControl()
        })
        
    }

    public async sendData() {
        console.log('first')
        const response: ContentRol | null = await this._rolController.postRols(this.formRol!.value);
        if (response) {
            this._messageService.add({ severity: 'success', summary: 'Acción exitosa' });
        } else {
            this._messageService.add({ severity: 'error', summary: 'Acción denegada', detail: 'Al parecer hubo un error con la solicitud inténtelo mas tarde.' });
        }
    }

    public async sendDataE() {
        console.log('Edit')
        const response: ContentRol | null = await this._rolController.postEditRols(this.formRolE!.value);
        if (response) {
            this._messageService.add({ severity: 'success', summary: 'Acción exitosa' });
        } else {
            this._messageService.add({ severity: 'error', summary: 'Acción denegada', detail: 'Al parecer hubo un error con la solicitud inténtelo mas tarde.' });
        }
    }

    showDialog() {
        this.display = true;
    }

    showDialogE(rol: any) {
        this.displayE = true;

        this.formRolE = new FormGroup({
            sgdRolId: new FormControl(rol.sgdRolId),
            sgdRolNombre: new FormControl(rol.sgdRolNombre),
            sgdRolActivo: new FormControl(rol.sgdRolActivo)
        })
    }

    confirm(id: number) {
        this.confirmationService.confirm({
            message: '¿Estas seguro de eliminar este registro?',
            accept: () => {
                this._rolController.deleteRols(id);
                this._init();
                this._messageService.add({ severity: 'success', summary: 'Acción exitosa' });
               
            }
        });

        
    }
}
