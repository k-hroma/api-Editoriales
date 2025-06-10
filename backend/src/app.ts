import cors from 'cors'
import express from 'express'
import { editRouter } from './routers/editorialesRoutes'
const app = express()
app.use(express.json());
app.use(cors())
app.use("/api/editoriales", editRouter)
export { app }
