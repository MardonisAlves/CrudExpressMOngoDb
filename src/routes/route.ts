import {Router} from 'express';
import {UserController} from '../controllers/UserController';
import { isAdmin } from '../middleware/isAdmin';
const router = Router();

router.get('/users', new UserController().listAll)
router.post('/users/:callerId', isAdmin ,new UserController().create)

// PATCH /users/:id

// DELETE /users/:id

export  {router}
