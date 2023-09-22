import { Component, OnInit } from '@angular/core';
import Lekar from '../models/Lekar';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-paclek',
  templateUrl: './paclek.component.html',
  styleUrls: ['./paclek.component.css']
})
export class PaclekComponent implements OnInit {

  lekari: Lekar[]
  sortIme: string;
  sortNacin: string;
  
  searchSpec: string ="";
  searchIme: string ="";
  searchPrezime: string ="";
  searchOrd: string="";
  searchLekari: Lekar[]

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit(): void {
    this.userService.sviLekari().subscribe((lek: Lekar[]) => {
      this.lekari = lek
    })
  }

  sort(){
    if (this.sortIme=="ime" && this.sortNacin=="nerastuce"){
     
     return this.lekari.sort((lekar1, lekar2)=>{
        if (lekar1.ime>lekar2.ime)
        return -1
        else if (lekar1.ime==lekar2.ime)
        return 0
        else return 1
      })
    }
    else if (this.sortIme=="ime" && this.sortNacin=="neopadajuce"){
      return this.lekari.sort((lekar1, lekar2)=>{
        if (lekar1.ime<lekar2.ime)
        return -1
        else if (lekar1.ime==lekar2.ime)
        return 0
        else return 1
      })
    }
    else if (this.sortIme=="prezime" && this.sortNacin=="nerastuce"){
      return this.lekari.sort((lekar1, lekar2)=>{
        if (lekar1.prezime>lekar2.prezime)
        return -1
        else if (lekar1.prezime==lekar2.prezime)
        return 0
        else return 1
      })
    }
    else if (this.sortIme=="prezime" && this.sortNacin=="neopadajuce"){
      return this.lekari.sort((lekar1, lekar2)=>{
        if (lekar1.prezime<lekar2.prezime)
        return -1
        else if (lekar1.prezime==lekar2.prezime)
        return 0
        else return 1
      })
    }
    else if (this.sortIme=="specijalizacija" && this.sortNacin=="nerastuce"){
      return this.lekari.sort((lekar1, lekar2)=>{
        if (lekar1.specijalizacija>lekar2.specijalizacija)
        return -1
        else if (lekar1.specijalizacija==lekar2.specijalizacija)
        return 0
        else return 1
      })
    }
    else if (this.sortIme=="specijalizacija" && this.sortNacin=="neopadajuce"){
      return this.lekari.sort((lekar1, lekar2)=>{
        if (lekar1.specijalizacija<lekar2.specijalizacija)
        return -1
        else if (lekar1.specijalizacija==lekar2.specijalizacija)
        return 0
        else return 1
      })
    }
    else if (this.sortIme=="ordinacija" && this.sortNacin=="nerastuce"){
      return this.lekari.sort((lekar1, lekar2)=>{
        if (lekar1.ordinacija>lekar2.ordinacija)
        return -1
        else if (lekar1.ordinacija==lekar2.ordinacija)
        return 0
        else return 1
      })
    }
    else if (this.sortIme=="ordinacija" && this.sortNacin=="neopadajuce"){
      return this.lekari.sort((lekar1, lekar2)=>{
        if (lekar1.ordinacija<lekar2.ordinacija)
        return -1
        else if (lekar1.ordinacija==lekar2.ordinacija)
        return 0
        else return 1
      })
    }
    
    return 0
  }


  searchPaclek(){
    this.userService.searchPaclek(this.searchIme, this.searchPrezime, this.searchSpec, this.searchOrd).subscribe((l:Lekar[])=>{
        this.searchLekari=l; 
    })
   
  }

  save(korime){
    localStorage.setItem('izabranLekar', korime);
    this.router.navigate(['lekarprofil'])
  }
  

}
