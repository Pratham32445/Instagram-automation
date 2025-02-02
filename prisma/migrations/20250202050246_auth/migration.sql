-- CreateTable
CREATE TABLE "User" (
    "Id" TEXT NOT NULL,
    "InstaId" TEXT NOT NULL,
    "access_token" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "account_type" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("Id")
);
