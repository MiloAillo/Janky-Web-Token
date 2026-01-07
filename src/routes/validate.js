import express from 'express'
import { validate } from '../controllers/validate'

const Router = express.Router()

export const validateRoute = Router.get('/', validate)
