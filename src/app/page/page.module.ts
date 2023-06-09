import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PriceComponent } from './price/price.component';
import { ContactComponent } from './contact/contact.component';
import { MatButtonModule } from '@angular/material/button';// mora da se instalira angular materijal i angular cmd kroz  konzolu, tu su butoni tabele itd
import { MatMenuModule } from '@angular/material/menu';
import { PortalModule } from '@angular/cdk/portal';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { LoginComponent } from './login/login.component';
import { AvatarModule } from 'ngx-avatar';
import { UsersComponent } from './users/users.component';

@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    PriceComponent,
    ContactComponent,
    LoginComponent,
    UsersComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatMenuModule,
    PortalModule, //ova dva bi valjalo odmah importovati posto su potrebni za stosta
    BrowserAnimationsModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    AvatarModule



  ],
  exports: [
    CommonModule, // ovde si imao gresku, da bi se videlo u drugim komponentama mora se eksportovati svi moduli
    MatButtonModule,
    MatMenuModule,
    PortalModule, 
    BrowserAnimationsModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    AvatarModule
  ],
})
export class PageModule { }
