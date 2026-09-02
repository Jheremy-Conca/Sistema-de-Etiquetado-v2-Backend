"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.actualizarPerfilSchema = void 0;
var zod_1 = require("zod");
exports.actualizarPerfilSchema = zod_1.z.object({
    nombre: zod_1.z.string().min(1).optional(),
    avatarUrl: zod_1.z.string().url().optional(),
});
