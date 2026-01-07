import cors from 'cors'

const corsOptions = {
    origin: ['https://jankyweb.mischikomoe.web.id', 'http://localhost:5173']
}

export const corsMiddleware = cors(corsOptions)