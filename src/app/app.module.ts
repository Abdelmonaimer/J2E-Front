import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from "@angular/forms";
import {ReactiveFormsModule} from "@angular/forms";

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AppRoutingModule } from './app-routing.module';
import { TerrainsComponent } from './terrains/terrains.component';
import { HttpClientModule } from '@angular/common/http';
import { TaxeTnbComponent } from './taxetnb/taxetnb.component';
import { TauxComponent } from './taux/taux.component';
import { NavbarComponent } from './navbar/navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    TerrainsComponent,
    TaxeTnbComponent,
    TauxComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
