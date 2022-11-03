import {Request, Response, NextFunction } from "express";
import { UserService } from "../services/Userservice";

export async function isAdmin(req:Request, res:Response, next:NextFunction){
    const {callerId}  =  req.params;
    const {id} = req.body;
    
    const isAdmin = await new  UserService().isAdmin(callerId);
   
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