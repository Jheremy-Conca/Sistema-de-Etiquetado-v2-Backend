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
exports.CreateLoteDto = void 0;
var class_validator_1 = require("class-validator");
var CreateLoteDto = function () {
    var _a;
    var _numeroLote_decorators;
    var _numeroLote_initializers = [];
    var _numeroLote_extraInitializers = [];
    var _fechaFabricacion_decorators;
    var _fechaFabricacion_initializers = [];
    var _fechaFabricacion_extraInitializers = [];
    var _fechaVencimiento_decorators;
    var _fechaVencimiento_initializers = [];
    var _fechaVencimiento_extraInitializers = [];
    var _productoId_decorators;
    var _productoId_initializers = [];
    var _productoId_extraInitializers = [];
    var _fabricanteId_decorators;
    var _fabricanteId_initializers = [];
    var _fabricanteId_extraInitializers = [];
    return _a = /** @class */ (function () {
            function CreateLoteDto() {
                this.numeroLote = __runInitializers(this, _numeroLote_initializers, void 0);
                this.fechaFabricacion = (__runInitializers(this, _numeroLote_extraInitializers), __runInitializers(this, _fechaFabricacion_initializers, void 0));
                this.fechaVencimiento = (__runInitializers(this, _fechaFabricacion_extraInitializers), __runInitializers(this, _fechaVencimiento_initializers, void 0));
                this.productoId = (__runInitializers(this, _fechaVencimiento_extraInitializers), __runInitializers(this, _productoId_initializers, void 0));
                this.fabricanteId = (__runInitializers(this, _productoId_extraInitializers), __runInitializers(this, _fabricanteId_initializers, void 0));
                __runInitializers(this, _fabricanteId_extraInitializers);
            }
            return CreateLoteDto;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _numeroLote_decorators = [(0, class_validator_1.IsString)(), (0, class_validator_1.IsNotEmpty)(), (0, class_validator_1.MaxLength)(100)];
            _fechaFabricacion_decorators = [(0, class_validator_1.IsString)(), (0, class_validator_1.IsNotEmpty)()];
            _fechaVencimiento_decorators = [(0, class_validator_1.IsString)(), (0, class_validator_1.IsNotEmpty)()];
            _productoId_decorators = [(0, class_validator_1.IsInt)()];
            _fabricanteId_decorators = [(0, class_validator_1.IsInt)()];
            __esDecorate(null, null, _numeroLote_decorators, { kind: "field", name: "numeroLote", static: false, private: false, access: { has: function (obj) { return "numeroLote" in obj; }, get: function (obj) { return obj.numeroLote; }, set: function (obj, value) { obj.numeroLote = value; } }, metadata: _metadata }, _numeroLote_initializers, _numeroLote_extraInitializers);
            __esDecorate(null, null, _fechaFabricacion_decorators, { kind: "field", name: "fechaFabricacion", static: false, private: false, access: { has: function (obj) { return "fechaFabricacion" in obj; }, get: function (obj) { return obj.fechaFabricacion; }, set: function (obj, value) { obj.fechaFabricacion = value; } }, metadata: _metadata }, _fechaFabricacion_initializers, _fechaFabricacion_extraInitializers);
            __esDecorate(null, null, _fechaVencimiento_decorators, { kind: "field", name: "fechaVencimiento", static: false, private: false, access: { has: function (obj) { return "fechaVencimiento" in obj; }, get: function (obj) { return obj.fechaVencimiento; }, set: function (obj, value) { obj.fechaVencimiento = value; } }, metadata: _metadata }, _fechaVencimiento_initializers, _fechaVencimiento_extraInitializers);
            __esDecorate(null, null, _productoId_decorators, { kind: "field", name: "productoId", static: false, private: false, access: { has: function (obj) { return "productoId" in obj; }, get: function (obj) { return obj.productoId; }, set: function (obj, value) { obj.productoId = value; } }, metadata: _metadata }, _productoId_initializers, _productoId_extraInitializers);
            __esDecorate(null, null, _fabricanteId_decorators, { kind: "field", name: "fabricanteId", static: false, private: false, access: { has: function (obj) { return "fabricanteId" in obj; }, get: function (obj) { return obj.fabricanteId; }, set: function (obj, value) { obj.fabricanteId = value; } }, metadata: _metadata }, _fabricanteId_initializers, _fabricanteId_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.CreateLoteDto = CreateLoteDto;
