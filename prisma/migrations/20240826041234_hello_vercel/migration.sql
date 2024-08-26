-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT,
    "password" TEXT,
    "phone" TEXT,
    "avatar" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Property" (
    "id" SERIAL NOT NULL,
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
    "moveInDate" TIMESTAMP(3),
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
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Property_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Photo" (
    "id" SERIAL NOT NULL,
    "url" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "propertyId" INTEGER NOT NULL,

    CONSTRAINT "Photo_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_phone_key" ON "User"("phone");

-- AddForeignKey
ALTER TABLE "Property" ADD CONSTRAINT "Property_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Photo" ADD CONSTRAINT "Photo_propertyId_fkey" FOREIGN KEY ("propertyId") REFERENCES "Property"("id") ON DELETE CASCADE ON UPDATE CASCADE;
