import { Request, Response, NextFunction } from "express";
import { UserService } from "../services/Userservice";
import * as HttpStatus from 'http-status'
export async function isAdmin(req: Request, res: Response, next: NextFunction) {
    const {id} = req.params;
    const  {permissao} = req.body

    if(req.method === "POST" && permissao === 'ADMIN'){
        next()
    }else if(req.method === "DELETE"){
        const isAdmin:any = await new  UserService().isAdmin(id);
        if (isAdmin[0].permissao === 0 || isAdmin[0].permissao === "USER") {
            return res.status(HttpStatus.UNAUTHORIZED).send({
                menssage:"Você não tem permissao"
            })
        } else {
            next()
        }
    }else{        
        return res.status(HttpStatus.UNAUTHORIZED).send({
            menssage:"Você não tem permissao"
        })
    }
       
    }
    
