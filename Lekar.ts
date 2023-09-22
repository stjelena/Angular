import mongoose from "mongoose";

const Schema = mongoose.Schema

let Lekar = new Schema({
    korisnicko_ime: {
        type: String
    },
    lozinka:{
        type: String
    },
    ime:{
        type: String
    },
    prezime:{
        type:String
    },
    specijalizacija:{
        type: String
    },
    licenca:{
        type: String
    },
    ordinacija:{
        type: String
    },
    telefon:{
        type: String
    },
    email:{
        type: String
    },
    adresa:{
        type: String
    },
    slika:{
        type: String
    }
})

export default mongoose.model('Lekar', Lekar, 'lekari')