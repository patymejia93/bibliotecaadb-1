import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { LayoutService } from 'src/app/modules/layout/service/app.layout.service';
import { AuthControllerService } from '../controllers/auth-controller.service';
import { TokenParams } from '../interfaces/token-params';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styles: [`
        :host ::ng-deep .pi-eye,
        :host ::ng-deep .pi-eye-slash {
            transform:scale(1.6);
            margin-right: 1rem;
            color: var(--primary-color) !important;
        }
    `]
})
export class LoginComponent implements OnInit {

    valCheck: string[] = ['remember'];
    password!: string;

    public formLogin: FormGroup = new FormGroup({});

    constructor(
        public layoutService: LayoutService,
        private _authController: AuthControllerService,
        private _router: Router,
        private _messageService: MessageService) { }

    ngOnInit(): void {
        this._initForm();
    }
    private _initForm() {

        this.formLogin = new FormGroup({
            username: new FormControl(null, { validators: [Validators.required] }),
            password: new FormControl(null, { validators: [Validators.required] }),
            grant_type: new FormControl('password')
        })
    }

    public async sendData() {
        const paramsRequest: TokenParams = this.formLogin.value;
        const response: boolean = await this._authController.getToken(paramsRequest);
        if (response) {
            this._messageService.add({severity:'success', summary:'Acción exitosa', detail:'Bienvenido'});
            this._router.navigate(['/']);
        } else {
            this._messageService.add({severity:'error', summary:'Acción denegada', detail:'Al parecer hubo un error con la solicitud inténtelo mas tarde.'});
        }
    }
}
