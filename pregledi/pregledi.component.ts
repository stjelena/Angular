import { Component, OnInit } from '@angular/core';
import Pregled from '../models/Pregled';
import { UserService } from '../user.service';
import Lekar from '../models/Lekar';
import { Izvestaj } from '../models/Izvestaj';

@Component({
  selector: 'app-pregledi',
  templateUrl: './pregledi.component.html',
  styleUrls: ['./pregledi.component.css']
})
export class PreglediComponent implements OnInit {
  
  preglediP:Pregled[]=[]
  izvestaji:Izvestaj[]

  error:string;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    let d=new Date()
    let date=d.getFullYear()+"-"+d.getMonth()+"-"+d.getDate()
  
    this.userService.preglediPacijenta(localStorage.getItem('ulogovan')).subscribe((pr:Pregled[])=>{
      this.preglediP=pr

        for(let p of this.preglediP){
       
            this.userService.getLekar(p.lekar).subscribe((l:Lekar)=>{
            p.imeLek=l.ime;
            p.prezimeLek=l.prezime;
            p.ordinacija=l.ordinacija
          })
      }
    })

    this.userService.izvestajiPacijenta(localStorage.getItem('ulogovan')).subscribe((iz:Izvestaj[])=>{
      this.izvestaji=iz;

      for(let i of this.izvestaji){
        this.userService.getLekar(i.lekar).subscribe((l:Lekar)=>{
          i.imeLek=l.ime;
          i.prezimeLek=l.prezime
          i.spec=l.specijalizacija
        })
        this.userService.getPregled(i.idPr).subscribe((p:Pregled)=>{
          i.datum=p.datum
          i.vreme=p.vreme
        })
      }
    })
  }

  otkazi(id){
    this.userService.otkazi(id).subscribe(mess=>{
      if (mess['message'] != 'ok')
          this.error = 'Neuspesno otkazivanje'
        else {
          this.error="Otkazali ste pregled."
          this.ngOnInit()
    }})
  }

}
