-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th6 09, 2025 lúc 06:54 PM
-- Phiên bản máy phục vụ: 10.4.28-MariaDB
-- Phiên bản PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `test_thoi`
--
CREATE DATABASE IF NOT EXISTS `test_thoi` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE `test_thoi`;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `courses`
--

CREATE TABLE `courses` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(191) NOT NULL,
  `subtitle` varchar(191) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `thumbnail` varchar(191) NOT NULL,
  `price` decimal(10,2) DEFAULT NULL,
  `discount_price` decimal(10,2) DEFAULT NULL,
  `is_free` int(11) DEFAULT NULL,
  `duration` varchar(191) DEFAULT NULL,
  `total_lessons` varchar(191) DEFAULT NULL,
  `total_students` varchar(191) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `update_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `courses`
--

INSERT INTO `courses` (`id`, `title`, `subtitle`, `description`, `thumbnail`, `price`, `discount_price`, `is_free`, `duration`, `total_lessons`, `total_students`, `created_at`, `update_at`) VALUES
(1, 'chupapi', NULL, 'sss', '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2, 'sss', 'a', 'nnn', '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3, 'aú', NULL, NULL, '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `learning_path`
--

CREATE TABLE `learning_path` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `course_id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(191) NOT NULL,
  `description` text DEFAULT NULL,
  `thumnail` varchar(191) NOT NULL,
  `total_courses` varchar(191) DEFAULT NULL,
  `total_duration` varchar(191) DEFAULT NULL,
  `status` varchar(191) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `learning_path`
--

