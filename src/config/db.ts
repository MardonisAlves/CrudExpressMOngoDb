import mongoose from 'mongoose';
import * as dotenv from "dotenv";
dotenv.config()
const url:string = process.env?.URL_MONGODB || "";

export async function ConnectToMongoDb(){
 await mongoose.connect(url);
}








