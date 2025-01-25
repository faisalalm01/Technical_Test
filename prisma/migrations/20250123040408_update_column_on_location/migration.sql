/*
  Warnings:

  - You are about to drop the column `description` on the `location` table. All the data in the column will be lost.
  - Added the required column `address` to the `Location` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `location` DROP COLUMN `description`,
    ADD COLUMN `address` VARCHAR(191) NOT NULL;
