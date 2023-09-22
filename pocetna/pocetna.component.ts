import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import Lekar from '../models/Lekar';

@Component({
  selector: 'app-pocetna',
  templateUrl: './pocetna.component.html',
  styleUrls: ['./pocetna.component.css']
})
export class PocetnaComponent implements OnInit {

  lekari: Lekar[]
  sortIme: string;
  sortNacin: string;
  
  searchSpec: string ="";
  searchIme: string ="";
  searchPrezime: string ="";
  searchLekari: Lekar[]
  div: boolean = false;

  images: [
    {src: 'assets/galerija/img1.jpg', alt: 'Image 1'} ,
    {src: 'assets/galerija/img2.jpg', alt: 'Image 2'} ,
    {src: 'assets/galerija/img3.jpg', alt: 'Image 3'} ,
    {src: 'assets/galerija/img4.png', alt: 'Image 4'} 
  ];

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit(): void {
    this.userService.sviLekari().subscribe((lek:Lekar[])=>{
      this.lekari=lek
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
    
    return 0
  }


  search(){
    this.userService.search(this.searchIme, this.searchPrezime, this.searchSpec).subscribe((l:Lekar[])=>{
  
        this.div=true;
        this.searchLekari=l; 
       
    })
   
  }

  clickHref(type: string){
    this.router.navigate([type])
  }

  

  

}
