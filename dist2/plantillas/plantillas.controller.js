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
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlantillasController = void 0;
var common_1 = require("@nestjs/common");
var supabase_auth_guard_1 = require("../common/guards/supabase-auth.guard");
var permisos_guard_1 = require("../common/guards/permisos.guard");
var requiere_permiso_decorator_1 = require("../common/decorators/requiere-permiso.decorator");
var PlantillasController = function () {
    var _classDecorators = [(0, common_1.Controller)('plantillas'), (0, common_1.UseGuards)(supabase_auth_guard_1.SupabaseAuthGuard, permisos_guard_1.PermisosGuard)];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _instanceExtraInitializers = [];
    var _create_decorators;
    var _findAll_decorators;
    var _findOne_decorators;
    var _update_decorators;
    var _remove_decorators;
    var PlantillasController = _classThis = /** @class */ (function () {
        function PlantillasController_1(plantillasService) {
            this.plantillasService = (__runInitializers(this, _instanceExtraInitializers), plantillasService);
        }
        PlantillasController_1.prototype.create = function (dto) {
            return this.plantillasService.create(dto);
        };
        PlantillasController_1.prototype.findAll = function (activas) {
            return this.plantillasService.findAll(activas === 'true');
        };
        PlantillasController_1.prototype.findOne = function (id) {
            return this.plantillasService.findOne(id);
        };
        PlantillasController_1.prototype.update = function (id, dto) {
            return this.plantillasService.update(id, dto);
        };
        PlantillasController_1.prototype.remove = function (id) {
            return this.plantillasService.remove(id);
        };
        return PlantillasController_1;
    }());
    __setFunctionName(_classThis, "PlantillasController");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _create_decorators = [(0, common_1.Post)(), (0, requiere_permiso_decorator_1.RequierePermiso)('PLANTILLAS', 'puedeCrear')];
        _findAll_decorators = [(0, common_1.Get)(), (0, requiere_permiso_decorator_1.RequierePermiso)('PLANTILLAS', 'puedeVer')];
        _findOne_decorators = [(0, common_1.Get)(':id'), (0, requiere_permiso_decorator_1.RequierePermiso)('PLANTILLAS', 'puedeVer')];
        _update_decorators = [(0, common_1.Patch)(':id'), (0, requiere_permiso_decorator_1.RequierePermiso)('PLANTILLAS', 'puedeEditar')];
        _remove_decorators = [(0, common_1.Delete)(':id'), (0, requiere_permiso_decorator_1.RequierePermiso)('PLANTILLAS', 'puedeEliminar')];
        __esDecorate(_classThis, null, _create_decorators, { kind: "method", name: "create", static: false, private: false, access: { has: function (obj) { return "create" in obj; }, get: function (obj) { return obj.create; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _findAll_decorators, { kind: "method", name: "findAll", static: false, private: false, access: { has: function (obj) { return "findAll" in obj; }, get: function (obj) { return obj.findAll; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _findOne_decorators, { kind: "method", name: "findOne", static: false, private: false, access: { has: function (obj) { return "findOne" in obj; }, get: function (obj) { return obj.findOne; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _update_decorators, { kind: "method", name: "update", static: false, private: false, access: { has: function (obj) { return "update" in obj; }, get: function (obj) { return obj.update; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _remove_decorators, { kind: "method", name: "remove", static: false, private: false, access: { has: function (obj) { return "remove" in obj; }, get: function (obj) { return obj.remove; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        PlantillasController = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return PlantillasController = _classThis;
}();
exports.PlantillasController = PlantillasController;
