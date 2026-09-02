"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
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
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
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
exports.LotesService = void 0;
var common_1 = require("@nestjs/common");
var prisma_1 = require("../generated/prisma");
var parsear_fecha_vencimiento_1 = require("../common/parsear-fecha-vencimiento");
var LotesService = function () {
    var _classDecorators = [(0, common_1.Injectable)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var LotesService = _classThis = /** @class */ (function () {
        function LotesService_1(prisma) {
            this.prisma = prisma;
        }
        LotesService_1.prototype.validarRelaciones = function (productoId, fabricanteId) {
            return __awaiter(this, void 0, void 0, function () {
                var _a, producto, fabricante;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4 /*yield*/, Promise.all([
                                this.prisma.producto.findUnique({ where: { id: productoId } }),
                                this.prisma.fabricante.findUnique({ where: { id: fabricanteId } }),
                            ])];
                        case 1:
                            _a = _b.sent(), producto = _a[0], fabricante = _a[1];
                            if (!producto) {
                                throw new common_1.NotFoundException("Producto con id ".concat(productoId, " no encontrado"));
                            }
                            if (!fabricante) {
                                throw new common_1.NotFoundException("Fabricante con id ".concat(fabricanteId, " no encontrado"));
                            }
                            return [2 /*return*/];
                    }
                });
            });
        };
        LotesService_1.prototype.create = function (dto) {
            return __awaiter(this, void 0, void 0, function () {
                var error_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.validarRelaciones(dto.productoId, dto.fabricanteId)];
                        case 1:
                            _a.sent();
                            _a.label = 2;
                        case 2:
                            _a.trys.push([2, 4, , 5]);
                            return [4 /*yield*/, this.prisma.lote.create({
                                    data: {
                                        numeroLote: dto.numeroLote.trim(),
                                        fechaFabricacion: dto.fechaFabricacion.trim(),
                                        fechaVencimiento: dto.fechaVencimiento.trim(),
                                        fechaVencimientoOrden: (0, parsear_fecha_vencimiento_1.parsearFechaVencimiento)(dto.fechaVencimiento),
                                        productoId: dto.productoId,
                                        fabricanteId: dto.fabricanteId,
                                    },
                                    include: { producto: true, fabricante: true },
                                })];
                        case 3: return [2 /*return*/, _a.sent()];
                        case 4:
                            error_1 = _a.sent();
                            this.handleDuplicado(error_1);
                            return [3 /*break*/, 5];
                        case 5: return [2 /*return*/];
                    }
                });
            });
        };
        LotesService_1.prototype.findAll = function () {
            return this.prisma.lote.findMany({
                include: { producto: true, fabricante: true },
                orderBy: { createdAt: 'desc' },
            });
        };
        LotesService_1.prototype.findOne = function (id) {
            return __awaiter(this, void 0, void 0, function () {
                var lote;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.prisma.lote.findUnique({
                                where: { id: id },
                                include: { producto: true, fabricante: true },
                            })];
                        case 1:
                            lote = _a.sent();
                            if (!lote) {
                                throw new common_1.NotFoundException("Lote con id ".concat(id, " no encontrado"));
                            }
                            return [2 /*return*/, lote];
                    }
                });
            });
        };
        LotesService_1.prototype.update = function (id, dto) {
            return __awaiter(this, void 0, void 0, function () {
                var actual, error_2;
                var _a, _b;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0: return [4 /*yield*/, this.findOne(id)];
                        case 1:
                            _c.sent();
                            if (!(dto.productoId || dto.fabricanteId)) return [3 /*break*/, 4];
                            return [4 /*yield*/, this.prisma.lote.findUniqueOrThrow({ where: { id: id } })];
                        case 2:
                            actual = _c.sent();
                            return [4 /*yield*/, this.validarRelaciones((_a = dto.productoId) !== null && _a !== void 0 ? _a : actual.productoId, (_b = dto.fabricanteId) !== null && _b !== void 0 ? _b : actual.fabricanteId)];
                        case 3:
                            _c.sent();
                            _c.label = 4;
                        case 4:
                            _c.trys.push([4, 6, , 7]);
                            return [4 /*yield*/, this.prisma.lote.update({
                                    where: { id: id },
                                    data: __assign(__assign(__assign(__assign(__assign({}, (dto.numeroLote && { numeroLote: dto.numeroLote.trim() })), (dto.fechaFabricacion && { fechaFabricacion: dto.fechaFabricacion.trim() })), (dto.fechaVencimiento && {
                                        fechaVencimiento: dto.fechaVencimiento.trim(),
                                        fechaVencimientoOrden: (0, parsear_fecha_vencimiento_1.parsearFechaVencimiento)(dto.fechaVencimiento),
                                    })), (dto.productoId && { productoId: dto.productoId })), (dto.fabricanteId && { fabricanteId: dto.fabricanteId })),
                                    include: { producto: true, fabricante: true },
                                })];
                        case 5: return [2 /*return*/, _c.sent()];
                        case 6:
                            error_2 = _c.sent();
                            this.handleDuplicado(error_2);
                            return [3 /*break*/, 7];
                        case 7: return [2 /*return*/];
                    }
                });
            });
        };
        LotesService_1.prototype.remove = function (id) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.findOne(id)];
                        case 1:
                            _a.sent();
                            return [2 /*return*/, this.prisma.lote.delete({ where: { id: id } })];
                    }
                });
            });
        };
        // --- COA ---
        LotesService_1.prototype.setCoaUrl = function (id, coaUrl) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.findOne(id)];
                        case 1:
                            _a.sent();
                            return [2 /*return*/, this.prisma.lote.update({
                                    where: { id: id },
                                    data: { coaUrl: coaUrl },
                                    include: { producto: true, fabricante: true },
                                })];
                    }
                });
            });
        };
        LotesService_1.prototype.removeCoaUrl = function (id) {
            return __awaiter(this, void 0, void 0, function () {
                var lote;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.findOne(id)];
                        case 1:
                            lote = _a.sent();
                            if (!lote.coaUrl)
                                return [2 /*return*/, lote];
                            return [2 /*return*/, this.prisma.lote.update({
                                    where: { id: id },
                                    data: { coaUrl: null },
                                    include: { producto: true, fabricante: true },
                                })];
                    }
                });
            });
        };
        LotesService_1.prototype.handleDuplicado = function (error) {
            if (error instanceof prisma_1.Prisma.PrismaClientKnownRequestError && error.code === 'P2002') {
                throw new common_1.ConflictException('Ya existe un lote con ese número para este producto y fabricante');
            }
            throw error;
        };
        return LotesService_1;
    }());
    __setFunctionName(_classThis, "LotesService");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        LotesService = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return LotesService = _classThis;
}();
exports.LotesService = LotesService;
