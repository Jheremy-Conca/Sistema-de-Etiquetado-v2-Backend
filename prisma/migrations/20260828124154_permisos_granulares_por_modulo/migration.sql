/*
  Warnings:

  - You are about to drop the `usuarios` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "Recurso" AS ENUM ('LOTES', 'PRODUCTOS', 'FABRICANTES', 'PLANTILLAS', 'COA', 'USUARIOS');

-- DropTable
DROP TABLE "usuarios";

-- DropEnum
DROP TYPE "RolUsuario";

-- CreateTable
CREATE TABLE "Usuario" (
    "id" SERIAL NOT NULL,
    "supabaseUserId" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,
    "esAdmin" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Usuario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Permiso" (
    "id" SERIAL NOT NULL,
    "usuarioId" INTEGER NOT NULL,
    "recurso" "Recurso" NOT NULL,
    "puedeVer" BOOLEAN NOT NULL DEFAULT false,
    "puedeCrear" BOOLEAN NOT NULL DEFAULT false,
    "puedeEditar" BOOLEAN NOT NULL DEFAULT false,
    "puedeEliminar" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Permiso_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_supabaseUserId_key" ON "Usuario"("supabaseUserId");

-- CreateIndex
CREATE UNIQUE INDEX "Permiso_usuarioId_recurso_key" ON "Permiso"("usuarioId", "recurso");

-- AddForeignKey
ALTER TABLE "Permiso" ADD CONSTRAINT "Permiso_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE CASCADE ON UPDATE CASCADE;
