"use strict";
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
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PermisosGuard = void 0;
// src/common/guards/permisos.guard.ts
var common_1 = require("@nestjs/common");
var requiere_permiso_decorator_1 = require("../decorators/requiere-permiso.decorator");
var PermisosGuard = function () {
    var _classDecorators = [(0, common_1.Injectable)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var PermisosGuard = _classThis = /** @class */ (function () {
        function PermisosGuard_1(reflector) {
            this.reflector = reflector;
        }
        PermisosGuard_1.prototype.canActivate = function (context) {
            var _a;
            var requerido = this.reflector.getAllAndOverride(requiere_permiso_decorator_1.PERMISO_KEY, [
                context.getHandler(),
                context.getClass(),
            ]);
            // Sin @RequierePermiso(...) → solo exige estar autenticado, no restringe por módulo
            if (!requerido)
                return true;
            // permisos.guard.ts
            var request = context.switchToHttp().getRequest();
            var usuario = request.usuario; // antes: request.user
            if (usuario === null || usuario === void 0 ? void 0 : usuario.esAdmin)
                return true; // el admin siempre pasa
            var permiso = (_a = usuario === null || usuario === void 0 ? void 0 : usuario.permisos) === null || _a === void 0 ? void 0 : _a.find(function (p) { return p.recurso === requerido.recurso; });
            if (!permiso || !permiso[requerido.accion]) {
                throw new common_1.ForbiddenException('No tienes permiso para esta acción');
            }
            return true;
        };
        return PermisosGuard_1;
    }());
    __setFunctionName(_classThis, "PermisosGuard");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        PermisosGuard = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return PermisosGuard = _classThis;
}();
exports.PermisosGuard = PermisosGuard;
