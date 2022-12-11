import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ConfirmationService, MessageService } from 'primeng/api';
import { UsuarioControllerService } from '../../controllers/usuario-controller.service';
import { ContentUsuario, Usuario } from '../../interfaces/usuario';

@Component({
    selector: 'app-usuarios',
    templateUrl: './usuarios.component.html',
    styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit {

    display: boolean = false;
    displayE: boolean = false;
    status: any[];
    roles: any[];
    selectedCity: any;

    public usuarios: Usuario | null = null;
    public hasLoad: boolean = false;
    public formUsuario: FormGroup | null = null
    public formUsuarioE: FormGroup | null = null

    constructor(
        private confirmationService: ConfirmationService,
        private _usuarioController: UsuarioControllerService,
        private _messageService: MessageService
    ) {
        this.status = [
            { name: 'Activo', value: '1' },
            { name: 'Inactivo', value: '0' },
        ];

        this.roles = [
            { name: 'Administrador', value: 1 },
            { name: 'Docente', value: 2 },
            { name: 'Estudiante', value: 3 }

        ];
    }

    ngOnInit(): void {
        this._init();
    }

    private async _init() {
        this.usuarios = await this._usuarioController.getUsuarios();
        this._initForm();
        this.hasLoad = true;
    }

    private _initForm() {
        this.formUsuario = new FormGroup({
            sgdUsuarioPrimerNombre: new FormControl(null, { validators: [Validators.required] }),
            sgdUsuarioPrimerApellido: new FormControl(null, { validators: [Validators.required] }),
            sgdCorreo: new FormControl(null, { validators: [Validators.required] }),
            sgdUsuarioTelefono: new FormControl(null, { validators: [Validators.required] }),
            sgdUsuarioPassword: new FormControl(null, { validators: [Validators.required] }),
            sgdUsuarioUsuario: new FormControl(null, { validators: [Validators.required] }),
            sgdRoles: new FormGroup({
                sgdRolId: new FormControl(),
                sgdRolNombre: new FormControl(),
                sgdRolActivo: new FormControl()
            }),
            sgdUsuarioActivo: new FormControl('1', { validators: [Validators.required] })
        })

        this.formUsuarioE = new FormGroup({
            sgdUsuarioId: new FormControl(),
            sgdUsuarioPrimerNombre: new FormControl(),
            sgdUsuarioPrimerApellido: new FormControl(),
            sgdCorreo: new FormControl(),
            sgdUsuarioTelefono: new FormControl(),
            sgdUsuarioPassword: new FormControl(),
            sgdUsuarioUsuario: new FormControl(),
            sgdRoles: new FormGroup({
                sgdRolId: new FormControl(),
                sgdRolNombre: new FormControl(),
                sgdRolActivo: new FormControl()
            }),            
            sgdUsuarioActivo: new FormControl()
        })
        
    }

    public async sendData() {
        console.log('first')
        const response: ContentUsuario | null = await this._usuarioController.postUsuarios(this.formUsuario!.value);
        if (response) {
           
            this._messageService.add({ severity: 'success', summary: 'Acción exitosa' });
        } else {
            this._messageService.add({ severity: 'error', summary: 'Acción denegada', detail: 'Al parecer hubo un error con la solicitud inténtelo mas tarde.' });
        }
        this.ngOnInit();
    }

    public async sendDataE() {
        console.log('Edit')
        const response: ContentUsuario | null = await this._usuarioController.postEditUsuarios(this.formUsuarioE!.value);
        if (response) {
            this._messageService.add({ severity: 'success', summary: 'Acción exitosa' });
        } else {
            this._messageService.add({ severity: 'error', summary: 'Acción denegada', detail: 'Al parecer hubo un error con la solicitud. Inténtelo mas tarde.' });
        }
        this.ngOnInit();
    }

    showDialog() {
        this.display = true;
    }

    showDialogE(usuario: any) {
        this.displayE = true;

        this.formUsuarioE = new FormGroup({
            sgdUsuarioId: new FormControl(usuario.sgdUsuarioId),
            sgdUsuarioPrimerNombre: new FormControl(usuario.sgdUsuarioPrimerNombre),
            sgdUsuarioPrimerApellido: new FormControl(usuario.sgdUsuarioPrimerApellido),
            sgdCorreo: new FormControl(usuario.sgdCorreo),
            sgdUsuarioTelefono: new FormControl(usuario.sgdUsuarioTelefono),
            sgdUsuarioPassword: new FormControl(usuario.sgdUsuarioPassword),
            sgdUsuarioUsuario: new FormControl(usuario.sgdUsuarioUsuario),
            sgdRoles: new FormGroup({
                sgdRolId: new FormControl(usuario.sgdRoles.sgdRolId),
                sgdRolNombre: new FormControl(),
                sgdRolActivo: new FormControl()
            }),    
            sgdUsuarioActivo: new FormControl(usuario.sgdUsuarioActivo)

        })
    }

    confirm(id: number) {
        this.confirmationService.confirm({
            message: '¿Estas seguro de eliminar este registro?',
            accept: () => {
                this._usuarioController.deleteUsuarios(id);
                this._messageService.add({ severity: 'success', summary: 'Acción exitosa' });
                this.ngOnInit();
            }
        });

        
    }
}
