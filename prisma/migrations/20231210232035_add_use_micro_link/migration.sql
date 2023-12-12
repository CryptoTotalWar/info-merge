/*
  Warnings:

  - You are about to drop the column `expiration` on the `Headline` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Headline` DROP COLUMN `expiration`,
    ADD COLUMN `useMicroLink` BOOLEAN NOT NULL DEFAULT true;
