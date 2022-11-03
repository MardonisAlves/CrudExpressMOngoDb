import { Request, Response } from "express";
import { User } from "../interfaces/user-interface";
import { UserService } from "../services/Userservice";

class  UserController{

     async listAll(req:Request, res:Response):Promise<any>{
        try {
          const users =  await new UserService().listAll();
          return res.json(users)
        } catch (error) {
            console.log(error);
            
        }
    }

    async create(req:Request, res:Response):Promise<any>{
      const users = req.body as User
      
      try {
        const create =  await new UserService().createUser(users);
        return res.json(create)
      } catch (error) {
         console.log(error);
      }
  }

}

export {UserController}