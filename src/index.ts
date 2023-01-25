import express from "npm:express";
import taskRoutes from './routes/taskRoutes.ts'
import './db.ts'
const app = express()

app.use(taskRoutes)

app.listen(3000, () => {
        console.log('server on port 3000')
})