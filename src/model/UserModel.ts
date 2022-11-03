import {Schema, model} from 'mongoose';
import { User } from '../interfaces/user-interface';
import { ConnectToMongoDb } from '../config/db';
// create schema with interface User
ConnectToMongoDb();

const userSchema = new Schema<User>({
    id: { type:Number, required:true },
    empresa:{ type:String , required: true},
    nome: { type:String, required: true },
    permissao:{ type: String, required:true}
})


const UserModel = model<User>('User', userSchema)
export {UserModel}