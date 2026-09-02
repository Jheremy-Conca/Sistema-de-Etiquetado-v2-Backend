-- CreateEnum
CREATE TYPE "EstadoTrabajoImpresion" AS ENUM ('PENDIENTE', 'IMPRESO', 'ERROR');

-- CreateTable
CREATE TABLE "trabajos_impresion" (
    "id" SERIAL NOT NULL,
    "loteId" INTEGER NOT NULL,
    "plantillaId" INTEGER NOT NULL,
    "pesoBruto" TEXT NOT NULL,
    "unidadBruto" TEXT NOT NULL,
    "cantidadNeta" TEXT,
    "unidadNeta" TEXT NOT NULL,
    "proforma" TEXT NOT NULL,
    "imagenPath" TEXT NOT NULL,
    "estado" "EstadoTrabajoImpresion" NOT NULL DEFAULT 'PENDIENTE',
    "mensajeError" TEXT,
    "creadoPorId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "trabajos_impresion_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "trabajos_impresion" ADD CONSTRAINT "trabajos_impresion_loteId_fkey" FOREIGN KEY ("loteId") REFERENCES "lotes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "trabajos_impresion" ADD CONSTRAINT "trabajos_impresion_plantillaId_fkey" FOREIGN KEY ("plantillaId") REFERENCES "plantillas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "trabajos_impresion" ADD CONSTRAINT "trabajos_impresion_creadoPorId_fkey" FOREIGN KEY ("creadoPorId") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
