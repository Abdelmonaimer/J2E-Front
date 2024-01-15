import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from "./login/login.component";
import { SignupComponent } from "./signup/signup.component";
import {TerrainsComponent} from "./terrains/terrains.component";
import {TaxeTnbComponent} from "./taxetnb/taxetnb.component";
import {AuthGuard} from "./services/authguard.service";
import {TauxComponent} from "./taux/taux.component";

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'terrains', component: TerrainsComponent, canActivate: [AuthGuard] },
  { path: 'taxetnb/:nom', component: TaxeTnbComponent, canActivate: [AuthGuard] },
  { path: 'taux', component: TauxComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
