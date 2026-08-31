/**
 * Convierte el texto de fechaVencimiento a un Date para poder ordenar/filtrar.
 * Acepta "MM/AAAA" (usa el último día de ese mes) o "DD/MM/AAAA" (tal cual).
 * Si el formato no matchea ninguno de los dos, devuelve null.
 */
export function parsearFechaVencimiento(texto: string): Date | null {
  const soloMesAnio = /^(\d{1,2})\/(\d{4})$/;
  const diaMesAnio = /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/;

  const matchDiaMesAnio = texto.trim().match(diaMesAnio);
  if (matchDiaMesAnio) {
    const [, dia, mes, anio] = matchDiaMesAnio;
    const fecha = new Date(Number(anio), Number(mes) - 1, Number(dia));
    return isNaN(fecha.getTime()) ? null : fecha;
  }

  const matchMesAnio = texto.trim().match(soloMesAnio);
  if (matchMesAnio) {
    const [, mes, anio] = matchMesAnio;
    // día 0 del mes siguiente = último día del mes indicado
    const fecha = new Date(Number(anio), Number(mes), 0);
    return isNaN(fecha.getTime()) ? null : fecha;
  }

  return null;
}