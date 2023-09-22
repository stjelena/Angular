import express from 'express'
import Lekar from '../models/Lekar';
import Pacijent from '../models/Pacijent';
import Pregled from '../models/Pregled';
import Izvestaj from '../models/Izvestaj';
import Registracija from '../models/Registracija';
import Menadzer from '../models/Menadzer';

export class UserController {

    loginL = (req: express.Request, res: express.Response) => {
        let username = req.body.username;
        let password = req.body.password;

        Lekar.findOne({ 'korisnicko_ime': username, 'lozinka': password }, (err, u) => {
            if (err) console.log(err)
            else res.json(u)
        })
    }

    loginP = (req: express.Request, res: express.Response) => {
        let username = req.body.username;
        let password = req.body.password;


        Pacijent.findOne({ 'korisnicko_ime': username, 'lozinka': password }, (err, u) => {
            if (err) console.log(err)
            else res.json(u)
        })

    }

    loginM = (req: express.Request, res: express.Response) => {
        let username = req.body.username;
        let password = req.body.password;


        Menadzer.findOne({ 'korisnicko_ime': username, 'lozinka': password }, (err, u) => {
            if (err) console.log(err)
            else res.json(u)
        })

    }


    sviLekari = (req: express.Request, res: express.Response) => {
        Lekar.find({}, (err, resp) => {
            if (err) console.log(err)
            else res.json(resp)
        })
    }

    sviPacijenti = (req: express.Request, res: express.Response) => {
        Pacijent.find({}, (err, resp) => {
            if (err) console.log(err)
            else res.json(resp)
        })
    }

    search = (req: express.Request, res: express.Response) => {

        let ime = req.body.ime;
        let prezime = req.body.prezime;
        let spec = req.body.specijalizacija;

        Lekar.find({ 'ime': { $regex: ime }, 'prezime': { $regex: prezime }, 'specijalizacija': { $regex: spec } }, (err, l) => {
            if (err) console.log(err)
            else res.json(l)
        })
    }

    searchPaclek = (req: express.Request, res: express.Response) => {

        let ime = req.body.ime;
        let prezime = req.body.prezime;
        let spec = req.body.specijalizacija;
        let ord = req.body.ordinacija;

        Lekar.find({ 'ime': { $regex: ime }, 'prezime': { $regex: prezime }, 'specijalizacija': { $regex: spec }, 'ordinacija': { $regex: ord } }, (err, l) => {
            if (err) console.log(err)
            else res.json(l)
        })
    }

    getPacijent = (req: express.Request, res: express.Response) => {
        let username = req.body.username;

        Pacijent.findOne({ 'korisnicko_ime': username }, (err, pac) => {
            if (err) console.log(err)
            else res.json(pac)
        })
    }

    getLekar = (req: express.Request, res: express.Response) => {
        let username = req.body.username;

        Lekar.findOne({ 'korisnicko_ime': username }, (err, pac) => {
            if (err) console.log(err)
            else res.json(pac)
        })
    }

    getPregledi = (req: express.Request, res: express.Response) => {
        let username = req.body.username;


        Pregled.find({ 'lekar': username }, (err, pac) => {
            if (err) console.log(err)
            else res.json(pac)
        })
    }

    edit = (req: express.Request, res: express.Response) => {
        let i = req.body.i;
        let p = req.body.p;
        let a = req.body.a;
        let t = req.body.t;
        let e = req.body.e;
        let u = req.body.u;

        Pacijent.updateOne({ 'korisnicko_ime': u }, { $set: { 'ime': i, 'prezime': p, 'adresa': a, 'telefon': t, 'email': e } }, (err, mes) => {
            if (err) { }
            else res.json({ 'message': 'ok' })
        })
    }

    preglediLekara = (req: express.Request, res: express.Response) => {

        let user = req.body.user

        Pregled.find({ 'lekar': user }, (err, p) => {
            if (err) console.log(err)
            else res.json(p)
        })
    }

    /* zakazi = (req: express.Request, res: express.Response) => {
        let pr = new Pregled({
            naziv: req.body.naziv,
            cena: req.body.cena,
            trajanje: req.body.trajanje,
            lekar: req.body.lekar,
            datum: req.body.datum,
            vreme: req.body.vreme,
            pacijent: req.body.pacijent
        })

        Pregled.collection.insertOne(pr, (err, mess) => {
            if (err) console.log(err)
            else res.json({ 'message': 'ok' })
        })
    } */

    zakazi = (req: express.Request, res: express.Response) => {
        Pregled.find({},(err,pregledi)=>{
            if (err) console.log(err)
            else{
                let max_id=0;
                for (let p of pregledi){
                    if(p['id']>max_id)
                    max_id=p['id']
                }
                let pr = new Pregled({
                    id: (max_id)+1,
                    naziv: req.body.naziv,
                    cena: req.body.cena,
                    trajanje: req.body.trajanje,
                    lekar: req.body.lekar,
                    datum: req.body.datum,
                    vreme: req.body.vreme,
                    pacijent: req.body.pacijent
                })
                pr.save((errr, resp)=>{
                    if (errr) console.log(errr)
                    else res.json({'message':'ok'})
                })
            }
        })
    }

