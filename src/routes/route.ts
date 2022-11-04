import {Router} from 'express';
import {UserController} from '../controllers/UserController';
import { isAdmin } from '../middleware/isAdmin';
import { isEmpty } from '../middleware/isEmpty';
const router = Router();

router.get('/users', new UserController().listAll)
router.post('/users/:id', isEmpty, isAdmin ,new UserController().create)
router.patch('/users/:id', new UserController().updateUser)
router.delete('/users/:id', isAdmin, new UserController().deleteUser)

export  {router}
