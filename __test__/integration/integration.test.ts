
import { expect, describe, test, jest } from '@jest/globals';
import app from '../../src/server';
import request from 'supertest';



var id = {};

describe('POST /users', () => {
  let emresa = {
    nome: "Marcelo",
    empresa: "TESTE",
    permissao: "ADMIN"
  }
  test('create object company', async () => {
    const res = await request(app).post('/users')
      .send(emresa)
      .set('Content-Type', 'application/json');
    expect(res.statusCode).toBe(200)
    expect(res.body.empresa).toEqual(emresa.empresa);
  });
})


describe('POST /users', () => {
  let emresa = {
    nome: "Marcelo",
    empresa: "TESTE",
    permissao: "USER"
  }
  test('Unauthorization create ', async () => {
    const res = await request(app).post('/users')
      .send(emresa)
      .set('Content-Type', 'application/json');
    expect(res.statusCode).toBe(401)
  });
})


describe("GET /users", () => {
  let emresa = {
    nome: "Marcelo",
    empresa: "TESTE",
    permissao: "USER"
  }
  test("Return list array", async () => {
    const response = await request(app).get("/users");
    expect(response.statusCode).toEqual(200)
    expect(response.body[0].empresa).toEqual(emresa.empresa)
    id = response.body[0].id
  });
});

describe("PUT /users", () => {
  const emresa = {
    nome: "Marcelo",
    empresa: "TESTE UPDATE",
    permissao: "ADMIN"
  }

  test("Update company", async () => {
    const response = await request(app).patch("/users/" + `${id}`)
      .send(emresa)
      .set('Content-Type', 'application/json');
    expect(response.statusCode).toEqual(200)
    expect(response.body.nome).toEqual(emresa.nome)
  });
});


describe("DELETE /users", () => {
  let emresa = {
    nome: "Marcelo",
    empresa: "TESTE",
    permissao: "USER"
  }
  test("Delete company", async () => {
    const response = await request(app).delete("/users/" + `${id}`)
      .set('Content-Type', 'application/json');
    expect(response.statusCode).toEqual(200)
    expect(response.body.nome).toEqual(emresa.nome)
  });
});


describe("GET /users", () => {
  test("Return list array vazia", async () => {
    const response = await request(app).get("/users");
    expect(response.statusCode).toEqual(200)
    expect(response.body).toEqual([])
  });
});


describe("PUT /users", () => {
  const emresa = {
    nome: "Marcelo",
    empresa: "TESTE UPDATE",
    permissao: "ADMIN"
  }

  test("Update company", async () => {
    const response = await request(app).patch("/users/" + `${id}`)
      .send(emresa)
      .set('Content-Type', 'application/json');
    expect(response.statusCode).toEqual(200)
    expect(response.body).toEqual([])
  });
});



describe('POST /users', () => {
  let data = {
    nome: "",
    empresa: "",
    permissao: ""
  }
  test('deve validar os dados', async () => {
    const res = await request(app).post('/users')
      .send(data)
      .set('Content-Type', 'application/json');
    expect(res.statusCode).toBe(200)
    expect(res.body.data).toEqual(data);
  });
})


describe('POST /users', () => {
  let data = {
    nome: undefined,
    empresa: undefined,
    permissao: "ADMIN"
  }
  test('deve retornar 401', async () => {
    const res = await request(app).post('/users')
      .send(data)
      .set('Content-Type', 'application/json');
    expect(res.statusCode).toBe(200)
    expect(res.body).toEqual([]);
  });
})

describe("DELETE /users", () => {
  const ID = ""
  test("Não deve deletar", async () => {
    const response = await request(app).delete("/users/" + `${id}`)
      .set('Content-Type', 'application/json');
    expect(response.statusCode).toEqual(401)
    expect(response.body).toEqual({"menssage": "Você não tem permissao"})
  });
});










