import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import Lekar from '../models/Lekar';
import Pregled from '../models/Pregled';

@Component({
  selector: 'app-lekarprofil',
  templateUrl: './lekarprofil.component.html',
  styleUrls: ['./lekarprofil.component.css']
})
export class LekarprofilComponent implements OnInit {

  lekar: Lekar
  pregledi: Pregled[] 

  pregled: string;
  datum:string;
  vreme:string;
  error:string;


  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getLekar(localStorage.getItem('izabranLekar')).subscribe((l:Lekar)=>{
      this.lekar=l
      this.userService.getPregledi(l.korisnicko_ime).subscribe((pr:Pregled[])=>{
        this.pregledi = pr.filter(
          (thing, i, arr) => arr.findIndex(t => t.naziv === thing.naziv) === i)
    })
    })
  }

  zakazi(){
    let cena=0
    let tr=0
   
    this.userService.getPregledi(this.lekar.korisnicko_ime).subscribe((preg:Pregled[])=>{

      for (let p of preg){
        
        if (p.datum == this.datum){

         

          const [hoursStr, minutesStr] = (p.vreme).split(':');
          const hours = parseInt(hoursStr, 10);
          const minutes = parseInt(minutesStr, 10);
          const vr1 = hours*60+minutes

        

          const [hoursStr1, minutesStr1] = (this.vreme).split(':');
          const hours1 = parseInt(hoursStr1, 10);
          const minutes1 = parseInt(minutesStr1, 10);
          const vr2 = hours1*60+minutes1



        
         
          if (((vr1+p.trajanje)>=vr2 && vr1<=vr2) || ((vr2<=vr1)&&((vr2+p.trajanje)>=vr1)) || vr1==vr2){
            this.error="Termin nije slobodan"
            return
          }
          cena=p.cena
          tr=p.trajanje
        }
      }
      this.userService.zakazi(this.pregled,cena,tr,this.lekar.korisnicko_ime,this.datum,this.vreme,localStorage.getItem('ulogovan')).subscribe(mess=>{
        if (mess['message'] != 'ok')
          this.error = 'Neuspesno zakazivanje'
        else {
          this.error="Zakazali ste pregled."
          this.ngOnInit()
        }
      })
    })
  }

}
