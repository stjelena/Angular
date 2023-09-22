import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import Lekar from '../models/Lekar';

@Component({
  selector: 'app-lekar',
  templateUrl: './lekar.component.html',
  styleUrls: ['./lekar.component.css']
})
export class LekarComponent implements OnInit {

  ulogovan:Lekar

  nIme:string;
  nPrezime:string;
  nAdresa:string;
  nSpec:string;
  nTelefon:string;
  nLicenca:string;
  text:string;

  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.userService.getLekar(localStorage.getItem('ulogovan')).subscribe((l:Lekar)=>{
      this.ulogovan=l
    })
  }

  edit(){
    this.userService.editLekar(this.nIme, this.nPrezime, this.nAdresa, this.nTelefon, this.nLicenca, this.nSpec,this.ulogovan.korisnicko_ime).subscribe(mess=>{
      if (mess['message']=='ok'){
        this.text="Uspesno izvrseno azuriranje"
      }
      else this.text="Neuspesno izvrseno azuriranje"
    })
  }

}
