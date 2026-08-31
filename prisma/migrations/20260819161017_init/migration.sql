-- CreateTable
CREATE TABLE "fabricantes" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "nombreNormalizado" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "fabricantes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "productos" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "nombreNormalizado" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "productos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "plantillas" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "archivo" TEXT NOT NULL,
    "activa" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "plantillas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "lotes" (
    "id" SERIAL NOT NULL,
    "numeroLote" TEXT NOT NULL,
    "fechaFabricacion" TEXT NOT NULL,
    "fechaVencimiento" TEXT NOT NULL,
    "fechaVencimientoOrden" DATE,
    "productoId" INTEGER NOT NULL,
    "fabricanteId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "lotes_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "fabricantes_nombre_key" ON "fabricantes"("nombre");

-- CreateIndex
CREATE UNIQUE INDEX "fabricantes_nombreNormalizado_key" ON "fabricantes"("nombreNormalizado");

-- CreateIndex
CREATE UNIQUE INDEX "productos_nombre_key" ON "productos"("nombre");

-- CreateIndex
CREATE UNIQUE INDEX "productos_nombreNormalizado_key" ON "productos"("nombreNormalizado");

-- CreateIndex
CREATE UNIQUE INDEX "plantillas_nombre_key" ON "plantillas"("nombre");

-- CreateIndex
CREATE INDEX "lotes_numeroLote_idx" ON "lotes"("numeroLote");

-- CreateIndex
CREATE INDEX "lotes_fabricanteId_idx" ON "lotes"("fabricanteId");

-- CreateIndex
CREATE UNIQUE INDEX "lotes_productoId_fabricanteId_numeroLote_key" ON "lotes"("productoId", "fabricanteId", "numeroLote");

-- AddForeignKey
ALTER TABLE "lotes" ADD CONSTRAINT "lotes_productoId_fkey" FOREIGN KEY ("productoId") REFERENCES "productos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "lotes" ADD CONSTRAINT "lotes_fabricanteId_fkey" FOREIGN KEY ("fabricanteId") REFERENCES "fabricantes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
