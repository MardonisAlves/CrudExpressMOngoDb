import { Empresa } from "@prisma/client";
import { Request, Response, NextFunction } from "express";

export async function isEmpty(req:Request, res:Response, next:NextFunction){
    const empresa = req.body as Empresa

    if(empresa.empresa === "" || empresa.nome === "" || empresa.permissao === ""){
        return res.send({
            message:"Campo vazio",
            data: empresa
        })
    }

    next()
}