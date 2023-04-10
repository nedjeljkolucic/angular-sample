import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './page/about/about.component';
import { ContactComponent } from './page/contact/contact.component';
import { HomeComponent } from './page/home/home.component';
import { LoginComponent } from './page/login/login.component';
import { PriceComponent } from './page/price/price.component';


const routes: Routes = [{ path: '', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'price', component: PriceComponent },
  { path: 'login', component: LoginComponent }
];
 // ovde se definisu sve rute npr /home, /about itd. u uglastim zagradama otvori se viticasta radi kreiranja novog objekta
//red 5 - ruta je takva da ako stranica nema sadrzaja uvek otvori homepage odnosno homeComponent

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
