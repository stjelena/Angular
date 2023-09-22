import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import Lekar from '../models/Lekar';
import Pacijent from '../models/Pacijent';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;
  type: string;
  error: string;

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit(): void {
  }

  login(){
    if (this.username=="" || this.password=="" || this.type==""){
      this.error = "Niste uneli sve podatke."
      return
    }
    
    if (this.type=='lekar'){
      this.userService.loginL(this.username, this.password).subscribe((lekar: Lekar)=>{
        if (lekar){
          localStorage.setItem('ulogovan', lekar.korisnicko_ime)
          this.router.navigate(['lekar'])
        }
        else {
          this.error = "Uneli ste pogresne podatke."
          return
        }
      })
    }
    else{
      this.userService.loginP(this.username, this.password).subscribe((pacijent: Pacijent)=>{
      
        if (pacijent){
          localStorage.setItem('ulogovan', pacijent.korisnicko_ime)
          this.router.navigate(['pacijent'])
        }
        else {
          this.error = "Uneli ste pogresne podatke."
          return
        }
      })
    }
  }


}
