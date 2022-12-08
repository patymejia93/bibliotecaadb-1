import { Component } from '@angular/core';
import { ConfirmationService } from 'primeng/api';

@Component({
    selector: 'app-usuarios',
    templateUrl: './usuarios.component.html',
    styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent {
    display: boolean = false;
    cities: any[];
    selectedCity: any;

    constructor(
        private confirmationService: ConfirmationService
    ) {
        this.cities = [
            { name: 'Habilitado', code: 'NY' },
            { name: 'Deshabilitado', code: 'RM' },
        ];
    }


    showDialog() {
        this.display = true;
    }

    confirm() {
        this.confirmationService.confirm({
            message: '¿Estas seguro de eliminar este registro?',
            accept: () => {
                //Actual logic to perform a confirmation
            }
        });
    }

}
