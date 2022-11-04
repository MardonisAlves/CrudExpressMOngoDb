import mongoose from 'mongoose';
import * as dotenv from "dotenv";
dotenv.config()
const url:string = process.env?.URL_MONGODB || "";

const connect = async () => await mongoose.connect(url)

export  {url , connect}






