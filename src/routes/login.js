import express from 'express'
import { login } from '../controllers/login'

const Router = express.Router()

export const loginRoute = Router.post('/', login)