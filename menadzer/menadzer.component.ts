import { Component, OnInit } from '@angular/core';
import Pacijent from '../models/Pacijent';
import { UserService } from '../user.service';
import Lekar from '../models/Lekar';

@Component({
  selector: 'app-menadzer',
  templateUrl: './menadzer.component.html',
  styleUrls: ['./menadzer.component.css']
})
export class MenadzerComponent implements OnInit {

  registracije: Pacijent[]

  lekari: Lekar[]
  pacijenti: Pacijent[]

  nIme:string;
  nPrezime:string;
  nAdresa:string;
  nSpec:string;
  nTelefon:string;
  nLicenca:string;
  nKorIme:string;
  text:string;

  pIme:string;
  pPrezime:string;
  pAdresa:string;
  pTelefon:string;
  pEmail:string;
  pKorIme:string;

  lIme:string;
  lPrezime:string;
  lAdresa:string;
  lSpec:string;
  lTelefon:string;
  lLicenca:string;
  lKorIme:string;
  lLozinka:string;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getReg().subscribe((reg:Pacijent[])=>{
      this.registracije=reg
    })

    this.userService.sviLekari().subscribe((l:Lekar[])=>{
      this.lekari=l
    })

    this.userService.sviPacijenti().subscribe((p:Pacijent[])=>{
      this.pacijenti=p
    })
  }

  editL(){
    this.userService.editLekar(this.nIme, this.nPrezime, this.nAdresa, this.nTelefon, this.nLicenca, this.nSpec,this.nKorIme).subscribe(mess=>{
      if (mess['message']=='ok'){
        this.text="Uspesno izvrseno azuriranje"
      }
      else this.text="Neuspesno izvrseno azuriranje"
    })
  }

  editP(){
    this.userService.edit(this.pIme, this.pPrezime, this.pAdresa, this.pTelefon, this.pEmail, this.pKorIme).subscribe(mess=>{
      if (mess['message']=='ok'){
        this.text="Uspesno izvrseno azuriranje"
      }
      else this.text="Neuspesno izvrseno azuriranje"
    })
  }

  obrisiP(u:string){
    this.userService.obrisiP(u).subscribe(mess=>{
      if (mess['message']=='ok'){
        this.text="Obrisan pacijent"
      }
      else this.text="Neuspesno obrisan pacijent "
    })
  }

  obrisiL(u:string){
    this.userService.obrisiL(u).subscribe(mess=>{
      if (mess['message']=='ok'){
        this.text="Obrisan lekar"
      }
      else this.text="Neuspesno obrisan lekar "
    })
  }

  odbij(u:string){
    this.userService.odbij(u).subscribe(mess=>{
      if (mess['message']=='ok'){
        this.text="Odbijena registracija"
      }
      else this.text="Neuspesno odbijena registracija"
    })
  }

  prihvati(u:string){
    this.userService.prihvatiReg(u).subscribe(mess=>{
      if (mess['message']=='ok'){
        this.text="Prihvacena registracija"
        this.ngOnInit()
      }
      else this.text="Neuspesno"
    })
  }

  dodaj(){
    this.userService.dodajL(this.lIme,this.lPrezime,this.lKorIme,this.lLozinka,this.lLicenca, this.lAdresa, this.lSpec, this.lTelefon)
  }

}
