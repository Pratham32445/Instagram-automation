-- DropForeignKey
ALTER TABLE "KeyWord" DROP CONSTRAINT "KeyWord_userId_fkey";

-- AddForeignKey
ALTER TABLE "KeyWord" ADD CONSTRAINT "KeyWord_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;
