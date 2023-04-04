import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit{
 
contactForm!: FormGroup;//cela zezancija oko ovoga uzvicnika gde smo time inicializovali contactForm na not Null
//da Bog sacuva!!!
  constructor (private fb:FormBuilder){ }
  

  ngOnInit(): void{
    this.contactForm  = this.fb.group({
      title:["", Validators.required],
      email:["", [Validators.required, Validators.email]],//ovde obrati paznju na
      //uglaste zagrade, u slucaju vise validacija moraju se staviti u posebnu uglaste zagrade odnosno u niz
      text:["", Validators.required]
    })
  }
  save(){
    if(this.contactForm.valid){ //vraca true ili false u zavisanosti da li su svi obavezni elementi forme popunjeni
const data = this.contactForm.getRawValue(); //getrawvalue funkcija kupi sto je uneseno na input poljima
    console.log("Form data", data);

    }else{
      console.log("niste popunili sva polja")
    }
     
    
  }
}
