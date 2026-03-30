/*
  Warnings:

  - Added the required column `avatar` to the `ChatRoom` table without a default value. This is not possible if the table is not empty.
  - Added the required column `email` to the `ChatRoom` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `ChatRoom` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ChatRoom" ADD COLUMN     "avatar" TEXT NOT NULL,
ADD COLUMN     "email" TEXT NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL;
