import { Component, OnInit } from '@angular/core';
import Lekar from '../models/Lekar';
import Pacijent from '../models/Pacijent';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  error:string;
  username: string ="";
  pass: string ="";
  passAgain:string ="";
  ime:string ="";
  prez:string ="";
  adresa:string ="";
  tel:string ="";
  email:string ="";
  selectedFile:File
  slika:string;

  zahtevi:Array<Object>

  sviLekari: Lekar[];
  sviPacijenti: Pacijent[];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.sviLekari().subscribe((l:Lekar[])=>{
      this.sviLekari=l
    })
    this.userService.sviPacijenti().subscribe((p: Pacijent[])=>{
      this.sviPacijenti=p;
    })
   
  }

  register(){
    
    let passwordPattern = /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>/?])(?=[a-zA-Z])[A-Za-z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>/?]{8,14}$/;
   
    if (passwordPattern.test(this.pass)) {
      this.error="Sifra je validna"
    } else {
      this.error="Sifra nije validna"
      return 
    }
   
    if (this.username=="" || this.pass=="" || this.passAgain==""||this.adresa==""||this.email==""||this.ime==""||this.prez==""){
      this.error="Niste uneli sve podatke"
      return 
    }
    for (let l of this.sviLekari){
      if (l.korisnicko_ime==this.username){
        this.error="Korisnicko ime mora biti jedinstveno"
        return
      }
    }
    for (let p of this.sviPacijenti){
      if (p.korisnicko_ime==this.username){
        this.error="Korisnicko ime mora biti jedinstveno"
        return
      }
    }
    if (this.pass != this.passAgain){
      this.error="Niste uspesno ponovili lozinku"
      return 
    }
    for (let p of this.sviPacijenti){
      if (p.email==this.email){
        this.error="Email adresa mora biti jedinstvena"
        return
      }
    }
    for (let l of this.sviLekari){
      if (l.email==this.email){
        this.error="Email adresa mora biti jedinstvena"
        return
      }
    }

   

    this.userService.send(this.username,this.pass,this.ime, this.prez, this.adresa,this.tel, this.email, this.slika).subscribe(mess=>{
      if (mess['message']=='ok'){
        this.error="Poslali ste zahtev za registraciju"
      }
      else this.error="Nije uspelo slanje zahteva za registraciju"
    })
 
  }

  onFileSelected(event: any){
    this.selectedFile = event.target.files[0];
    this.slika=this.selectedFile.name
    if (this.selectedFile) {
      const allowedFormats = ['image/jpeg', 'image/png'];
      if (!allowedFormats.includes(this.selectedFile.type)) {
        this.selectedFile = null;
        this.error="Izaberite odgovarajuci format: JPG ili PNG"
        return;
      }
      const img = new Image();
      img.src = window.URL.createObjectURL(this.selectedFile);
      img.onload = () => {
        if (img.width < 100 || img.height < 100 || img.width > 300 || img.height > 300) {
          
          this.selectedFile = null;
          this.error="Fotografija mora biti minimalnog formata 100X100px i maksimalno 300X300px"
    
        }
      } 
    }
    
  }

}
