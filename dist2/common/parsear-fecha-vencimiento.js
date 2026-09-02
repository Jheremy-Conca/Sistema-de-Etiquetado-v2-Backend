"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parsearFechaVencimiento = parsearFechaVencimiento;
/**
 * Convierte el texto de fechaVencimiento a un Date para poder ordenar/filtrar.
 * Acepta "MM/AAAA" (usa el último día de ese mes) o "DD/MM/AAAA" (tal cual).
 * Si el formato no matchea ninguno de los dos, devuelve null.
 */
function parsearFechaVencimiento(texto) {
    var soloMesAnio = /^(\d{1,2})\/(\d{4})$/;
    var diaMesAnio = /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/;
    var matchDiaMesAnio = texto.trim().match(diaMesAnio);
    if (matchDiaMesAnio) {
        var dia = matchDiaMesAnio[1], mes = matchDiaMesAnio[2], anio = matchDiaMesAnio[3];
        var fecha = new Date(Number(anio), Number(mes) - 1, Number(dia));
        return isNaN(fecha.getTime()) ? null : fecha;
    }
    var matchMesAnio = texto.trim().match(soloMesAnio);
    if (matchMesAnio) {
        var mes = matchMesAnio[1], anio = matchMesAnio[2];
        // día 0 del mes siguiente = último día del mes indicado
        var fecha = new Date(Number(anio), Number(mes), 0);
        return isNaN(fecha.getTime()) ? null : fecha;
    }
    return null;
}
