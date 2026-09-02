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
exports.EtiquetaGeneratorService = void 0;
var common_1 = require("@nestjs/common");
var fs = require("fs");
var path = require("path");
var Handlebars = require("handlebars");
var puppeteer_1 = require("puppeteer");
var etiqueta_config_1 = require("../config/etiqueta.config");
var EtiquetaGeneratorService = function () {
    var _classDecorators = [(0, common_1.Injectable)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var EtiquetaGeneratorService = _classThis = /** @class */ (function () {
        function EtiquetaGeneratorService_1() {
            this.browser = null;
            this.templatesCompiladas = new Map();
            this.fondoBase64 = null;
            this.fondoRomboBase64 = null;
            this.fondoBlancoBase64 = null; // nuevo
            this.fondoMuestrasBase64 = null; // nuevo (junto a los otros 3)
        }
        EtiquetaGeneratorService_1.prototype.getBrowser = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            if (!!this.browser) return [3 /*break*/, 2];
                            _a = this;
                            return [4 /*yield*/, puppeteer_1.default.launch({
                                    headless: true,
                                    args: ['--no-sandbox', '--disable-setuid-sandbox'],
                                })];
                        case 1:
                            _a.browser = _b.sent();
                            _b.label = 2;
                        case 2: return [2 /*return*/, this.browser];
                    }
                });
            });
        };
        // archivo viene de Plantilla.archivo (ej. "estandar.hbs")
        EtiquetaGeneratorService_1.prototype.getTemplate = function (archivo) {
            var ruta = path.join(__dirname, '..', 'assets', 'templates', archivo);
            var html = fs.readFileSync(ruta, 'utf-8');
            return Handlebars.compile(html); // siempre lee el archivo actual, sin cache
        };
        EtiquetaGeneratorService_1.prototype.getFondoBase64 = function () {
            if (!this.fondoBase64) {
                this.fondoBase64 = fs
                    .readFileSync(etiqueta_config_1.ETIQUETA_EMPRESA_CONFIG.fondoPath)
                    .toString('base64');
            }
            return this.fondoBase64;
        };
        EtiquetaGeneratorService_1.prototype.getFondoRomboBase64 = function () {
            if (!this.fondoRomboBase64) {
                this.fondoRomboBase64 = fs
                    .readFileSync(etiqueta_config_1.ETIQUETA_EMPRESA_CONFIG.fondoRomboPath)
                    .toString('base64');
            }
            return this.fondoRomboBase64;
        };
        EtiquetaGeneratorService_1.prototype.getFondoBlancoBase64 = function () {
            // nuevo
            if (!this.fondoBlancoBase64) {
                this.fondoBlancoBase64 = fs
                    .readFileSync(etiqueta_config_1.ETIQUETA_EMPRESA_CONFIG.fondoBlancoPath)
                    .toString('base64');
            }
            return this.fondoBlancoBase64;
        };
        EtiquetaGeneratorService_1.prototype.getFondoMuestrasBase64 = function () {
            if (!this.fondoMuestrasBase64) {
                this.fondoMuestrasBase64 = fs
                    .readFileSync(etiqueta_config_1.ETIQUETA_EMPRESA_CONFIG.fondoMuestrasPath)
                    .toString('base64');
            }
            return this.fondoMuestrasBase64;
        };
        EtiquetaGeneratorService_1.prototype.construirHtml = function (archivo, etiqueta) {
            var _a, _b, _c, _d;
            var esVolumen = etiqueta.unidadNeta === 'ML' || etiqueta.unidadNeta === 'L';
            var labelNeto = esVolumen ? 'CANT. NETO' : 'PESO NETO';
            var template = this.getTemplate(archivo);
            var fondoBase64 = archivo === 'con-rombo.hbs'
                ? this.getFondoRomboBase64()
                : archivo === 'blanco.hbs'
                    ? this.getFondoBlancoBase64()
                    : archivo === 'muestras.hbs'
                        ? this.getFondoMuestrasBase64()
                        : this.getFondoBase64();
            return template({
                widthPx: etiqueta_config_1.ETIQUETA_LABEL_PX.width,
                heightPx: etiqueta_config_1.ETIQUETA_LABEL_PX.height,
                fondoBase64: fondoBase64,
                fallbackFontFamily: 'Arial, sans-serif',
                producto: etiqueta.producto,
                numeroLote: etiqueta.numeroLote,
                fabricante: etiqueta.fabricante,
                fechaFabricacion: etiqueta.fechaFabricacion,
                fechaVencimiento: etiqueta.fechaVencimiento,
                pesoBruto: etiqueta.pesoBruto,
                unidadBruto: etiqueta.unidadBruto,
                pesoNeto: (_a = etiqueta.cantidadNeta) !== null && _a !== void 0 ? _a : '—',
                unidadNeto: etiqueta.unidadNeta,
                labelNeto: labelNeto,
                proforma: etiqueta.proforma,
                nfpaSalud: (_b = etiqueta.nfpaSalud) !== null && _b !== void 0 ? _b : 0,
                nfpaInflamabilidad: (_c = etiqueta.nfpaInflamabilidad) !== null && _c !== void 0 ? _c : 0,
                nfpaReactividad: (_d = etiqueta.nfpaReactividad) !== null && _d !== void 0 ? _d : 0,
            });
        };
        EtiquetaGeneratorService_1.prototype.generarImagen = function (archivo, etiqueta) {
            return __awaiter(this, void 0, void 0, function () {
                var html, browser, page;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            html = this.construirHtml(archivo, etiqueta);
                            return [4 /*yield*/, this.getBrowser()];
                        case 1:
                            browser = _a.sent();
                            return [4 /*yield*/, browser.newPage()];
                        case 2:
                            page = _a.sent();
                            _a.label = 3;
                        case 3:
                            _a.trys.push([3, , 9, 11]);
                            return [4 /*yield*/, page.setViewport({
                                    width: etiqueta_config_1.ETIQUETA_LABEL_PX.width,
                                    height: etiqueta_config_1.ETIQUETA_LABEL_PX.height,
                                    deviceScaleFactor: 1,
                                })];
                        case 4:
                            _a.sent();
                            return [4 /*yield*/, page.setContent(html, { waitUntil: 'load' })];
                        case 5:
                            _a.sent();
                            return [4 /*yield*/, page.evaluateHandle('document.fonts.ready')];
                        case 6:
                            _a.sent();
                            return [4 /*yield*/, page.evaluate(function () {
                                    var w = window;
                                    if (typeof w.ajustarNombreProducto === 'function') {
                                        w.ajustarNombreProducto();
                                    }
                                })];
                        case 7:
                            _a.sent();
                            return [4 /*yield*/, page.screenshot({ type: 'png' })];
                        case 8: return [2 /*return*/, (_a.sent())];
                        case 9: return [4 /*yield*/, page.close()];
                        case 10:
                            _a.sent();
                            return [7 /*endfinally*/];
                        case 11: return [2 /*return*/];
                    }
                });
            });
        };
        EtiquetaGeneratorService_1.prototype.cerrarBrowser = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!this.browser) return [3 /*break*/, 2];
                            return [4 /*yield*/, this.browser.close()];
                        case 1:
                            _a.sent();
                            this.browser = null;
                            _a.label = 2;
                        case 2: return [2 /*return*/];
                    }
                });
            });
        };
        return EtiquetaGeneratorService_1;
    }());
    __setFunctionName(_classThis, "EtiquetaGeneratorService");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        EtiquetaGeneratorService = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return EtiquetaGeneratorService = _classThis;
}();
exports.EtiquetaGeneratorService = EtiquetaGeneratorService;
