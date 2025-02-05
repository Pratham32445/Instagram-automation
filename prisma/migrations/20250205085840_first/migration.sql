-- CreateTable
CREATE TABLE "User" (
    "Id" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "accountId" TEXT NOT NULL,
    "account_type" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("Id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");
