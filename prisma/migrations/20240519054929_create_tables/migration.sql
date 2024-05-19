/*
  Warnings:

  - You are about to drop the `Validate` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `Validate`;

-- CreateTable
CREATE TABLE `Validator` (
    `id` VARCHAR(191) NOT NULL,
    `firstName` VARCHAR(191) NOT NULL,
    `lastName` VARCHAR(191) NOT NULL,
    `wallet` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Validator_wallet_key`(`wallet`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
