//import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
//import { MatMenuModule } from '@angular/material/menu';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-first-project';

  url = "";



  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart)
        this.url = event.url;
      console.log(this.url);
    })

  }
  public pages2 = [{ //kreirali smo objekat
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
    },
    {
      pageTitle: 'Cena',
      link: 'price',
      subPages: [{
        pageTitle: 'Akcijske cene',
        link: 'price'
      },
        {
          pageTitle: 'Sisanje ovaca',
          link: 'price'
        }
       
        

      ]
    },
     {
      pageTitle: 'Kontakt',
      link: 'contact',
      subPages: [{
        pageTitle: 'Akcijske cene',
        link: 'contact'
      },
        {
          pageTitle: 'Sisanje ovaca',
          link: 'contact'
        }
       
        

      ]
    }


  ]

  pageClick(item: any) { //ove dve funkcije rade istu stvar, moze se sve resiti i sa jednom al neka ostane zbog primera
    this.router.navigate(["/"+item] )
  }


  subPagesClick(item: any) {

    this.router.navigate(["/" + item])
  }

 






  
 
  

  //constructor(private router: Router) { }

  


  /*promenljiva: any;
 


  constructor(private http_client: HttpClient) {

  }
  ngOnInit(): void {
    console.log("Ucitavanje strane....");
    //throw new Error('Method not implemented.');//
    this.ucitavanjePodataka();
    

      
    
  }
  ucitavanjePodataka() {
    this.http_client.get("https://jsonplaceholder.typicode.com/posts").subscribe(x => {
      this.promenljiva = x;
      console.log(x);
    })
  }*/
}
