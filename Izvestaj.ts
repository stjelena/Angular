import mongoose from "mongoose";

const Schema = mongoose.Schema

let Izvestaj = new Schema({
    id:{
        type:Number
    },
    idPr:{
        type:Number
    },
    pacijent: {
        type: String
    },
    lekar:{
        type: String
    },
    dijagnoza:{
        type: String
    },
    terapija:{
        type:String
    },
    kontrola:{
        type: String
    },
    dolazak:{
        type: String
    }
})

export default mongoose.model('Izvestaj', Izvestaj, 'izvestaji')