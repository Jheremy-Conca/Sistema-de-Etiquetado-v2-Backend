"use strict";
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuariosController = void 0;
var common_1 = require("@nestjs/common");
var usuarios_dto_1 = require("./dto/usuarios.dto");
var actualizar_permisos_dto_1 = require("./dto/actualizar-permisos.dto");
var actualizar_perfil_dto_1 = require("./dto/actualizar-perfil.dto");
var supabase_auth_guard_1 = require("../common/guards/supabase-auth.guard");
var es_admin_guard_1 = require("../common/guards/es-admin.guard");
// NOTA: los guards ahora se aplican por método, no a nivel de clase.
// Motivo: /me debe ser accesible para cualquier usuario autenticado
// (para que el frontend sepa si es Admin), mientras que el resto de
// los endpoints son exclusivos de Admin.
// IMPORTANTE: cualquier endpoint nuevo que se agregue a este controller
// necesita su propio @UseGuards(...) explícito — ya no hereda nada por
// estar en esta clase.
var UsuariosController = function () {
    var _classDecorators = [(0, common_1.Controller)('usuarios')];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _instanceExtraInitializers = [];
    var _obtenerActual_decorators;
    var _actualizarMiPerfil_decorators;
    var _crear_decorators;
    var _listar_decorators;
    var _actualizarPermisos_decorators;
    var UsuariosController = _classThis = /** @class */ (function () {
        function UsuariosController_1(usuariosService) {
            this.usuariosService = (__runInitializers(this, _instanceExtraInitializers), usuariosService);
        }
        UsuariosController_1.prototype.obtenerActual = function (req) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    // SupabaseAuthGuard ya deja el usuario (con sus permisos) en request.usuario
                    return [2 /*return*/, { success: true, data: req.usuario }];
                });
            });
        };
        UsuariosController_1.prototype.actualizarMiPerfil = function (req, body) {
            return __awaiter(this, void 0, void 0, function () {
                var dto, usuario;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            dto = actualizar_perfil_dto_1.actualizarPerfilSchema.parse(body);
                            return [4 /*yield*/, this.usuariosService.actualizarPerfil(req.usuario.id, dto)];
                        case 1:
                            usuario = _a.sent();
                            return [2 /*return*/, { success: true, data: usuario }];
                    }
                });
            });
        };
        UsuariosController_1.prototype.crear = function (body) {
            return __awaiter(this, void 0, void 0, function () {
                var dto, usuario;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            dto = usuarios_dto_1.crearUsuarioSchema.parse(body);
                            return [4 /*yield*/, this.usuariosService.crear(dto)];
                        case 1:
                            usuario = _a.sent();
                            return [2 /*return*/, { success: true, data: usuario }];
                    }
                });
            });
        };
        UsuariosController_1.prototype.listar = function () {
            return __awaiter(this, void 0, void 0, function () {
                var usuarios;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.usuariosService.listar()];
                        case 1:
                            usuarios = _a.sent();
                            return [2 /*return*/, { success: true, data: usuarios }];
                    }
                });
            });
        };
        UsuariosController_1.prototype.actualizarPermisos = function (id, body) {
            return __awaiter(this, void 0, void 0, function () {
                var dto, usuario;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            dto = actualizar_permisos_dto_1.actualizarPermisosSchema.parse(body);
                            return [4 /*yield*/, this.usuariosService.actualizarPermisos(id, dto.permisos)];
                        case 1:
                            usuario = _a.sent();
                            return [2 /*return*/, { success: true, data: usuario }];
                    }
                });
            });
        };
        return UsuariosController_1;
    }());
    __setFunctionName(_classThis, "UsuariosController");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _obtenerActual_decorators = [(0, common_1.Get)('me'), (0, common_1.UseGuards)(supabase_auth_guard_1.SupabaseAuthGuard)];
        _actualizarMiPerfil_decorators = [(0, common_1.Patch)('me'), (0, common_1.UseGuards)(supabase_auth_guard_1.SupabaseAuthGuard)];
        _crear_decorators = [(0, common_1.Post)(), (0, common_1.UseGuards)(supabase_auth_guard_1.SupabaseAuthGuard, es_admin_guard_1.EsAdminGuard)];
        _listar_decorators = [(0, common_1.Get)(), (0, common_1.UseGuards)(supabase_auth_guard_1.SupabaseAuthGuard, es_admin_guard_1.EsAdminGuard)];
        _actualizarPermisos_decorators = [(0, common_1.Patch)(':id/permisos'), (0, common_1.UseGuards)(supabase_auth_guard_1.SupabaseAuthGuard, es_admin_guard_1.EsAdminGuard)];
        __esDecorate(_classThis, null, _obtenerActual_decorators, { kind: "method", name: "obtenerActual", static: false, private: false, access: { has: function (obj) { return "obtenerActual" in obj; }, get: function (obj) { return obj.obtenerActual; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _actualizarMiPerfil_decorators, { kind: "method", name: "actualizarMiPerfil", static: false, private: false, access: { has: function (obj) { return "actualizarMiPerfil" in obj; }, get: function (obj) { return obj.actualizarMiPerfil; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _crear_decorators, { kind: "method", name: "crear", static: false, private: false, access: { has: function (obj) { return "crear" in obj; }, get: function (obj) { return obj.crear; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _listar_decorators, { kind: "method", name: "listar", static: false, private: false, access: { has: function (obj) { return "listar" in obj; }, get: function (obj) { return obj.listar; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _actualizarPermisos_decorators, { kind: "method", name: "actualizarPermisos", static: false, private: false, access: { has: function (obj) { return "actualizarPermisos" in obj; }, get: function (obj) { return obj.actualizarPermisos; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        UsuariosController = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return UsuariosController = _classThis;
}();
exports.UsuariosController = UsuariosController;
