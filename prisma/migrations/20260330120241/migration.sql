/*
  Warnings:

  - You are about to drop the column `avatar` on the `ChatRoom` table. All the data in the column will be lost.
  - You are about to drop the column `email` on the `ChatRoom` table. All the data in the column will be lost.
  - You are about to drop the column `isAuthor` on the `ChatRoom` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `ChatRoom` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "ChatRoom" DROP COLUMN "avatar",
DROP COLUMN "email",
DROP COLUMN "isAuthor",
DROP COLUMN "name";

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "avatar" TEXT NOT NULL,
    "isAuthor" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ChatRoom" ADD CONSTRAINT "ChatRoom_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
