import express from 'express';
import cors from 'cors';
import {router} from './routes/route'

const app = express();
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())

app.use(router)

//DEFINA UM MIDDLEWARE QUE VERIFIQUE SE O USUÁRIO QUE ESTÁ ENVIANDO O REQUEST TEM A PERMISSÃO DE ADMINISTRADOR
// function isAdmin(req:Request, res:Response, next:NextFunction) {
//   let { callerId } = req.params as string;
//   // TODO


//   next()
// }

// ROTAS EXECUTANDO FUNÇÕES CRUD NA ARRAY DE USUÁRIOS, ONDE SOMENTE O ADMINISTRADOR PODE CRIAR OU DELETAR UM USUÁRIO.
// ENVIE A ID DE QUEM ESTÁ ENVIANDO O REQUEST COMO PARÂMETRO NA URL " calledId "
// CRIE AS SEGUINTES ROTAS.

//TODO
// GET /users
// POST /users   Isadmin
// PATCH /users/:id
// DELETE /users/:id   Isadmin

app.listen(3000);
