"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const prisma_1 = __importDefault(require("../prisma"));
class UserService {
    async listAll() {
        try {
            const users = await prisma_1.default.empresa.findMany();
            if (users.length === 0)
                throw new Error("");
            return users;
        }
        catch (error) {
            return [];
        }
    }
    async createUser(empresa) {
        try {
            if (empresa.empresa === "" || empresa.empresa === undefined)
                throw new Error("");
            const users = prisma_1.default.empresa.create({
                data: {
                    empresa: empresa.empresa,
                    nome: empresa.nome,
                    permissao: empresa.permissao
                },
                select: {
                    empresa: true,
                    id: true,
                    nome: true,
                    permissao: true
                }
            });
            return users;
        }
        catch (erro) {
            return [];
        }
    }
    async updateUser(id, empresa) {
        try {
            const users = await prisma_1.default.empresa.update({
                where: {
                    id: id
                },
                data: Object.assign({}, empresa),
                select: {
                    empresa: true,
                    id: true,
                    nome: true,
                    permissao: true
                }
            });
            if (users.id === undefined)
                throw new Error("");
            return users;
        }
        catch (error) {
            return [];
        }
    }
    async deleteUser(id) {
        try {
            if (id === "")
                throw new Error("");
            const users = await prisma_1.default.empresa.delete({
                where: {
                    id: id
                },
                select: {
                    empresa: true,
                    id: true,
                    nome: true,
                    permissao: true
                }
            });
            if (!users.id)
                throw new Error("");
            return users;
        }
        catch (error) {
            return [];
        }
    }
    async isAdmin(id) {
        try {
            if (id === "")
                throw new Error("");
            const empresa = await prisma_1.default.empresa.findMany({
                where: {
                    id: id
                },
                select: {
                    permissao: true
                }
            });
            if (empresa.length === 0) {
                throw new Error("Error");
            }
            return empresa;
        }
        catch (error) {
            return [];
        }
    }
}
exports.UserService = UserService;
//# sourceMappingURL=Userservice.js.map