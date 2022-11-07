"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const Userservice_1 = require("../services/Userservice");
class UserController {
    async listAll(req, res) {
        try {
            const users = await new Userservice_1.UserService().listAll();
            return res.json(users);
        }
        catch (error) {
            return [];
        }
    }
    async create(req, res) {
        const empresa = req.body;
        try {
            const create = await new Userservice_1.UserService().createUser(empresa);
            return res.json(create);
        }
        catch (error) {
            return [];
        }
    }
    async updateUser(req, res) {
        const { id } = req.params;
        const empresa = req.body;
        try {
            const updateUser = await new Userservice_1.UserService().updateUser(id, empresa);
            return res.json(updateUser);
        }
        catch (error) {
            return [];
        }
    }
    async deleteUser(req, res) {
        const { id } = req.params;
        try {
            const deleteUser = await new Userservice_1.UserService().deleteUser(id);
            return res.json(deleteUser);
        }
        catch (error) {
            return [];
        }
    }
}
exports.UserController = UserController;
//# sourceMappingURL=UserController.js.map