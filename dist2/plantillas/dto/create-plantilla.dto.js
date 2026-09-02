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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatePlantillaDto = void 0;
var class_validator_1 = require("class-validator");
var CreatePlantillaDto = function () {
    var _a;
    var _nombre_decorators;
    var _nombre_initializers = [];
    var _nombre_extraInitializers = [];
    var _archivo_decorators;
    var _archivo_initializers = [];
    var _archivo_extraInitializers = [];
    var _activa_decorators;
    var _activa_initializers = [];
    var _activa_extraInitializers = [];
    return _a = /** @class */ (function () {
            function CreatePlantillaDto() {
                this.nombre = __runInitializers(this, _nombre_initializers, void 0);
                // Nombre del archivo de template (html/hbs) dentro de la carpeta de plantillas,
                // ej: "estandar.hbs". No es una ruta absoluta.
                // Whitelist estricta (solo letras/números/guiones + extensión .hbs) para evitar
                // path traversal: sin esto, 'archivo' llega tal cual a path.join(...) en
                // etiqueta-generator.service.ts y un valor como "../../../.env" leería
                // archivos fuera de la carpeta de plantillas.
                this.archivo = (__runInitializers(this, _nombre_extraInitializers), __runInitializers(this, _archivo_initializers, void 0));
                this.activa = (__runInitializers(this, _archivo_extraInitializers), __runInitializers(this, _activa_initializers, void 0));
                __runInitializers(this, _activa_extraInitializers);
            }
            return CreatePlantillaDto;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _nombre_decorators = [(0, class_validator_1.IsString)(), (0, class_validator_1.IsNotEmpty)(), (0, class_validator_1.MaxLength)(100)];
            _archivo_decorators = [(0, class_validator_1.IsString)(), (0, class_validator_1.IsNotEmpty)(), (0, class_validator_1.MaxLength)(100), (0, class_validator_1.Matches)(/^[a-zA-Z0-9_-]+\.hbs$/, {
                    message: 'archivo debe ser un nombre de archivo simple terminado en .hbs (sin rutas ni caracteres especiales)',
                })];
            _activa_decorators = [(0, class_validator_1.IsOptional)(), (0, class_validator_1.IsBoolean)()];
            __esDecorate(null, null, _nombre_decorators, { kind: "field", name: "nombre", static: false, private: false, access: { has: function (obj) { return "nombre" in obj; }, get: function (obj) { return obj.nombre; }, set: function (obj, value) { obj.nombre = value; } }, metadata: _metadata }, _nombre_initializers, _nombre_extraInitializers);
            __esDecorate(null, null, _archivo_decorators, { kind: "field", name: "archivo", static: false, private: false, access: { has: function (obj) { return "archivo" in obj; }, get: function (obj) { return obj.archivo; }, set: function (obj, value) { obj.archivo = value; } }, metadata: _metadata }, _archivo_initializers, _archivo_extraInitializers);
            __esDecorate(null, null, _activa_decorators, { kind: "field", name: "activa", static: false, private: false, access: { has: function (obj) { return "activa" in obj; }, get: function (obj) { return obj.activa; }, set: function (obj, value) { obj.activa = value; } }, metadata: _metadata }, _activa_initializers, _activa_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.CreatePlantillaDto = CreatePlantillaDto;
