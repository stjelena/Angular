import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PocetnaComponent } from './pocetna/pocetna.component';
import { LekarComponent } from './lekar/lekar.component';
import { PacijentComponent } from './pacijent/pacijent.component';
import { MenadzerComponent } from './menadzer/menadzer.component';
import { LoginMenComponent } from './login-men/login-men.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PaclekComponent } from './paclek/paclek.component';
import { LekarprofilComponent } from './lekarprofil/lekarprofil.component';
import { PreglediComponent } from './pregledi/pregledi.component';

const routes: Routes = [
  {path: "", component:PocetnaComponent},
  {path: "lekar", component:LekarComponent},
  {path: "pacijent", component:PacijentComponent},
  {path: "menadzer", component:MenadzerComponent},
  {path: "login-men", component:LoginMenComponent},
  {path: "login", component:LoginComponent},
  {path: "register", component:RegisterComponent},
  {path: "paclek", component:PaclekComponent},
  {path: "lekarprofil", component:LekarprofilComponent},
  {path: "pregledi", component:PreglediComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