INSERT INTO `learning_path` (`id`, `course_id`, `title`, `description`, `thumnail`, `total_courses`, `total_duration`, `status`, `created_at`, `updated_at`) VALUES
(1, 0, 'ú', NULL, 'heheh', NULL, NULL, NULL, NULL, NULL),
(2, 0, '', NULL, 'a', NULL, NULL, NULL, NULL, NULL),
(3, 0, '', 'a', '', NULL, NULL, NULL, NULL, NULL),
(4, 0, '', 'a', '', NULL, NULL, NULL, NULL, NULL),
(5, 0, '', 'a', '', NULL, NULL, NULL, NULL, NULL),
(6, 0, 's', NULL, '(Null)', NULL, NULL, NULL, NULL, NULL),
(7, 0, '', NULL, 'a', NULL, NULL, NULL, NULL, NULL),
(8, 0, '', NULL, 'z', NULL, NULL, NULL, NULL, NULL),
(9, 0, 'a', NULL, 'ád', NULL, NULL, NULL, NULL, NULL),
(10, 0, '', NULL, 'a', NULL, NULL, NULL, NULL, NULL),
(11, 0, '', 's', '', NULL, NULL, NULL, NULL, NULL),
(12, 2, '', 'đâsd', '', NULL, NULL, NULL, NULL, NULL),
(14, 1, '', NULL, '', NULL, NULL, NULL, NULL, NULL),
(15, 0, '', NULL, '', NULL, NULL, NULL, NULL, NULL),
(17, 1, 'aú', NULL, '', NULL, NULL, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `posts`
--

CREATE TABLE `posts` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED DEFAULT NULL,
  `title` varchar(191) NOT NULL,
  `slug` varchar(191) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `content` text NOT NULL,
  `published_at` datetime DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `posts`
--

INSERT INTO `posts` (`id`, `user_id`, `title`, `slug`, `description`, `content`, `published_at`, `created_at`, `updated_at`) VALUES
(205, NULL, 'a', NULL, NULL, '', NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `sessions`
--

CREATE TABLE `sessions` (
  `id` char(36) NOT NULL,
  `data` text DEFAULT NULL,
  `expires_at` datetime NOT NULL,
  `created_at` datetime DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci ROW_FORMAT=DYNAMIC;

--
-- Đang đổ dữ liệu cho bảng `sessions`
--

INSERT INTO `sessions` (`id`, `data`, `expires_at`, `created_at`, `updated_at`) VALUES
('329f93aa-28ec-4e4c-a350-a47a28c843c8', '', '2025-06-06 17:50:59', '2025-05-30 17:50:59', '2025-05-30 18:45:17'),
('34eea0ac-2ce0-46fe-a635-ec11b90ec5d5', '{\"userId\":23}', '2025-06-06 18:45:06', '2025-05-30 18:45:06', '2025-05-31 00:15:41'),
('3518d6dd-8ace-476e-9a40-15dc92b3157b', '{}', '2025-06-14 20:56:54', '2025-06-07 20:56:54', '2025-06-07 22:29:57'),
('465f2c97-97fd-4c4b-b551-3565870527c2', '{\"userId\":22}', '2025-06-07 20:15:14', '2025-05-31 20:15:14', '2025-05-31 20:40:44'),
('eb7e17e9-7760-4f79-bba6-9d18362aae99', '{\"userId\":40}', '2025-06-07 20:41:31', '2025-05-31 20:41:31', '2025-06-03 15:25:29');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `course_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(191) NOT NULL,
  `brithday` date DEFAULT NULL,
  `email` varchar(191) NOT NULL,
  `username` varchar(191) DEFAULT NULL,
  `avatar` varchar(191) DEFAULT NULL,
  `phone` varchar(191) DEFAULT NULL,
  `gender` enum('mail','femail','other') DEFAULT NULL,
  `password` varchar(191) DEFAULT NULL,
  `rel_status` varchar(191) DEFAULT NULL,
  `bio` varchar(191) DEFAULT NULL,
  `address` varchar(191) DEFAULT NULL,
  `blocked_at` datetime DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `verified_at` datetime DEFAULT NULL,
  `role` varchar(191) DEFAULT NULL,
  `status` varchar(191) DEFAULT NULL,
  `logined_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `users`
--

INSERT INTO `users` (`id`, `course_id`, `name`, `brithday`, `email`, `username`, `avatar`, `phone`, `gender`, `password`, `rel_status`, `bio`, `address`, `blocked_at`, `created_at`, `updated_at`, `verified_at`, `role`, `status`, `logined_at`) VALUES
(40, 0, '', NULL, 'sn@gmail.com', NULL, NULL, NULL, NULL, 'c87f99f610928a03b57ca00c7ffb2750', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(43, 0, 'sơn văn', NULL, 'sonvan16032003@gmail.com', 'sơn đay', NULL, '0388308588', NULL, '12345678', NULL, NULL, 'ha noi', NULL, NULL, NULL, NULL, 'admin', 'active', NULL),
(45, 0, 'muốn gì', NULL, 'son@gmail.com', 'sonhi', NULL, '0388308581', NULL, 'sondeptrai', NULL, NULL, 'hn', NULL, NULL, NULL, NULL, 'admin', 'active', NULL),
(46, 0, 'sơn văn', NULL, 'hi@gmail.con', 'hihih', NULL, '0388308631', NULL, '12345678', NULL, NULL, 'hn', NULL, NULL, NULL, NULL, 'admin', 'inactive', NULL),
(47, 0, 'muốn gìs', NULL, 'avvv@gmail.com', 'sss', NULL, '0388308585', NULL, 'sondeptrai', NULL, NULL, 'sn', NULL, NULL, NULL, NULL, 'admin', 'pending', NULL),
(49, 0, 'muốn gìss', NULL, 'assss@gmail.com', 'sonday', NULL, '0388308111', NULL, 'sondeptrai', NULL, NULL, '\" \" \"sn\"\"\"', NULL, NULL, NULL, NULL, 'editor', 'inactive', NULL),
(50, 0, '', NULL, 'sg@gmail.com', NULL, NULL, NULL, NULL, 'c87f99f610928a03b57ca00c7ffb2750', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(52, 0, '', NULL, 'vanson@gmail.com', NULL, NULL, NULL, NULL, 'c87f99f610928a03b57ca00c7ffb2750', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(53, 0, '', NULL, 'jjj@gmail.com', NULL, NULL, NULL, NULL, 'c87f99f610928a03b57ca00c7ffb2750', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(54, 0, '', NULL, 'sss@gmail.com', NULL, NULL, NULL, NULL, 'c87f99f610928a03b57ca00c7ffb2750', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(55, 0, '', NULL, 'son11@gmail.com', NULL, NULL, NULL, NULL, 'c87f99f610928a03b57ca00c7ffb2750', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(56, 0, '', NULL, 'jja@gmail.com', NULL, NULL, NULL, NULL, 'c87f99f610928a03b57ca00c7ffb2750', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(57, 0, '', NULL, 'jklj@gmail.com', NULL, NULL, NULL, NULL, 'c87f99f610928a03b57ca00c7ffb2750', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(58, 0, '', NULL, 'soaokaso@gmail.com', NULL, NULL, NULL, NULL, 'c87f99f610928a03b57ca00c7ffb2750', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(59, 0, '', NULL, 'hh@gmail.com', NULL, NULL, NULL, NULL, 'c87f99f610928a03b57ca00c7ffb2750', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `courses`
--
ALTER TABLE `courses`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `learning_path`
--
ALTER TABLE `learning_path`
  ADD PRIMARY KEY (`id`),
  ADD KEY `course_id_froign_ket` (`course_id`);

--
-- Chỉ mục cho bảng `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `slug_unique` (`slug`),
  ADD KEY `user_id_foreign_key` (`user_id`);

--
-- Chỉ mục cho bảng `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`id`) USING BTREE,
  ADD KEY `sessions_expires_at_idx` (`expires_at`) USING BTREE;

--
-- Chỉ mục cho bảng `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email_unique` (`email`),
  ADD UNIQUE KEY `usename_unique` (`username`),
  ADD UNIQUE KEY `phone_unique` (`phone`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `courses`
--
ALTER TABLE `courses`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT cho bảng `learning_path`
--
ALTER TABLE `learning_path`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT cho bảng `posts`
--
ALTER TABLE `posts`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=206;

--
-- AUTO_INCREMENT cho bảng `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=60;

--
-- Các ràng buộc cho các bảng đã đổ
--

--
-- Các ràng buộc cho bảng `learning_path`
--
ALTER TABLE `learning_path`
  ADD CONSTRAINT `course_id_froign_ket` FOREIGN KEY (`course_id`) REFERENCES `courses` (`id`) ON DELETE CASCADE;

--
-- Các ràng buộc cho bảng `posts`
--
ALTER TABLE `posts`
  ADD CONSTRAINT `user_id_foreign_key` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
