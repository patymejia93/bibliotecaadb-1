import { Component } from '@angular/core';
import { ConfirmationService } from 'primeng/api';

@Component({
    selector: 'app-roles',
    templateUrl: './roles.component.html',
    styleUrls: ['./roles.component.scss']
})
export class RolesComponent {

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
