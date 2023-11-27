-- CreateTable
CREATE TABLE `Headline` (
    `id` VARCHAR(191) NOT NULL,
    `headlineContent` VARCHAR(191) NOT NULL,
    `hyperlink` VARCHAR(191) NOT NULL,
    `categoryTag` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `isBreakingNews` BOOLEAN NOT NULL DEFAULT false,
    `expiration` DATETIME(3),

    INDEX `Headline_categoryTag_createdAt_idx`(`categoryTag`, `createdAt`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
