import express, { Router } from 'express';
import cors from 'cors'
import mongoose from 'mongoose';
import userRouter from './routes/user.router';

const app = express();
app.use(cors())
app.use(express.json())

mongoose.connect('mongodb://127.0.0.1:27017/projekat2023')
const conection = mongoose.connection
conection.once("open", ()=>{
    console.log("db connected")
})

const router = express.Router()
router.use('/user', userRouter)

app.use('/',router)
//app.get('/', (req, res) => res.send('Hello World!'));
app.listen(4000, () => console.log(`Express server running on port 4000`));