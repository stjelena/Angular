import express from 'express'
import { UserController } from '../controllers/user.controller';

const userRouter = express.Router();

userRouter.route('/loginL').post(
    (req,res)=> new UserController().loginL(req,res)
)

userRouter.route('/loginP').post(
    (req,res)=> new UserController().loginP(req,res)
)

userRouter.route('/loginM').post(
    (req,res)=> new UserController().loginM(req,res)
)

userRouter.route('/sviLekari').get(
    (req,res)=> new UserController().sviLekari(req,res)
)

userRouter.route('/sviPacijenti').get(
    (req,res)=> new UserController().sviPacijenti(req,res)
)

userRouter.route('/search').post(
    (req,res)=> new UserController().search(req,res)
)

userRouter.route('/searchPaclek').post(
    (req,res)=> new UserController().searchPaclek(req,res)
)

userRouter.route('/getPacijent').post(
    (req,res)=> new UserController().getPacijent(req,res)
)

userRouter.route('/getLekar').post(
    (req,res)=> new UserController().getLekar(req,res)
)

userRouter.route('/getPregledi').post(
    (req,res)=> new UserController().getPregledi(req,res)
)

userRouter.route('/edit').post(
    (req,res)=> new UserController().edit(req,res)
)

userRouter.route('/edit').post(
    (req,res)=> new UserController().preglediLekara(req,res)
)

userRouter.route('/zakazi').post(
    (req,res)=> new UserController().zakazi(req,res)
)

userRouter.route('/preglediPacijenta').post(
    (req,res)=> new UserController().preglediPacijenta(req,res)
)

userRouter.route('/izvestajiPacijenta').post(
    (req,res)=> new UserController().izvestajiPacijenta(req,res)
)

userRouter.route('/getPregled').post(
    (req,res)=> new UserController().getPregled(req,res)
)

userRouter.route('/otkazi').post(
    (req,res)=> new UserController().otkazi(req,res)
)

userRouter.route('/editL').post(
    (req,res)=> new UserController().editL(req,res)
)

userRouter.route('/send').post(
    (req,res)=> new UserController().send(req,res)
)

userRouter.route('/getReg').get(
    (req,res)=> new UserController().getReg(req,res)
)

userRouter.route('/obrisiL').post(
    (req,res)=> new UserController().obrisiL(req,res)
)

userRouter.route('/obrisiP').post(
    (req,res)=> new UserController().obrisiP(req,res)
)

userRouter.route('/odbij').post(
    (req,res)=> new UserController().odbij(req,res)
)

userRouter.route('/prihvatiReg').post(
    (req,res)=> new UserController().prihvatiReg(req,res)
)

userRouter.route('/dodajL').post(
    (req,res)=> new UserController().dodajL(req,res)
)

export default userRouter