    preglediPacijenta = (req: express.Request, res: express.Response) => {
        let pac = req.body.pac
        let d = req.body.d

        Pregled.find({ 'pacijent': pac }, (err, pr) => {
            if (err) console.log(err)
            else res.json(pr)
        })
    }

    izvestajiPacijenta = (req: express.Request, res: express.Response) => {
        let pac = req.body.pac

        Izvestaj.find({ 'pacijent': pac }, (err, pr) => {
            if (err) console.log(err)
            else res.json(pr)
        })
    }

    getPregled = (req: express.Request, res: express.Response) => {
        let id=req.body.id

        Pregled.findOne({'id':id},(err,p)=>{
            if (err) console.log(err)
            else res.json(p)
        })
    }

    otkazi = (req: express.Request, res: express.Response) => {
        let id=req.body.id

        Pregled.deleteOne({'id':id},(err,mess)=>{
            if (err) console.log(err)
            else res.json({'message':'ok'})
        })
    }

    editL = (req: express.Request, res: express.Response) => {
        let ime=req.body.ime;
        let prezime=req.body.prezime;
        let adresa=req.body.adresa;
        let telefon=req.body.telefon;
        let spec=req.body.spec;
        let licenca=req.body.licenca
        let u=req.body.u
        Pacijent.updateOne({ 'korisnicko_ime': u }, { $set: { 'ime': ime, 'prezime': prezime, 'adresa': adresa, 'telefon': telefon, 'specijalizacija':spec, 'licenca':licenca } }, (err, mes) => {
            if (err) { }
            else res.json({ 'message': 'ok' })
        })
    }

 
    send = (req: express.Request, res: express.Response) => {
        let reg = new Registracija({
            ime: req.body.ime,
            prezime: req.body.prezime,
            korisnicko_ime: req.body.username,
            lozinka: req.body.pass,
            adresa: req.body.adresa,
            telefon: req.body.tel,
            email: req.body.email,
            slika: req.body.slika
        })

        

        Registracija.collection.insertOne(reg, (err, mess) => {
            if (err) console.log(err)
            else res.json({ 'message': 'ok' })
         })
    }

    getReg= (req: express.Request, res: express.Response) => {
        Registracija.find({}, (err,reg)=>{
            if (err) console.log(err)
            else res.json(reg)
        })
    }

    obrisiL=(req: express.Request, res: express.Response) => {
        let username=req.body.username

        Lekar.deleteOne({'korisnicko_ime':username}, (err, mess)=>{
            if (err) console.log(err)
            else res.json({ 'message': 'ok' })
        })
    }

    obrisiP=(req: express.Request, res: express.Response) => {
        let username=req.body.username

        Pacijent.deleteOne({'korisnicko_ime':username}, (err, mess)=>{
            if (err) console.log(err)
            else res.json({ 'message': 'ok' })
        })
    }

    odbij=(req: express.Request, res: express.Response) => {
        let username=req.body.username

        Registracija.deleteOne({'korisnicko_ime':username}, (err, mess)=>{
            if (err) console.log(err)
            else res.json({ 'message': 'ok' })
        })
    }

    prihvatiReg = (req: express.Request, res: express.Response) => {
        let username = req.body.username

        Registracija.findOne({ 'korisnicko_ime': username }, (err, reg) => {
            if (err) console.log(err)
            else {
                let pac = new Pacijent({
                    ime: reg.ime,
                    prezime: reg.prezime,
                    korisnicko_ime: username,
                    lozinka: reg.lozinka,
                    adresa: reg.adresa,
                    telefon: reg.telefon,
                    email: reg.email,
                    slika: reg.slika
                })
                Pacijent.collection.insertOne(pac, (err, mess) => {
                    if (err) console.log(err)
                    else {
                        Registracija.deleteOne({ 'korisnicko_ime': username }, (err, mess) => {
                            if (err) console.log(err)
                            else res.json({ 'message': 'ok' })
                        })
                    }
                })
            }
        })
    }

    
    dodajL = (req: express.Request, res: express.Response) => {

        let lekar = new Lekar({
            ime: req.body.ime,
            prezime: req.body.prezime,
            adresa: req.body.adresa,
            telefon: req.body.telefon,
            spec: req.body.spec,
            licenca: req.body.licenca,
            korisnicko_ime: req.body.u
        })

        Lekar.collection.insertOne(lekar,(err,mess)=>{
            if (err) console.log(err)
            else res.json({ 'message': 'ok' })
        })
    }

}