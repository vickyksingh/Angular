import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import{HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { AverageComponent } from './average/average.component';
import { MyhttpComponent } from './myhttp/myhttp.component';
import { RactangleService } from './services/ractangle.service';
import { CalculaterServices } from './services/calculater.service';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeService } from './services/employee.service';
import { ProductComponent } from './Product/product.component';
import { ProductService } from './services/product.service';
import {NgxPaginationModule} from 'ngx-pagination';
import { MessageService } from './services/message.service';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import { MessageComponent } from './message/message.component';
import { RectiveComponent } from './rective/rective.component';
import { ReacbuildComponent } from './reacbuild/reacbuild.component';
import { ProdductformComponent } from './prodductform/prodductform.component';
import { LoginComponent } from './login/login.component';
import { EmployeefrmComponent } from './emplyeeForm/employefrom.component';




@NgModule({
  declarations: [
    AppComponent,
    AverageComponent,
    MyhttpComponent,
    EmployeeComponent,
    ProductComponent,
    MessageComponent,
    RectiveComponent,
    ReacbuildComponent,
    ProdductformComponent,
    LoginComponent,
    EmployeefrmComponent,
    
    

    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgxPaginationModule, 
    NgbModule,
    NgbAlertModule,
    ReactiveFormsModule
  ],
  providers: [RactangleService,CalculaterServices, EmployeeService,ProductService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
