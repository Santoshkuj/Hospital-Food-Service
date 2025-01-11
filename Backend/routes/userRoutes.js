import {Router} from 'express'
import { login } from '../controllers/authController.js'

const userRouter = Router()

userRouter.post('/login',login)

export default userRouter;