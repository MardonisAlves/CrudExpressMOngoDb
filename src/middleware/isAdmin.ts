import { Request, Response, NextFunction } from "express";
import { UserService } from "../services/Userservice";

export async function isAdmin(req: Request, res: Response, next: NextFunction) {
    const {id} = req.params
    const isAdmin:any = await new  UserService().isAdmin(id);
    
    if (isAdmin.lenght !== 0 && isAdmin[0].permissao === "USER") {
        return res.json({
            message: "Você não tem Permissão de admin"
        });
    } else {
        next()
    }
}