-- CreateTable
CREATE TABLE "KeyWord" (
    "Id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "Key" TEXT NOT NULL,
    "Value" TEXT NOT NULL,

    CONSTRAINT "KeyWord_pkey" PRIMARY KEY ("Id")
);

-- AddForeignKey
ALTER TABLE "KeyWord" ADD CONSTRAINT "KeyWord_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("Id") ON DELETE RESTRICT ON UPDATE CASCADE;
