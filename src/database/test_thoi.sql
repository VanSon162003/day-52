-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th6 13, 2025 lúc 11:02 PM
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
-- Cấu trúc bảng cho bảng `queue`
--

CREATE TABLE `queue` (
  `id` bigint(191) UNSIGNED NOT NULL,
  `type` varchar(191) DEFAULT NULL,
  `status` varchar(191) NOT NULL DEFAULT 'pending',
  `payload` varchar(191) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime NOT NULL DEFAULT current_timestamp(),
  `max_retries` int(191) DEFAULT NULL,
  `retries_count` int(191) NOT NULL DEFAULT 0,
  `retried_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `queue`
--

INSERT INTO `queue` (`id`, `type`, `status`, `payload`, `created_at`, `updated_at`, `max_retries`, `retries_count`, `retried_at`) VALUES
(2, 'sendVerifyEmailJob', 'reject', '{\"userId\":69}', '2025-06-10 22:20:32', '2025-06-10 22:20:32', NULL, 0, '2025-06-14 00:00:00'),
(3, 'sendVerifyEmailJob', 'reject', '{\"userId\":70}', '2025-06-10 22:23:40', '2025-06-10 22:23:40', NULL, 0, '2025-06-14 00:00:00'),
(4, 'sendVerifyEmailJob', 'reject', '{\"userId\":71}', '2025-06-10 22:28:13', '2025-06-10 22:28:13', NULL, 0, '2025-06-14 00:00:00'),
(5, 'sendVerifyEmailJob', 'reject', '{\"userId\":72}', '2025-06-10 22:30:21', '2025-06-10 22:30:21', NULL, 0, '2025-06-14 00:00:00'),
(6, 'sendVerifyEmailJob', 'reject', '{\"userId\":73}', '2025-06-10 22:31:28', '2025-06-10 22:31:28', NULL, 0, '2025-06-14 00:00:00'),
(7, 'sendVerifyEmailJob', 'reject', '{\"userId\":74}', '2025-06-10 22:32:27', '2025-06-10 22:32:27', NULL, 0, '2025-06-14 00:00:00'),
(8, 'sendVerifyEmailJob', 'reject', '{\"userId\":75}', '2025-06-10 22:33:16', '2025-06-10 22:33:16', NULL, 0, '2025-06-14 00:00:00'),
(9, 'sendVerifyEmailJob', 'reject', '{\"userId\":76}', '2025-06-10 22:34:15', '2025-06-10 22:34:15', NULL, 0, '2025-06-14 00:00:00'),
(10, 'sendVerifyEmailJob', 'reject', '{\"userId\":77}', '2025-06-10 22:35:29', '2025-06-10 22:35:29', NULL, 0, '2025-06-14 00:00:00'),
(11, 'sendVerifyEmailJob', 'reject', '{\"userId\":78}', '2025-06-10 22:36:59', '2025-06-10 22:36:59', NULL, 0, '2025-06-14 00:00:00'),
(12, 'sendVerifyEmailJob', 'reject', '{\"userId\":79}', '2025-06-10 22:38:41', '2025-06-10 22:38:41', NULL, 0, '2025-06-14 00:00:00'),
(13, 'sendVerifyEmailJob', 'completed', '{\"userId\":80}', '2025-06-10 22:39:53', '2025-06-10 22:39:53', NULL, 0, '2025-06-14 00:00:00'),
(14, 'sendVerifyEmailJob', 'completed', '{\"userId\":81}', '2025-06-14 00:26:19', '2025-06-14 00:26:19', NULL, 0, '2025-06-14 00:00:00'),
(15, 'sendVerifyEmailJob', 'completed', '{\"userId\":82}', '2025-06-14 00:34:43', '2025-06-14 00:34:43', 5, 0, '2025-06-14 00:00:00'),
(16, 'sendVerifyEmailJob', 'completed', '{\"userId\":83}', '2025-06-14 01:02:11', '2025-06-14 01:02:11', 5, 0, '2025-06-14 01:02:11'),
(17, 'sendVerifyEmailJob', 'completed', '{\"userId\":84}', '2025-06-14 01:22:57', '2025-06-14 01:22:57', 5, 0, '2025-06-14 01:22:57'),
(18, 'sendVerifyEmailJob', 'completed', '{\"userId\":85}', '2025-06-14 01:28:58', '2025-06-14 01:28:58', 5, 0, '2025-06-14 01:28:58'),
(19, 'sendVerifyEmailJob', 'failed', '{\"userId\":86}', '2025-06-14 01:38:08', '2025-06-14 01:38:08', 5, 5, '2025-06-14 01:38:34'),
(20, 'sendVerifyEmailJob', 'failed', '{\"userId\":87}', '2025-06-14 01:43:09', '2025-06-14 01:43:09', 5, 5, '2025-06-14 01:43:34'),
(21, 'sendVerifyEmailJob', 'completed', '{\"userId\":88}', '2025-06-14 01:45:25', '2025-06-14 01:45:25', 5, 5, '2025-06-14 01:45:51'),
(22, 'sendVerifyEmailJob', 'completed', '{\"userId\":89}', '2025-06-14 01:47:47', '2025-06-14 01:47:47', 5, 0, '2025-06-14 01:47:47'),
(23, 'sendVerifyEmailJob', 'completed', '{\"userId\":90}', '2025-06-14 01:48:39', '2025-06-14 01:48:39', 5, 0, '2025-06-14 01:48:39'),
(24, 'sendVerifyEmailJob', 'completed', '{\"userId\":91}', '2025-06-14 01:50:39', '2025-06-14 01:50:39', 5, 0, '2025-06-14 01:50:39'),
(25, 'sendVerifyEmailJob', 'completed', '{\"userId\":92}', '2025-06-14 01:54:22', '2025-06-14 01:54:22', 5, 0, '2025-06-14 01:54:22'),
(26, 'sendVerifyEmailJob', 'completed', '{\"userId\":93}', '2025-06-14 01:55:37', '2025-06-14 01:55:37', 5, 0, '2025-06-14 01:55:37'),
(27, 'sendVerifyEmailJob', 'completed', '{\"userId\":94}', '2025-06-14 01:58:55', '2025-06-14 01:58:55', 5, 0, '2025-06-14 01:58:55'),
(28, 'sendVerifyEmailJob', 'completed', '{\"userId\":96}', '2025-06-14 02:00:41', '2025-06-14 02:00:41', 5, 0, '2025-06-14 02:00:41'),
(29, 'sendVerifyEmailJob', 'completed', '{\"userId\":97}', '2025-06-14 02:05:07', '2025-06-14 02:05:07', 5, 0, '2025-06-14 02:05:07'),
(30, 'sendVerifyEmailJob', 'completed', '{\"userId\":98}', '2025-06-14 02:09:50', '2025-06-14 02:09:50', 5, 0, '2025-06-14 02:09:50'),
(31, 'sendVerifyEmailJob', 'completed', '{\"userId\":99}', '2025-06-14 02:10:45', '2025-06-14 02:10:45', 5, 0, '2025-06-14 02:10:45'),
(32, 'sendVerifyEmailJob', 'completed', '{\"userId\":100}', '2025-06-14 02:12:48', '2025-06-14 02:12:48', 5, 5, '2025-06-14 02:13:13'),
(33, 'sendVerifyEmailJob', 'completed', '{\"userId\":101}', '2025-06-14 02:24:42', '2025-06-14 02:24:42', 5, 0, '2025-06-14 02:24:42'),
(34, 'sendVerifyEmailJob', 'completed', '{\"userId\":101}', '2025-06-14 02:33:12', '2025-06-14 02:33:12', 5, 0, '2025-06-14 02:33:12'),
(35, 'sendVerifyEmailJob', 'failed', '{}', '2025-06-14 02:34:00', '2025-06-14 02:34:00', 5, 5, '2025-06-14 02:34:25'),
(36, 'sendVerifyEmailJob', 'failed', '{}', '2025-06-14 02:34:11', '2025-06-14 02:34:11', 5, 5, '2025-06-14 02:34:37'),
(37, 'sendVerifyEmailJob', 'failed', '{}', '2025-06-14 02:36:32', '2025-06-14 02:36:32', 5, 5, '2025-06-14 02:36:58'),
(38, 'sendVerifyEmailJob', 'completed', '{\"userId\":101}', '2025-06-14 02:39:35', '2025-06-14 02:39:35', 5, 0, '2025-06-14 02:39:35'),
(39, 'sendVerifyEmailJob', 'failed', '{}', '2025-06-14 02:39:43', '2025-06-14 02:39:43', 5, 5, '2025-06-14 02:40:09'),
(40, 'sendVerifyEmailJob', 'completed', '{\"userId\":101}', '2025-06-14 02:41:28', '2025-06-14 02:41:28', 5, 0, '2025-06-14 02:41:28'),
(41, 'sendVerifyEmailJob', 'completed', '{\"userId\":101}', '2025-06-14 02:41:32', '2025-06-14 02:41:32', 5, 0, '2025-06-14 02:41:32'),
(42, 'sendVerifyEmailJob', 'completed', '{\"userId\":101}', '2025-06-14 02:43:13', '2025-06-14 02:43:13', 5, 0, '2025-06-14 02:43:13'),
(43, 'sendVerifyEmailJob', 'completed', '{\"userId\":101}', '2025-06-14 02:46:15', '2025-06-14 02:46:15', 5, 0, '2025-06-14 02:46:15'),
(44, 'sendVerifyEmailJob', 'completed', '{\"userId\":101}', '2025-06-14 02:47:16', '2025-06-14 02:47:16', 5, 0, '2025-06-14 02:47:16'),
(45, 'sendVerifyEmailJob', 'completed', '{\"userId\":101}', '2025-06-14 02:49:42', '2025-06-14 02:49:42', 5, 0, '2025-06-14 02:49:42'),
(46, 'sendVerifyEmailJob', 'completed', '{\"userId\":101}', '2025-06-14 02:52:45', '2025-06-14 02:52:45', 5, 0, '2025-06-14 02:52:45'),
(47, 'sendVerifyEmailJob', 'completed', '{\"userId\":101}', '2025-06-14 02:54:37', '2025-06-14 02:54:37', 5, 0, '2025-06-14 02:54:37'),
(48, 'sendVerifyEmailJob', 'completed', '{\"userId\":101}', '2025-06-14 02:55:06', '2025-06-14 02:55:06', 5, 0, '2025-06-14 02:55:06'),
(49, 'sendVerifyEmailJob', 'completed', '{\"userId\":101}', '2025-06-14 02:58:13', '2025-06-14 02:58:13', 5, 0, '2025-06-14 02:58:13'),
(50, 'sendVerifyEmailJob', 'completed', '{\"userId\":101}', '2025-06-14 03:04:27', '2025-06-14 03:04:27', 5, 0, '2025-06-14 03:04:27'),
(51, 'sendVerifyEmailJob', 'completed', '{\"userId\":101}', '2025-06-14 03:05:29', '2025-06-14 03:05:29', 5, 0, '2025-06-14 03:05:29'),
(52, 'sendVerifyEmailJob', 'completed', '{\"userId\":101}', '2025-06-14 03:05:45', '2025-06-14 03:05:45', 5, 0, '2025-06-14 03:05:45'),
(53, 'sendVerifyEmailJob', 'completed', '{\"userId\":101}', '2025-06-14 03:07:32', '2025-06-14 03:07:32', 5, 0, '2025-06-14 03:07:32'),
(54, 'sendVerifyEmailJob', 'completed', '{\"userId\":101}', '2025-06-14 03:07:55', '2025-06-14 03:07:55', 5, 0, '2025-06-14 03:07:55'),
(55, 'sendVerifyEmailJob', 'completed', '{\"userId\":101}', '2025-06-14 03:10:05', '2025-06-14 03:10:05', 5, 0, '2025-06-14 03:10:05'),
(56, 'sendVerifyEmailJob', 'completed', '{\"userId\":101}', '2025-06-14 03:11:15', '2025-06-14 03:11:15', 5, 0, '2025-06-14 03:11:15'),
(57, 'sendVerifyEmailJob', 'completed', '{\"userId\":101}', '2025-06-14 03:31:59', '2025-06-14 03:31:59', 5, 0, '2025-06-14 03:31:59'),
(58, 'sendVerifyEmailJob', 'completed', '{\"userId\":101}', '2025-06-14 03:35:43', '2025-06-14 03:35:43', 5, 0, '2025-06-14 03:35:43'),
(59, 'sendVerifyEmailJob', 'completed', '{\"userId\":101}', '2025-06-14 03:36:37', '2025-06-14 03:36:37', 5, 0, '2025-06-14 03:36:37');

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
('3518d6dd-8ace-476e-9a40-15dc92b3157b', '{\"userId\":101}', '2025-06-14 20:56:54', '2025-06-07 20:56:54', '2025-06-14 03:36:58'),
('465f2c97-97fd-4c4b-b551-3565870527c2', '{\"userId\":22}', '2025-06-07 20:15:14', '2025-05-31 20:15:14', '2025-05-31 20:40:44'),
('e5b976df-b75c-428b-b674-9882f3f05928', '{}', '2025-06-17 01:33:27', '2025-06-10 01:33:27', '2025-06-10 01:40:02'),
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
(59, 0, '', NULL, 'hh@gmail.com', NULL, NULL, NULL, NULL, 'c87f99f610928a03b57ca00c7ffb2750', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(61, 0, '', NULL, 'hkjhkjh@gmail.com', NULL, NULL, NULL, NULL, 'c87f99f610928a03b57ca00c7ffb2750', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(62, 0, '', NULL, 'jlkajksljd@gmail.com', NULL, NULL, NULL, NULL, 'c87f99f610928a03b57ca00c7ffb2750', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(63, 0, '', NULL, 'kllk@gmail.com', NULL, NULL, NULL, NULL, 'e10adc3949ba59abbe56e057f20f883e', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(64, 0, '', NULL, 'kjlkjklj@gmail.com', NULL, NULL, NULL, NULL, '4bb2c9d9a57a0d2a53e7c4d56c952331', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(73, 0, '', NULL, 'hjkask@gmail.com', NULL, NULL, NULL, NULL, 'b3a73fbedd32a7f69daeafaa8c3d95aa', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(76, 0, '', NULL, '12@gmail.com', NULL, NULL, NULL, NULL, '25d55ad283aa400af464c76d713c07ad', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(77, 0, '', NULL, 'kl@gmail.com', NULL, NULL, NULL, NULL, '01944696c7ad1832a83ff67de0d28d07', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(96, 0, '', NULL, 'jjasj@gmail.com', NULL, NULL, NULL, NULL, '0cc175b9c0f1b6a831c399e269772661', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(101, 0, '', NULL, 'vanson16032003@gmail.com', NULL, NULL, NULL, NULL, '25d55ad283aa400af464c76d713c07ad', NULL, NULL, NULL, NULL, NULL, NULL, '2025-06-14 03:36:44', NULL, NULL, NULL);

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
-- Chỉ mục cho bảng `queue`
--
ALTER TABLE `queue`
  ADD PRIMARY KEY (`id`);

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
-- AUTO_INCREMENT cho bảng `queue`
--
ALTER TABLE `queue`
  MODIFY `id` bigint(191) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=60;

--
-- AUTO_INCREMENT cho bảng `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=102;

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
