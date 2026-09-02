"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequierePermiso = exports.PERMISO_KEY = void 0;
// src/common/decorators/requiere-permiso.decorator.ts
var common_1 = require("@nestjs/common");
exports.PERMISO_KEY = 'permiso';
var RequierePermiso = function (recurso, accion) {
    return (0, common_1.SetMetadata)(exports.PERMISO_KEY, { recurso: recurso, accion: accion });
};
exports.RequierePermiso = RequierePermiso;
