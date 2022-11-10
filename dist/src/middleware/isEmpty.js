"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isEmpty = void 0;
async function isEmpty(req, res, next) {
    const empresa = req.body;
    if (empresa.empresa === "" || empresa.nome === "" || empresa.permissao === "") {
        return res.send({
            message: "Campo vazio",
            data: empresa
        });
    }
    next();
}
exports.isEmpty = isEmpty;
//# sourceMappingURL=isEmpty.js.map