-- CreateTable
CREATE TABLE `menu` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `menu_id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(100) NOT NULL,
    `key` VARCHAR(100) NOT NULL,
    `type` TINYINT NOT NULL,
    `icon` VARCHAR(100) NULL,
    `path` VARCHAR(255) NULL,
    `order` INTEGER UNSIGNED NULL DEFAULT 0,
    `parent_id` INTEGER UNSIGNED NULL,
    `is_out_chain` TINYINT UNSIGNED NOT NULL DEFAULT 0,
    `created_time` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `modified_time` DATETIME(3) NULL,
    `deleted_time` DATETIME(3) NULL,
    `created_by` INTEGER UNSIGNED NOT NULL,
    `modified_by` INTEGER UNSIGNED NULL,
    `deleted_by` INTEGER UNSIGNED NULL,
    `is_del` TINYINT UNSIGNED NULL DEFAULT 1,
    `enabled` TINYINT UNSIGNED NULL DEFAULT 1,

    INDEX `menu_menu_id_idx`(`menu_id`),
    UNIQUE INDEX `menu_menu_id_key`(`menu_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tag` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `tag_id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(100) NOT NULL,
    `type` TINYINT NOT NULL,
    `created_time` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `modified_time` DATETIME(3) NULL,
    `deleted_time` DATETIME(3) NULL,
    `created_by` INTEGER UNSIGNED NOT NULL,
    `modified_by` INTEGER UNSIGNED NULL,
    `deleted_by` INTEGER UNSIGNED NULL,
    `is_del` TINYINT UNSIGNED NULL DEFAULT 1,
    `enabled` TINYINT UNSIGNED NULL DEFAULT 1,

    INDEX `tag_tag_id_idx`(`tag_id`),
    UNIQUE INDEX `tag_tag_id_key`(`tag_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `category` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `category_id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(100) NOT NULL,
    `type` TINYINT NOT NULL,
    `created_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `modified_time` DATETIME(3) NULL,
    `deleted_time` DATETIME(3) NULL,
    `created_by` INTEGER UNSIGNED NOT NULL,
    `modified_by` INTEGER UNSIGNED NULL,
    `deleted_by` INTEGER UNSIGNED NULL,
    `is_del` TINYINT UNSIGNED NULL DEFAULT 1,
    `enabled` TINYINT UNSIGNED NULL DEFAULT 1,
    `editable` TINYINT UNSIGNED NULL DEFAULT 1,

    INDEX `category_category_id_idx`(`category_id`),
    UNIQUE INDEX `category_category_id_key`(`category_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `article` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `article_id` VARCHAR(191) NOT NULL,
    `title` VARCHAR(100) NOT NULL,
    `desc` VARCHAR(255) NULL,
    `summary` VARCHAR(255) NULL,
    `cover_image_url` VARCHAR(255) NULL,
    `content` LONGTEXT NOT NULL,
    `category_id` VARCHAR(191) NOT NULL,
    `encryption` TINYINT UNSIGNED NULL DEFAULT 0,
    `password` VARCHAR(32) NULL,
    `weight` INTEGER UNSIGNED NULL DEFAULT 0,
    `created_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `modified_time` DATETIME(3) NULL,
    `deleted_time` DATETIME(3) NULL,
    `created_by` INTEGER UNSIGNED NOT NULL,
    `modified_by` INTEGER UNSIGNED NULL,
    `deleted_by` INTEGER UNSIGNED NULL,
    `is_top` TINYINT UNSIGNED NULL DEFAULT 0,
    `is_del` TINYINT UNSIGNED NULL DEFAULT 1,
    `is_published` TINYINT UNSIGNED NULL DEFAULT 1,
    `enabled` TINYINT UNSIGNED NULL DEFAULT 1,

    INDEX `article_article_id_idx`(`article_id`),
    UNIQUE INDEX `article_article_id_key`(`article_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
