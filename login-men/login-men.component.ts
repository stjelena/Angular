import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { Menadzer } from '../models/Menadzer';

@Component({
  selector: 'app-login-men',
  templateUrl: './login-men.component.html',
  styleUrls: ['./login-men.component.css']
})
export class LoginMenComponent implements OnInit {

  username:string;
  password:string;
  error:string

  constructor(private userService:UserService, private router:Router) { }

  ngOnInit(): void {
  }

  login(){
    this.userService.loginM(this.username, this.password).subscribe((men: Menadzer)=>{
      
      if (men){
        localStorage.setItem('ulogovan', men.korisnicko_ime)
        this.router.navigate(['menadzer'])
      }
      else {
        this.error = "Uneli ste pogresne podatke."
        return
      }
    })
  }

}
