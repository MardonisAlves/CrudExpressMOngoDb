import { Request, Response } from "express";
import { Empresa } from "../interfaces/user-interface";
import { UserService } from "../services/Userservice";

class  UserController{

     async listAll(req:Request, res:Response):Promise<any>{
        try {
          const users =  await new UserService().listAll();         
          return res.json(users)
        } catch (error) {
            return []
        }
    }

    async create(req:Request, res:Response):Promise<any>{
      const empresa = req.body as Empresa
    
      try {
        const create =  await new UserService().createUser(empresa);
        return res.json(create)
      } catch (error) {
        return []
      }
  }


  async updateUser(req:Request, res:Response){
    const {id} = req.params
    const empresa = req.body as Empresa
    try {
      const updateUser = await new UserService().updateUser(id, empresa)
      return res.json(updateUser)
    } catch (error) {
     return []
      
    }
  }

  async deleteUser(req:Request, res:Response){
    const {id} = req.params
    try {
    const deleteUser = await new UserService().deleteUser(id);
    return res.json(deleteUser)
    } catch (error) {
      return []
    }
  }

}

export {UserController}