-- CreateEnum
CREATE TYPE "LocationType" AS ENUM ('Onsite', 'Remote', 'Hybrid');

-- CreateEnum
CREATE TYPE "EmploymentType" AS ENUM ('Contract', 'FullTime', 'PartTime', 'Internship');

-- CreateTable
CREATE TABLE "Career" (
    "id" SERIAL NOT NULL,
    "position" TEXT NOT NULL,
    "company" TEXT NOT NULL,
    "logo" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "location_type" "LocationType" NOT NULL,
    "employment_type" "EmploymentType" NOT NULL,
    "start_date" TEXT NOT NULL,
    "end_date" TEXT NOT NULL,
    "industry" TEXT NOT NULL,
    "link" TEXT NOT NULL,
    "responsibilities" TEXT[],
    "lessons_learned" TEXT[],
    "impact" TEXT[],
    "isShow" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Career_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Achievement" (
    "id" SERIAL NOT NULL,
    "credential_id" TEXT,
    "slug" TEXT,
    "name" TEXT NOT NULL,
    "issuing_organization" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "url_credential" TEXT,
    "issue_date" TEXT NOT NULL,
    "expiration_date" TEXT,
    "image" TEXT NOT NULL,
    "is_show" BOOLEAN DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Achievement_pkey" PRIMARY KEY ("id")
);
