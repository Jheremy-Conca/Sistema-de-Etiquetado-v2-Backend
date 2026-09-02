"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ETIQUETA_FUENTE_CONFIG = exports.ETIQUETA_EMPRESA_CONFIG = exports.ETIQUETA_LABEL_PX = exports.ETIQUETA_LABEL_CONFIG = void 0;
var path = require("path");
exports.ETIQUETA_LABEL_CONFIG = {
    widthMm: 108,
    heightMm: 60,
    dpi: 360, // antes 300 — coincide con la resolución nativa real del driver de la Epson
};
exports.ETIQUETA_LABEL_PX = {
    width: Math.round((exports.ETIQUETA_LABEL_CONFIG.widthMm / 25.4) * exports.ETIQUETA_LABEL_CONFIG.dpi),
    height: Math.round((exports.ETIQUETA_LABEL_CONFIG.heightMm / 25.4) * exports.ETIQUETA_LABEL_CONFIG.dpi),
};
// etiqueta.config.ts
exports.ETIQUETA_EMPRESA_CONFIG = {
    fondoPath: path.join(__dirname, '..', 'assets', 'etiqueta-fondo.png'),
    fondoRomboPath: path.join(__dirname, '..', 'assets', 'etiqueta-fondo-rombo.png'),
    fondoBlancoPath: path.join(__dirname, '..', 'assets', 'etiqueta-fondo-blanco.png'),
    fondoMuestrasPath: path.join(__dirname, '..', 'assets', 'etiqueta-fondo-muestras.png'), // nuevo
};
exports.ETIQUETA_FUENTE_CONFIG = {
    fontPath: path.join(__dirname, '..', 'assets', 'fonts', 'selawk.ttf'),
    fontBoldPath: path.join(__dirname, '..', 'assets', 'fonts', 'selawkb.ttf'),
    fontFormat: 'truetype',
    fallbackFamily: 'Arial, sans-serif',
};
