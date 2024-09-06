import express from 'express'
import dotenv from 'dotenv'
import {connectToDatabase} from './db/connection.js'
dotenv.config()
const app = express()

connectToDatabase();

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
})