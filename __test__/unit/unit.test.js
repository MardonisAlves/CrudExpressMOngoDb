"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const globals_1 = require("@jest/globals");
const Userservice_1 = require("../../src/services/Userservice");
let emresa = {
    nome: "Marcelo",
    empresa: "TESTE",
    permissao: "ADMIN"
};
var id = "";
(0, globals_1.describe)('Metodo create', () => {
    (0, globals_1.test)('Create object', async () => {
        const res = await new Userservice_1.UserService().createUser(emresa);
        (0, globals_1.expect)(res.empresa).toEqual(emresa.empresa);
    });
});
(0, globals_1.describe)('Metodo listAll', () => {
    (0, globals_1.test)('List object', async () => {
        const response = await new Userservice_1.UserService().listAll();
        (0, globals_1.expect)(response[0].empresa).toEqual(emresa.empresa);
        id = response[0].id;
    });
});
(0, globals_1.describe)('Metodo update', () => {
    (0, globals_1.test)('update object', async () => {
        const res = await new Userservice_1.UserService().updateUser(id, emresa);
        (0, globals_1.expect)(res.empresa).toEqual(emresa.empresa);
    });
});
(0, globals_1.describe)('Metodo delete', () => {
    (0, globals_1.test)('delete object', async () => {
        const res = await new Userservice_1.UserService().deleteUser(id);
        (0, globals_1.expect)(res.empresa).toEqual(emresa.empresa);
    });
});
(0, globals_1.describe)('Metodo listAll', () => {
    (0, globals_1.test)('return list vazia', async () => {
        const response = await new Userservice_1.UserService().listAll();
        (0, globals_1.expect)(response).toEqual([]);
    });
});
(0, globals_1.describe)('Metodo update', () => {
    (0, globals_1.test)('deve retornar array vazio', async () => {
        const res = await new Userservice_1.UserService().updateUser(id, emresa);
        (0, globals_1.expect)(res).toEqual([]);
    });
});
(0, globals_1.describe)('Metodo create', () => {
    const data = {
        nome: "",
        empresa: "",
        permissao: ""
    };
    (0, globals_1.test)('deve retornar error', async () => {
        const res = await new Userservice_1.UserService().createUser(data);
        (0, globals_1.expect)(res.body).toEqual(undefined);
    });
});
(0, globals_1.describe)('Metodo delete', () => {
    (0, globals_1.test)('não deve deletar object', async () => {
        const res = await new Userservice_1.UserService().deleteUser(id);
        (0, globals_1.expect)(res).toEqual([]);
    });
});
(0, globals_1.describe)('Metodo get', () => {
    const ID = "";
    (0, globals_1.test)('deve verificar is admin', async () => {
        const res = await new Userservice_1.UserService().isAdmin(ID);
        console.log(res);
        (0, globals_1.expect)(res).toEqual([]);
    });
});
//# sourceMappingURL=unit.test.js.map