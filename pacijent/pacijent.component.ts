import { Component, OnInit } from '@angular/core';
import Pacijent from '../models/Pacijent';
import { UserService } from '../user.service';

@Component({
  selector: 'app-pacijent',
  templateUrl: './pacijent.component.html',
  styleUrls: ['./pacijent.component.css']
})
export class PacijentComponent implements OnInit {

  pacijent: Pacijent;
  nIme:string;
  nPrezime:string;
  nAdresa:string;
  nTelefon:string;
  nEmail:string;

  text:string;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getPacijent(localStorage.getItem('ulogovan')).subscribe((pac:Pacijent)=>{
      this.pacijent=pac;
      this.nIme=pac.ime;
      this.nPrezime=pac.prezime;
      this.nAdresa=pac.adresa;
      this.nTelefon=pac.telefon;
      this.nEmail=pac.email;
    })
  }

  edit(){
    this.userService.edit(this.nIme, this.nPrezime, this.nAdresa, this.nTelefon, this.nEmail, this.pacijent.korisnicko_ime).subscribe(mess=>{
      if (mess['message']=='ok'){
        this.text="Uspesno izvrseno azuriranje"
      }
      else this.text="Neuspesno izvrseno azuriranje"
    })
  }

}
