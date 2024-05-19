/*
  Warnings:

  - The primary key for the `News` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Added the required column `author` to the `News` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `News` DROP PRIMARY KEY,
    ADD COLUMN `author` VARCHAR(191) NOT NULL,
    MODIFY `id` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`id`);
