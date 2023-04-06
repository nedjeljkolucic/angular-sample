import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ // kako bi ucitali ovaj servis u komponentu putem konstruktora
  providedIn: 'root' //kod koji se napise unutar servisa deljiv je unutar celog projekta
}) //servisi omogucavaju razmenu podataka izmedju komponenti
export class AboutService {

  constructor(private http: HttpClient) { }


  public getPosts() { //rec je o void funkciji posto nismo stavili return, zato se nije videla subcribe funkcija u about.ts
    //kad smo dodali return subscribe je postao vidljiv 
    return this.http.get("https://jsonplaceholder.typicode.com/posts"); //pokazivac na promenljivu http preko metode get kupi podatke sa json placeholdera
  }


}
