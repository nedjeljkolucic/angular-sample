import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{


  constructor(private router: Router) { }
  
 /* public pages2 = [{ //kreirali smo objekat
    pageTitle: 'Pocetna',
    link: 'home',
    subPages: [

    ]
  },
  {
    pageTitle: 'O nama',
    link: 'about',
    subPages: [
      {
        pageTitle: 'Nasi projekti',// mora da bude u viticastoj zagradi jer je objekat.
        link: 'about'
      },
      {
        pageTitle: 'djuro pucar', //posto smo uradili for petlju u home.html prikaziace se svi objekti koje kreiramo u subPages
        link: 'about'
      }

    ]
  }
  ]
 subPagesClick(item: any) {

    this.router.navigate(["/" + item])
 }*/

  ngOnInit(): void {

  }

 
  


  
 
}
