import express from 'express'
import { validate } from '../controllers/validate'

const Router = express.Router()

export const loginRoute = Router.get('/', validate)
