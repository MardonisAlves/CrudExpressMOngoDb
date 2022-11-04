import express from 'express';
import cors from 'cors';
import {router} from './routes/route'

const app = express();
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cors())
app.use(router)

app.listen(3000);
