import mongoose from "mongoose";

const Schema = mongoose.Schema

let Pregled = new Schema({
    id:{
        type:Number
    },
    naziv: {
        type: String
    },
    cena:{
        type: Number
    },
    trajanje:{
        type: Number
    },
    lekar:{
        type:String
    },
    
    pacijent:{
        type: String
    },
    datum:{
        type: String
    },
    vreme:{
        type: String
    }
})

export default mongoose.model('Pregled', Pregled, 'pregledi')