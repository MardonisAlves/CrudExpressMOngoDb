import { User } from "../interfaces/user-interface";
import { UserModel } from "../model/UserModel";

class UserService {
    async listAll(): Promise<User[] | undefined> {
        try {
            const users = await UserModel.find();
            return users;
        } catch (error) {
            console.log(error);

        }
    }

    async createUser(users: User) {
        try {
            const create = await UserModel.create(users)
            await create.save()
        } catch (erro) {
            console.log(erro);

        }
    }

    async isAdmin(id: string): Promise<User[] | any> {
        try {
            const isadmin = await UserModel.find({ id: id });
            
            return isadmin
        } catch (error) {
            console.log(error);
        }
    }
}


export { UserService }