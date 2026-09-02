"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.crearUsuarioSchema = exports.permisoSchema = void 0;
var zod_1 = require("zod");
exports.permisoSchema = zod_1.z.object({
    recurso: zod_1.z.enum(['LOTES', 'PRODUCTOS', 'FABRICANTES', 'PLANTILLAS', 'COA', 'USUARIOS', 'ETIQUETAS']),
    puedeVer: zod_1.z.boolean().default(false),
    puedeCrear: zod_1.z.boolean().default(false),
    puedeEditar: zod_1.z.boolean().default(false),
    puedeEliminar: zod_1.z.boolean().default(false),
});
exports.crearUsuarioSchema = zod_1.z.object({
    nombre: zod_1.z.string().min(1),
    email: zod_1.z.string().email(),
    password: zod_1.z.string().min(8),
    esAdmin: zod_1.z.boolean().default(false),
    // si esAdmin=true, permisos puede venir vacío (el admin no los necesita)
    permisos: zod_1.z.array(exports.permisoSchema).default([]),
});
