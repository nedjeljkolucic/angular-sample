import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { AboutService } from './about.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  @ViewChild(MatPaginator) paginator!: MatPaginator; //pristupili smo komponennti about.htmlu matpaginatoru, opet je trebao uzvicnik.


  dataSource = new MatTableDataSource<any>(); //kreiranje objekta any formata za datasource u komponenti html

  displayColumns = ['body','id','title','userId']; //promenljiva koja je niz u kom se definisu se nazivi kolona tabele koju treba da prikazemo, nazivi moraju bit isti kao u bazi
  constructor(private service: AboutService) { } //ovde smo injektovali servis i zatim treba da pozovemo metodu sa tog servsa getPosts
  



  ngOnInit(): void { //sve sto se pozove u okviru funkcije ngOnInit izvrsava se na ucitavanju strane

    this.service.getPosts().subscribe((x: any) => {
      this.dataSource.data = x; //ovo data je dodato da bi mogli raditi pageing i sortiranje, inace radi i bez njega.
      this.dataSource.paginator = this.paginator;
      console.log(x);

    }) //subscribe vrsta slusanja(listener) preko koje radimo citanje http-a/jedan od nacina za citanje asinhronih


  }
}
