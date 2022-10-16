-- CreateTable
CREATE TABLE "Composer" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "proxyName" TEXT,

    CONSTRAINT "Composer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Recipient" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT,
    "phone" TEXT,
    "composerId" TEXT NOT NULL,

    CONSTRAINT "Recipient_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Occasion" (
    "id" TEXT NOT NULL,
    "label" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "recipientId" TEXT NOT NULL,
    "message" TEXT,
    "videoName" TEXT,

    CONSTRAINT "Occasion_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Recipient" ADD CONSTRAINT "Recipient_composerId_fkey" FOREIGN KEY ("composerId") REFERENCES "Composer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Occasion" ADD CONSTRAINT "Occasion_recipientId_fkey" FOREIGN KEY ("recipientId") REFERENCES "Recipient"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
