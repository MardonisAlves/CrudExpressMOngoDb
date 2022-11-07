"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const globals_1 = require("@jest/globals");
const server_1 = __importDefault(require("../../src/server"));
const supertest_1 = __importDefault(require("supertest"));
var id = {};
(0, globals_1.describe)('POST /users', () => {
    let emresa = {
        nome: "Marcelo",
        empresa: "TESTE",
        permissao: "ADMIN"
    };
    (0, globals_1.test)('create object company', async () => {
        const res = await (0, supertest_1.default)(server_1.default).post('/users')
            .send(emresa)
            .set('Content-Type', 'application/json');
        (0, globals_1.expect)(res.statusCode).toBe(200);
        (0, globals_1.expect)(res.body.empresa).toEqual(emresa.empresa);
    });
});
(0, globals_1.describe)('POST /users', () => {
    let emresa = {
        nome: "Marcelo",
        empresa: "TESTE",
        permissao: "USER"
    };
    (0, globals_1.test)('Unauthorization create ', async () => {
        const res = await (0, supertest_1.default)(server_1.default).post('/users')
            .send(emresa)
            .set('Content-Type', 'application/json');
        (0, globals_1.expect)(res.statusCode).toBe(401);
    });
});
(0, globals_1.describe)("GET /users", () => {
    let emresa = {
        nome: "Marcelo",
        empresa: "TESTE",
        permissao: "USER"
    };
    (0, globals_1.test)("Return list array", async () => {
        const response = await (0, supertest_1.default)(server_1.default).get("/users");
        (0, globals_1.expect)(response.statusCode).toEqual(200);
        (0, globals_1.expect)(response.body[0].empresa).toEqual(emresa.empresa);
        id = response.body[0].id;
    });
});
(0, globals_1.describe)("PUT /users", () => {
    const emresa = {
        nome: "Marcelo",
        empresa: "TESTE UPDATE",
        permissao: "ADMIN"
    };
    (0, globals_1.test)("Update company", async () => {
        const response = await (0, supertest_1.default)(server_1.default).patch("/users/" + `${id}`)
            .send(emresa)
            .set('Content-Type', 'application/json');
        (0, globals_1.expect)(response.statusCode).toEqual(200);
        (0, globals_1.expect)(response.body.nome).toEqual(emresa.nome);
    });
});
(0, globals_1.describe)("DELETE /users", () => {
    let emresa = {
        nome: "Marcelo",
        empresa: "TESTE",
        permissao: "USER"
    };
    (0, globals_1.test)("Delete company", async () => {
        const response = await (0, supertest_1.default)(server_1.default).delete("/users/" + `${id}`)
            .set('Content-Type', 'application/json');
        (0, globals_1.expect)(response.statusCode).toEqual(200);
        (0, globals_1.expect)(response.body.nome).toEqual(emresa.nome);
    });
});
(0, globals_1.describe)("GET /users", () => {
    (0, globals_1.test)("Return list array vazia", async () => {
        const response = await (0, supertest_1.default)(server_1.default).get("/users");
        (0, globals_1.expect)(response.statusCode).toEqual(200);
        (0, globals_1.expect)(response.body).toEqual([]);
    });
});
(0, globals_1.describe)("PUT /users", () => {
    const emresa = {
        nome: "Marcelo",
        empresa: "TESTE UPDATE",
        permissao: "ADMIN"
    };
    (0, globals_1.test)("Update company", async () => {
        const response = await (0, supertest_1.default)(server_1.default).patch("/users/" + `${id}`)
            .send(emresa)
            .set('Content-Type', 'application/json');
        (0, globals_1.expect)(response.statusCode).toEqual(200);
        (0, globals_1.expect)(response.body).toEqual([]);
    });
});
(0, globals_1.describe)('POST /users', () => {
    let data = {
        nome: "",
        empresa: "",
        permissao: ""
    };
    (0, globals_1.test)('deve validar os dados', async () => {
        const res = await (0, supertest_1.default)(server_1.default).post('/users')
            .send(data)
            .set('Content-Type', 'application/json');
        (0, globals_1.expect)(res.statusCode).toBe(200);
        (0, globals_1.expect)(res.body.data).toEqual(data);
    });
});
(0, globals_1.describe)('POST /users', () => {
    let data = {
        nome: undefined,
        empresa: undefined,
        permissao: "ADMIN"
    };
    (0, globals_1.test)('deve retornar 401', async () => {
        const res = await (0, supertest_1.default)(server_1.default).post('/users')
            .send(data)
            .set('Content-Type', 'application/json');
        (0, globals_1.expect)(res.statusCode).toBe(200);
        (0, globals_1.expect)(res.body).toEqual([]);
    });
});
(0, globals_1.describe)("DELETE /users", () => {
    const ID = "";
    (0, globals_1.test)("Não deve deletar", async () => {
        const response = await (0, supertest_1.default)(server_1.default).delete("/users/" + `${id}`)
            .set('Content-Type', 'application/json');
        (0, globals_1.expect)(response.statusCode).toEqual(401);
        (0, globals_1.expect)(response.body).toEqual({ "menssage": "Você não tem permissao" });
    });
});
//# sourceMappingURL=integration.test.js.map