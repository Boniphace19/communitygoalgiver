/*
  Warnings:

  - You are about to drop the `match_player` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `team_player` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `minute` to the `goals` table without a default value. This is not possible if the table is not empty.
  - Added the required column `mobileno` to the `fan_profiles` table without a default value. This is not possible if the table is not empty.
  - Added the required column `playerid` to the `balls` table without a default value. This is not possible if the table is not empty.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "match_player";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "team_player";
PRAGMA foreign_keys=on;

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_goals" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "matchid" INTEGER NOT NULL,
    "playerid" INTEGER NOT NULL,
    "minute" INTEGER NOT NULL
);
INSERT INTO "new_goals" ("id", "matchid", "playerid") SELECT "id", "matchid", "playerid" FROM "goals";
DROP TABLE "goals";
ALTER TABLE "new_goals" RENAME TO "goals";
CREATE TABLE "new_fan_profiles" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "fullname" TEXT NOT NULL,
    "mobileno" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" DATETIME NOT NULL
);
INSERT INTO "new_fan_profiles" ("createdAt", "email", "fullname", "id", "password", "updateAt", "username") SELECT "createdAt", "email", "fullname", "id", "password", "updateAt", "username" FROM "fan_profiles";
DROP TABLE "fan_profiles";
ALTER TABLE "new_fan_profiles" RENAME TO "fan_profiles";
CREATE UNIQUE INDEX "fan_profiles_email_key" ON "fan_profiles"("email");
CREATE TABLE "new_balls" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "playerid" INTEGER NOT NULL,
    "userid" INTEGER NOT NULL,
    "goalid" INTEGER NOT NULL,
    "matchid" INTEGER NOT NULL
);
INSERT INTO "new_balls" ("goalid", "id", "matchid", "userid") SELECT "goalid", "id", "matchid", "userid" FROM "balls";
DROP TABLE "balls";
ALTER TABLE "new_balls" RENAME TO "balls";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
