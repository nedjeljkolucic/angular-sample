import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//import { HttpClientModule } from '@angular/common/http'; // jasno, import sa http stranice angular common odakle smo uzeli httpclientmodule

//import { MatMenuModule } from '@angular/material/menu';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageModule } from './page/page.module'; //import pagemodule ts koji smo kreirali

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   // HttpClientModule,
    PageModule //ovde je vazno da sve komponente moraju proci kroz ovaj app modul ili ovako indirektno preko pagemodula ili direktno u app modulu
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
