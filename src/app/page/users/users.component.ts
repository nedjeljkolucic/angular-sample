import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  passwordMatchValidator(form: FormGroup) { //funkcija za validaciju lozinke se u angularu mora kreirati posebno i pozvati pre ucitavanja strane
    const password = form.get('password'); //kupi pojedinacnu vrednost iz polja
    const confirmpassword = form.get('confirmpassword');
    if (password!.value !== confirmpassword!.value) {
      confirmpassword!.setErrors({ passwordMismatch: true })

    } else {
      confirmpassword?.setErrors(null);
    }
    
  

  }
  userForm!: FormGroup;

  dataSource = new MatTableDataSource<any>(); //kreiranje objekta any formata za datasource u komponenti html

  displayColumns = ['ime', 'prezime', 'email', 'password', 'action']; 



  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.userForm = this.fb.group({
      id: [0, Validators.required],
      firstName: ["", Validators.required],
      secondName: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      password: ["", Validators.required],
      confirmpassword: ["", Validators.required]
    }, {
      validator: this.passwordMatchValidator
    }
    )
    this.dataSource.data = JSON.parse(localStorage.getItem('userForm')!);
  }
  save() {
    const userData: any[] = []; //prvo je stavio da je null pa sam se ubio dok nisam skontao da ne sme da bude null vec []. ja bio stavio null! i proradilo je
   

    const data = this.userForm.getRawValue();
    if (this.userForm.valid) {
      data.id = Math.floor(1000 * Math.random()); // e jebiga
      if (localStorage.getItem('userForm') === null) {
        userData.push(data);
        console.log("userData", userData)
        console.log("UserDataString", JSON.stringify(userData))
        localStorage.setItem('userForm', JSON.stringify(userData))
      } else {
        const localData = JSON.parse(localStorage.getItem('userForm')!);
        localData.push(data)
        localStorage.setItem('userForm', JSON.stringify(localData))
      }
      this.userForm.reset();
      this.userForm.get('id')?.setValue(0);
      this.dataSource.data = []; //prvo se definise data kao prazan niz
      this.dataSource.data = JSON.parse(localStorage.getItem('userForm')!);
      alert("Korisnik je uspesno kreiran !")
    } else {
      alert("Neophodno je uneti ispravne podatke!")
    }
    

    /*if (this.userForm.valid) { //vraca true ili false u zavisanosti da li su svi obavezni elementi forme popunjeni
      const data = this.userForm.getRawValue(); //getrawvalue funkcija kupi sto je uneseno na input poljima
      console.log("Form data", data);

    } else {
      console.log("niste popunili sva polja")
    }*/
  }
  delete(data: any) {
    console.log(data)
    var allData = JSON.parse(localStorage.getItem('userForm')!);  //ovaj var je stavljen je ne sme biti const
    allData = allData.filter((item:any) => item.id !== data.id);// brisanje po id koji je dodeljen random u save funkciji
    console.log(allData);
    localStorage.removeItem('userForm');
    localStorage.setItem('userForm', JSON.stringify(allData));
    this.dataSource.data = JSON.parse(localStorage.getItem('userForm')!);
  }
}
