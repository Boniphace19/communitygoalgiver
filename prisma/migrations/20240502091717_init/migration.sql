/*
  Warnings:

  - You are about to drop the `Player` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Player";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "User";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "fan_profiles" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "fullname" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "players" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "playername" TEXT NOT NULL,
    "nationality" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "teams" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "teamname" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "matches" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "season" INTEGER NOT NULL,
    "roundno" INTEGER NOT NULL,
    "date" DATETIME NOT NULL,
    "time" DATETIME NOT NULL,
    "hteam" TEXT NOT NULL,
    "ateam" TEXT NOT NULL,
    "venue" TEXT NOT NULL,
    "vlink" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "balls" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userid" INTEGER NOT NULL,
    "goalid" INTEGER NOT NULL,
    "matchid" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "goals" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "matchid" INTEGER NOT NULL,
    "playerid" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "team_player" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "teamid" INTEGER NOT NULL,
    "playerid" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "match_player" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "matchid" INTEGER NOT NULL,
    "playerid" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "fan_profiles_email_key" ON "fan_profiles"("email");
