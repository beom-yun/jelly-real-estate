/*
  Warnings:

  - You are about to drop the column `CommonArea` on the `Property` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Property" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "propertyName" TEXT NOT NULL,
    "transactionType" TEXT NOT NULL DEFAULT 'sale',
    "deposit" INTEGER,
    "maintenanceCost" INTEGER,
    "address" TEXT,
    "year" TEXT,
    "commonArea" INTEGER,
    "dedicatedArea" INTEGER,
    "livingRoom" TEXT,
    "room" TEXT,
    "toilet" TEXT,
    "veranda" TEXT,
    "parkingLot" TEXT,
    "etc" TEXT,
    "loanAvailability" BOOLEAN NOT NULL DEFAULT false,
    "moveInAvailability" BOOLEAN NOT NULL DEFAULT false,
    "contractPeriod" TEXT,
    "gasFee" BOOLEAN NOT NULL DEFAULT false,
    "electricityFee" BOOLEAN NOT NULL DEFAULT false,
    "waterFee" BOOLEAN NOT NULL DEFAULT false,
    "cleaningFee" BOOLEAN NOT NULL DEFAULT false,
    "parkingFee" BOOLEAN NOT NULL DEFAULT false,
    "etcFee" TEXT,
    "moveInDate" DATETIME,
    "option" TEXT,
    "airConditioner" BOOLEAN NOT NULL DEFAULT false,
    "boiler" BOOLEAN NOT NULL DEFAULT false,
    "warmWater" BOOLEAN NOT NULL DEFAULT false,
    "generalWaste" BOOLEAN NOT NULL DEFAULT false,
    "foodWaste" BOOLEAN NOT NULL DEFAULT false,
    "recyclableWaste" BOOLEAN NOT NULL DEFAULT false,
    "commonEntrance" BOOLEAN NOT NULL DEFAULT false,
    "cctv" BOOLEAN NOT NULL DEFAULT false,
    "securityOffice" BOOLEAN NOT NULL DEFAULT false,
    "naturalLighting" TEXT,
    "soundproof" TEXT,
    "window" TEXT,
    "ventilationFacility" TEXT,
    "waterPressure" TEXT,
    "drainage" TEXT,
    "drainSmell" TEXT,
    "lighting" TEXT,
    "ceilingFloor" TEXT,
    "kitchenTile" BOOLEAN NOT NULL DEFAULT false,
    "toiletTile" BOOLEAN NOT NULL DEFAULT false,
    "entranceTile" BOOLEAN NOT NULL DEFAULT false,
    "waterLeak" TEXT,
    "mold" TEXT,
    "appraisal" TEXT,
    "userId" INTEGER NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    CONSTRAINT "Property_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Property" ("address", "airConditioner", "appraisal", "boiler", "cctv", "ceilingFloor", "cleaningFee", "commonEntrance", "contractPeriod", "created_at", "dedicatedArea", "deposit", "drainSmell", "drainage", "electricityFee", "entranceTile", "etc", "etcFee", "foodWaste", "gasFee", "generalWaste", "id", "kitchenTile", "lighting", "livingRoom", "loanAvailability", "maintenanceCost", "mold", "moveInAvailability", "moveInDate", "naturalLighting", "option", "parkingFee", "parkingLot", "propertyName", "recyclableWaste", "room", "securityOffice", "soundproof", "toilet", "toiletTile", "transactionType", "updated_at", "userId", "ventilationFacility", "veranda", "warmWater", "waterFee", "waterLeak", "waterPressure", "window", "year") SELECT "address", "airConditioner", "appraisal", "boiler", "cctv", "ceilingFloor", "cleaningFee", "commonEntrance", "contractPeriod", "created_at", "dedicatedArea", "deposit", "drainSmell", "drainage", "electricityFee", "entranceTile", "etc", "etcFee", "foodWaste", "gasFee", "generalWaste", "id", "kitchenTile", "lighting", "livingRoom", "loanAvailability", "maintenanceCost", "mold", "moveInAvailability", "moveInDate", "naturalLighting", "option", "parkingFee", "parkingLot", "propertyName", "recyclableWaste", "room", "securityOffice", "soundproof", "toilet", "toiletTile", "transactionType", "updated_at", "userId", "ventilationFacility", "veranda", "warmWater", "waterFee", "waterLeak", "waterPressure", "window", "year" FROM "Property";
DROP TABLE "Property";
ALTER TABLE "new_Property" RENAME TO "Property";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
