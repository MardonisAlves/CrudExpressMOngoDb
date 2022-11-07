import { expect, describe, test, beforeAll } from "@jest/globals";
import { UserService } from "../../src/services/Userservice";

let emresa = {
    nome: "Marcelo",
    empresa: "TESTE",
    permissao: "ADMIN"
  }

var id = ""

describe('Metodo create', () => {
    test('Create object', async () => {
       const res:any = await new UserService().createUser(emresa);
        expect(res.empresa).toEqual(emresa.empresa)
    })
})

describe('Metodo listAll', () => {
    test('List object', async () => {
       const response:any = await new UserService().listAll();
        expect(response[0].empresa).toEqual(emresa.empresa)
        id = response[0].id
    })
})

describe('Metodo update', () => {
    test('update object', async () => {
       const res:any = await new UserService().updateUser(id, emresa);
        expect(res.empresa).toEqual(emresa.empresa)
    })
})

describe('Metodo delete', () => {
    test('delete object', async () => {
       const res:any = await new UserService().deleteUser(id);
        expect(res.empresa).toEqual(emresa.empresa)
    })
})







    describe('Metodo listAll', () => {
        test('return list vazia', async () => {
           const response:any = await new UserService().listAll();
            expect(response).toEqual([])
        })
    })
    
    describe('Metodo update', () => {
        test('deve retornar array vazio', async () => {
           const res:any = await new UserService().updateUser(id, emresa);      
            expect(res).toEqual([])
        })
    })
    
    describe('Metodo create', () => {
        const data = {
        nome: "",
        empresa: "",
        permissao: ""
        }
        test('deve retornar error', async () => {
           const res:any = await new UserService().createUser(data);      
            expect(res.body).toEqual(undefined)
        })
    })
    
    
    describe('Metodo delete', () => {
        test('não deve deletar object', async () => {
           const res:any = await new UserService().deleteUser(id);           
            expect(res).toEqual([])
        })
    })


    describe('Metodo get', () => {
        const ID = ""
        test('deve verificar is admin', async () => {
           const res:any = await new UserService().isAdmin(ID);
           console.log(res);
           
            expect(res).toEqual([])
        })
    })



