import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  uri = 'http://localhost:4000/user'

  constructor(private http: HttpClient) { }

  sviLekari(){
    return this.http.get(`${this.uri}/sviLekari`)
  }

  sviPacijenti(){
    return this.http.get(`${this.uri}/sviPacijenti`)
  }

  search(i: string , p: string, s: string ){
    let data={
      ime: i,
      prezime: p,
      specijalizacija: s
    }
    return this.http.post(`${this.uri}/search`,data)
  }

  searchPaclek(i: string , p: string, s: string, o:string){
    let data={
      ime: i,
      prezime: p,
      specijalizacija: s,
      ordinacija:o
    }
    return this.http.post(`${this.uri}/search`,data)
  }

  loginL(username: string, password: string){
    const data={
      username: username,
      password : password
    }
    return this.http.post(`${this.uri}/loginL`, data)
  
  }

  loginP(username: string, password: string){
    const data={
      username: username,
      password : password
    }
    return this.http.post(`${this.uri}/loginP`, data)
  }
  

    loginM(username: string, password: string){
      const data={
        username: username,
        password : password
      }
      return this.http.post(`${this.uri}/loginM`, data)
    
    }
  

  getPacijent(username: string){
    const data={
      username:username
    }
    return this.http.post(`${this.uri}/getPacijent`, data)
  }

  getLekar(username: string){
    const data={
      username:username
    }
    return this.http.post(`${this.uri}/getLekar`, data)
  }
  
  getPregledi(username: string){
    const data={
      username:username
    }
    return this.http.post(`${this.uri}/getPregledi`, data)
  }

  edit(i: string, p:string, a:string, t:string, e:string, u:string){
    const data={
      i:i,
      p:p,
      a:a,
      t:t,
      e:e,
      u:u
    }
    return this.http.post(`${this.uri}/edit`, data)
  }


  
  zakazi(p:string,c:number,t:number,l:string,d:string,v:string,k:string){
    const data={
      naziv:p,
      cena:c,
      trajanje:t,
      lekar:l,
      datum:d,
      vreme:v,
      pacijent:k
    }
    return this.http.post(`${this.uri}/zakazi`, data)
  }

  preglediPacijenta(p:string){
    const data={
      pac:p
    }
    return this.http.post(`${this.uri}/preglediPacijenta`, data)
  }

  izvestajiPacijenta(p:string){
    const data={
      pac:p
    }
    return this.http.post(`${this.uri}/izvestajiPacijenta`, data)
  }

  getPregled(id:number){
    const data={
      id:id
    }
    return this.http.post(`${this.uri}/getPregled`, data)
  }

  otkazi(id:number){
    const data={
      id:id
    }
    return this.http.post(`${this.uri}/otkazi`, data)
  }
  


  editLekar(i:string, p:string, a:string,t:string,l:string,s:string,u:string){
    const data={
      ime:i,
      prezime:p,
      adresa:a,
      telefon:t,
      licenca:l,
      specijalizacija:s,
      u:u
    }
    return this.http.post(`${this.uri}/editL`, data)
  }

  send(u:string, p:string, i:string, pr:string, a:string, t:string, e:string, s:string){
    const data = {
      username: u,
      pass: p,
      ime: i,
      prez: pr,
      adresa: a,
      tel: t,
      email: e,
      slika: s
    }
    return this.http.post(`${this.uri}/send`, data)
  }

  getReg(){
    return this.http.get(`${this.uri}/getReg`)
  }

  obrisiL(u:string){
    const data={
      username:u
    }
    return this.http.post(`${this.uri}/obrisiL`, data)
  }

  obrisiP(u:string){
    const data={
      username:u
    }
    return this.http.post(`${this.uri}/obrisiP`, data)
  }

  odbij(u:string){
    const data={
      username:u
    }
    return this.http.post(`${this.uri}/odbij`, data)
  }

  prihvatiReg(u:string){
    const data={
      username:u
    }
    return this.http.post(`${this.uri}/prihvatiReg`, data)
  }

  dodajL(i:string, p:string, k:string, l:string, lic:string,a:string, s:string,t:string){
    const data={
      ime:i,
      prezime:p,
      adresa:a,
      telefon:t,
      licenca:l,
      specijalizacija:s,
      u:k
    }
    return this.http.post(`${this.uri}/dodajL`, data)
  }
  
}
