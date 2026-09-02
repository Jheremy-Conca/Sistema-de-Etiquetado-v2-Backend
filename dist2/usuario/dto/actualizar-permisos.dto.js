"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.actualizarPermisosSchema = void 0;
var zod_1 = require("zod");
var usuarios_dto_1 = require("./usuarios.dto");
exports.actualizarPermisosSchema = zod_1.z.object({
    permisos: zod_1.z.array(usuarios_dto_1.permisoSchema),
});
