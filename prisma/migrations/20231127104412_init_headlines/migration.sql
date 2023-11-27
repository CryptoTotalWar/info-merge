-- CreateTable
CREATE TABLE "Headline" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "headlineContent" TEXT NOT NULL,
    "hyperlink" TEXT NOT NULL,
    "categoryTag" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "isBreakingNews" BOOLEAN NOT NULL DEFAULT false,
    "expiration" DATETIME NOT NULL
);

-- CreateIndex
CREATE INDEX "Headline_categoryTag_createdAt_idx" ON "Headline"("categoryTag", "createdAt");
