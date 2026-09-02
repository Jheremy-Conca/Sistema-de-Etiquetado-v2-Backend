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
exports.GenerarEtiquetaDto = void 0;
var class_validator_1 = require("class-validator");
var GenerarEtiquetaDto = function () {
    var _a;
    var _loteId_decorators;
    var _loteId_initializers = [];
    var _loteId_extraInitializers = [];
    var _plantillaId_decorators;
    var _plantillaId_initializers = [];
    var _plantillaId_extraInitializers = [];
    var _pesoBruto_decorators;
    var _pesoBruto_initializers = [];
    var _pesoBruto_extraInitializers = [];
    var _unidadBruto_decorators;
    var _unidadBruto_initializers = [];
    var _unidadBruto_extraInitializers = [];
    var _cantidadNeta_decorators;
    var _cantidadNeta_initializers = [];
    var _cantidadNeta_extraInitializers = [];
    var _unidadNeta_decorators;
    var _unidadNeta_initializers = [];
    var _unidadNeta_extraInitializers = [];
    var _proforma_decorators;
    var _proforma_initializers = [];
    var _proforma_extraInitializers = [];
    return _a = /** @class */ (function () {
            function GenerarEtiquetaDto() {
                this.loteId = __runInitializers(this, _loteId_initializers, void 0);
                this.plantillaId = (__runInitializers(this, _loteId_extraInitializers), __runInitializers(this, _plantillaId_initializers, void 0));
                this.pesoBruto = (__runInitializers(this, _plantillaId_extraInitializers), __runInitializers(this, _pesoBruto_initializers, void 0)); // texto tal cual (ej. "1.140"), nunca number
                this.unidadBruto = (__runInitializers(this, _pesoBruto_extraInitializers), __runInitializers(this, _unidadBruto_initializers, void 0));
                this.cantidadNeta = (__runInitializers(this, _unidadBruto_extraInitializers), __runInitializers(this, _cantidadNeta_initializers, void 0)); // peso o cantidad neta, según unidadNeta
                this.unidadNeta = (__runInitializers(this, _cantidadNeta_extraInitializers), __runInitializers(this, _unidadNeta_initializers, void 0));
                this.proforma = (__runInitializers(this, _unidadNeta_extraInitializers), __runInitializers(this, _proforma_initializers, void 0));
                __runInitializers(this, _proforma_extraInitializers);
            }
            return GenerarEtiquetaDto;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _loteId_decorators = [(0, class_validator_1.IsInt)(), (0, class_validator_1.IsPositive)()];
            _plantillaId_decorators = [(0, class_validator_1.IsInt)(), (0, class_validator_1.IsPositive)()];
            _pesoBruto_decorators = [(0, class_validator_1.IsString)(), (0, class_validator_1.IsNotEmpty)()];
            _unidadBruto_decorators = [(0, class_validator_1.IsIn)(['KG', 'GR'])];
            _cantidadNeta_decorators = [(0, class_validator_1.IsOptional)(), (0, class_validator_1.IsString)()];
            _unidadNeta_decorators = [(0, class_validator_1.IsIn)(['KG', 'GR', 'ML', 'L'])];
            _proforma_decorators = [(0, class_validator_1.IsString)(), (0, class_validator_1.IsNotEmpty)(), (0, class_validator_1.MaxLength)(50)];
            __esDecorate(null, null, _loteId_decorators, { kind: "field", name: "loteId", static: false, private: false, access: { has: function (obj) { return "loteId" in obj; }, get: function (obj) { return obj.loteId; }, set: function (obj, value) { obj.loteId = value; } }, metadata: _metadata }, _loteId_initializers, _loteId_extraInitializers);
            __esDecorate(null, null, _plantillaId_decorators, { kind: "field", name: "plantillaId", static: false, private: false, access: { has: function (obj) { return "plantillaId" in obj; }, get: function (obj) { return obj.plantillaId; }, set: function (obj, value) { obj.plantillaId = value; } }, metadata: _metadata }, _plantillaId_initializers, _plantillaId_extraInitializers);
            __esDecorate(null, null, _pesoBruto_decorators, { kind: "field", name: "pesoBruto", static: false, private: false, access: { has: function (obj) { return "pesoBruto" in obj; }, get: function (obj) { return obj.pesoBruto; }, set: function (obj, value) { obj.pesoBruto = value; } }, metadata: _metadata }, _pesoBruto_initializers, _pesoBruto_extraInitializers);
            __esDecorate(null, null, _unidadBruto_decorators, { kind: "field", name: "unidadBruto", static: false, private: false, access: { has: function (obj) { return "unidadBruto" in obj; }, get: function (obj) { return obj.unidadBruto; }, set: function (obj, value) { obj.unidadBruto = value; } }, metadata: _metadata }, _unidadBruto_initializers, _unidadBruto_extraInitializers);
            __esDecorate(null, null, _cantidadNeta_decorators, { kind: "field", name: "cantidadNeta", static: false, private: false, access: { has: function (obj) { return "cantidadNeta" in obj; }, get: function (obj) { return obj.cantidadNeta; }, set: function (obj, value) { obj.cantidadNeta = value; } }, metadata: _metadata }, _cantidadNeta_initializers, _cantidadNeta_extraInitializers);
            __esDecorate(null, null, _unidadNeta_decorators, { kind: "field", name: "unidadNeta", static: false, private: false, access: { has: function (obj) { return "unidadNeta" in obj; }, get: function (obj) { return obj.unidadNeta; }, set: function (obj, value) { obj.unidadNeta = value; } }, metadata: _metadata }, _unidadNeta_initializers, _unidadNeta_extraInitializers);
            __esDecorate(null, null, _proforma_decorators, { kind: "field", name: "proforma", static: false, private: false, access: { has: function (obj) { return "proforma" in obj; }, get: function (obj) { return obj.proforma; }, set: function (obj, value) { obj.proforma = value; } }, metadata: _metadata }, _proforma_initializers, _proforma_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.GenerarEtiquetaDto = GenerarEtiquetaDto;
