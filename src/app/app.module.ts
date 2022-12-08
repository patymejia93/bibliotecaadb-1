import { NgModule } from '@angular/core';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AppLayoutModule } from './modules/layout/app.layout.module';
import { NotfoundComponent } from './modules/demo/components/notfound/notfound.component';
import { ProductService } from './modules/demo/service/product.service';
import { CountryService } from './modules/demo/service/country.service';
import { CustomerService } from './modules/demo/service/customer.service';
import { EventService } from './modules/demo/service/event.service';
import { IconService } from './modules/demo/service/icon.service';
import { NodeService } from './modules/demo/service/node.service';
import { PhotoService } from './modules/demo/service/photo.service';

@NgModule({
    declarations: [
        AppComponent, NotfoundComponent
    ],
    imports: [
        AppRoutingModule,
        AppLayoutModule,
    ],
    providers: [
        { provide: LocationStrategy, useClass: HashLocationStrategy },
        CountryService, CustomerService, EventService, IconService, NodeService,
        PhotoService, ProductService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
