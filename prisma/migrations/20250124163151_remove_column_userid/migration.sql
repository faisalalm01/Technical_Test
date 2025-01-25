/*
  Warnings:

  - You are about to drop the column `userId` on the `location` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `location` DROP FOREIGN KEY `Location_userId_fkey`;

-- DropIndex
DROP INDEX `Location_userId_fkey` ON `location`;

-- AlterTable
ALTER TABLE `location` DROP COLUMN `userId`;
