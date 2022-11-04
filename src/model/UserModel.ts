import mongoose ,{Schema, model} from 'mongoose';
import autoIncrement from 'mongoose-auto-increment'
import { Empresa } from '../interfaces/user-interface';
import {url} from '../config/db'

let connection =  mongoose.createConnection(url);
autoIncrement.initialize(connection);


const userSchema = new Schema<Empresa>({
    empresa:{ type:String , required: true},
    nome: { type:String, required: true },
    permissao:{ type: String, required:true}
})

userSchema.plugin(autoIncrement.plugin, {
    model:'User',
    field:'id'
})


const UserModel = model<Empresa>('Empresa', userSchema)
export {UserModel}