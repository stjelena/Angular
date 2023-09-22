import mongoose from "mongoose";

const Schema = mongoose.Schema

let Menadzer = new Schema({
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
    }
})

export default mongoose.model('Menadzer', Menadzer, 'menadzeri')