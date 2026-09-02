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
exports.CreateProductoDto = void 0;
var class_validator_1 = require("class-validator");
var CreateProductoDto = function () {
    var _a;
    var _nombre_decorators;
    var _nombre_initializers = [];
    var _nombre_extraInitializers = [];
    var _nfpaSalud_decorators;
    var _nfpaSalud_initializers = [];
    var _nfpaSalud_extraInitializers = [];
    var _nfpaInflamabilidad_decorators;
    var _nfpaInflamabilidad_initializers = [];
    var _nfpaInflamabilidad_extraInitializers = [];
    var _nfpaReactividad_decorators;
    var _nfpaReactividad_initializers = [];
    var _nfpaReactividad_extraInitializers = [];
    return _a = /** @class */ (function () {
            function CreateProductoDto() {
                this.nombre = __runInitializers(this, _nombre_initializers, void 0);
                this.nfpaSalud = (__runInitializers(this, _nombre_extraInitializers), __runInitializers(this, _nfpaSalud_initializers, void 0));
                this.nfpaInflamabilidad = (__runInitializers(this, _nfpaSalud_extraInitializers), __runInitializers(this, _nfpaInflamabilidad_initializers, void 0));
                this.nfpaReactividad = (__runInitializers(this, _nfpaInflamabilidad_extraInitializers), __runInitializers(this, _nfpaReactividad_initializers, void 0));
                __runInitializers(this, _nfpaReactividad_extraInitializers);
            }
            return CreateProductoDto;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _nombre_decorators = [(0, class_validator_1.IsString)(), (0, class_validator_1.IsNotEmpty)(), (0, class_validator_1.MaxLength)(150)];
            _nfpaSalud_decorators = [(0, class_validator_1.IsOptional)(), (0, class_validator_1.IsInt)(), (0, class_validator_1.Min)(0), (0, class_validator_1.Max)(4)];
            _nfpaInflamabilidad_decorators = [(0, class_validator_1.IsOptional)(), (0, class_validator_1.IsInt)(), (0, class_validator_1.Min)(0), (0, class_validator_1.Max)(4)];
            _nfpaReactividad_decorators = [(0, class_validator_1.IsOptional)(), (0, class_validator_1.IsInt)(), (0, class_validator_1.Min)(0), (0, class_validator_1.Max)(4)];
            __esDecorate(null, null, _nombre_decorators, { kind: "field", name: "nombre", static: false, private: false, access: { has: function (obj) { return "nombre" in obj; }, get: function (obj) { return obj.nombre; }, set: function (obj, value) { obj.nombre = value; } }, metadata: _metadata }, _nombre_initializers, _nombre_extraInitializers);
            __esDecorate(null, null, _nfpaSalud_decorators, { kind: "field", name: "nfpaSalud", static: false, private: false, access: { has: function (obj) { return "nfpaSalud" in obj; }, get: function (obj) { return obj.nfpaSalud; }, set: function (obj, value) { obj.nfpaSalud = value; } }, metadata: _metadata }, _nfpaSalud_initializers, _nfpaSalud_extraInitializers);
            __esDecorate(null, null, _nfpaInflamabilidad_decorators, { kind: "field", name: "nfpaInflamabilidad", static: false, private: false, access: { has: function (obj) { return "nfpaInflamabilidad" in obj; }, get: function (obj) { return obj.nfpaInflamabilidad; }, set: function (obj, value) { obj.nfpaInflamabilidad = value; } }, metadata: _metadata }, _nfpaInflamabilidad_initializers, _nfpaInflamabilidad_extraInitializers);
            __esDecorate(null, null, _nfpaReactividad_decorators, { kind: "field", name: "nfpaReactividad", static: false, private: false, access: { has: function (obj) { return "nfpaReactividad" in obj; }, get: function (obj) { return obj.nfpaReactividad; }, set: function (obj, value) { obj.nfpaReactividad = value; } }, metadata: _metadata }, _nfpaReactividad_initializers, _nfpaReactividad_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.CreateProductoDto = CreateProductoDto;
