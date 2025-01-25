/*
  Warnings:

  - Added the required column `description` to the `Location` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Location` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `location` ADD COLUMN `description` VARCHAR(191) NOT NULL,
    ADD COLUMN `userId` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `Location` ADD CONSTRAINT `Location_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
