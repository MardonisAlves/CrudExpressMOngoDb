"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const UserController_1 = require("../controllers/UserController");
const isAdmin_1 = require("../middleware/isAdmin");
const isEmpty_1 = require("../middleware/isEmpty");
const router = (0, express_1.Router)();
exports.router = router;
router.get('/users', new UserController_1.UserController().listAll);
router.post('/users', isEmpty_1.isEmpty, isAdmin_1.isAdmin, new UserController_1.UserController().create);
router.patch('/users/:id', new UserController_1.UserController().updateUser);
router.delete('/users/:id', isAdmin_1.isAdmin, new UserController_1.UserController().deleteUser);
//# sourceMappingURL=route.js.map