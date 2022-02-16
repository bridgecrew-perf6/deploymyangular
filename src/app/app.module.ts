import {NgModule , CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { RegisterComponent } from './register/register.component';
import{MatDatepickerModule} from '@angular/material/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatInputModule} from '@angular/material/input';
import{MatNativeDateModule }from '@angular/material/core';
import {MatRadioModule} from '@angular/material/radio';

import { ReactiveFormsModule,  } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { TooltipModule } from "primeng/tooltip";
import { ButtonModule } from "primeng/button";
//import {MatTooltipModule} from '@angular/material/tooltip';

//import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { InputTextModule } from 'primeng/inputtext';
import { RippleModule } from 'primeng/ripple';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDatepickerModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatNativeDateModule,
    MatRadioModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    TooltipModule,
    ButtonModule,
    //MatTooltipModule,
    //NgbModule
    InputTextModule,
    RippleModule
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
