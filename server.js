import { corsMiddleware } from './src/core/cors-setup'
import { app, jsonParser } from './src/core/express'
import { loginRoute } from './src/routes/login'
import { validateRoute } from './src/routes/validate'

app.use(jsonParser)
app.use(corsMiddleware)

app.use("/v1/auth/login", loginRoute)
app.use("/v1/auth", validateRoute)

app.listen(process.env.PORT, () => {
    console.info(`Server activated at port ${process.env.PORT}, happy hunting!`)
})