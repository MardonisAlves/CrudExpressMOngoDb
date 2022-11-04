import {Request, Response, NextFunction } from "express";
import { User } from "../interfaces/user-interface";
import { UserService } from "../services/Userservice";

export async function isAdmin(req:Request, res:Response, next:NextFunction){
    const {callerId}  =  req.params;
    const {id} = req.body;
    
    const isAdmin:User[] = await new  UserService().isAdmin(callerId);
    if(isAdmin.length === 0 ){
        return res.send({
            message:'Usuário invalido'
        })
    }

    if(isAdmin[0].permissao === "USER"){
        return res.send({
            message:"Você não tem Permissão de admin"
        });
    }

    if(id === parseInt(callerId)){
        return res.send({
            message:"Usuário ja está cadstrado"
        });
    }
    
    next()
}