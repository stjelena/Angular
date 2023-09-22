import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PocetnaComponent } from './pocetna/pocetna.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LekarComponent } from './lekar/lekar.component';
import { PacijentComponent } from './pacijent/pacijent.component';
import { MenadzerComponent } from './menadzer/menadzer.component';
import { LoginMenComponent } from './login-men/login-men.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PaclekComponent } from './paclek/paclek.component';
import { LekarprofilComponent } from './lekarprofil/lekarprofil.component';
import { PreglediComponent } from './pregledi/pregledi.component';


@NgModule({
  declarations: [
    AppComponent,
    PocetnaComponent,
    LekarComponent,
    PacijentComponent,
    MenadzerComponent,
    LoginMenComponent,
    LoginComponent,
    RegisterComponent,
    PaclekComponent,
    LekarprofilComponent,
    PreglediComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
