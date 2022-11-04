import { Empresa } from "../interfaces/user-interface";
import prisma from "../prisma";

class UserService {
    async listAll(): Promise<Empresa[] | undefined> {
        try {
            const users = await prisma.empresa.findMany();
            return users;
        } catch (error) {
            console.log(error);
        }
    }

    async createUser(empresa: Empresa) {
        try {
            return await prisma.empresa.create({
                data: {
                    empresa: empresa.empresa,
                    nome: empresa.nome,
                    permissao: empresa.permissao
                },
                select: {
                    empresa: true
                }
            })

        } catch (erro) {
            console.log(erro);

        }
    }

    async updateUser(id: string, empresa: Empresa) {
        try {
           return await prisma.empresa.update({
            where:{
              id:id  
            },
            data:{
                ...empresa
            }
           })
           
        } catch (error) {
            console.log(error);
        }
    }

    async deleteUser(id: string) {
        try {
            return await prisma.empresa.delete({
                where: {
                    id: id
                }
            });

        } catch (error) {
            console.log(error);
        }
    }

    async isAdmin(id: string): Promise<Empresa | any> {
        try {
            return await prisma.empresa.findMany({
                where: {
                    id: id
                },
                select: {
                    permissao: true
                }
            });
        } catch (error) {
            console.log(error);
        }
    }
}


export { UserService }