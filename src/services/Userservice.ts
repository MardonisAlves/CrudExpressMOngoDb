import { Empresa } from "../interfaces/user-interface";
import prisma from "../prisma";

class UserService {

    async listAll(): Promise<Empresa[] | undefined> {
        try {
            const users = await prisma.empresa.findMany();
            if(users.length === 0) throw new Error("");
            return users;
        } catch (error:any) {
            return []
        }
    }

    async createUser(empresa: Empresa): Promise<Empresa[] | undefined | never[]> {
        try {
            if(empresa.empresa === "" || empresa.empresa === undefined)  throw new Error("");

            const users:any  =  prisma.empresa.create({
                data: {
                    empresa: empresa.empresa,
                    nome: empresa.nome,
                    permissao: empresa.permissao
                },
                select: {
                    empresa: true,
                    id:true,
                    nome:true,
                    permissao:true
                }
            })
            return users
        } catch (erro) {
           return [];
        }
    }

    async updateUser(id: string, empresa: Empresa) :Promise<Empresa | never[] | undefined>{
        try {
            const users = await prisma.empresa.update({
                where: {
                    id: id
                },
                data: {
                    ...empresa
                },
                select:{
                    empresa:true,
                    id:true,
                    nome:true,
                    permissao:true
                }
            })
           if(users.id === undefined) throw new Error("");
           return users

        } catch (error) {
            return []
        }
    }

    async deleteUser(id: string):Promise<Empresa | never[] | undefined> {
        try {
            if(id === "") throw new Error("");
            
            const users = await prisma.empresa.delete({
                where: {
                    id: id
                },
                select:{
                    empresa:true,
                    id:true,
                    nome:true,
                    permissao:true
                }
            });
            if(!users.id) throw new Error("");
            
            return users;
        } catch (error) {
            return []
        }
    }

    async isAdmin(id: string): Promise<Empresa | any> {
        try {
            if(id === "")  throw new Error("");
            
            const empresa = await prisma.empresa.findMany({
                where: {
                    id: id
                },
                select: {
                    permissao: true
                }
            });
            if(empresa.length === 0){
                throw new Error("Error");
            }
            return empresa
        } catch (error) {
            return []
        }
    }
}


export { UserService }