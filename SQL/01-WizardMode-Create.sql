USE [master]

IF db_id('WizardMode') IS NULl
  CREATE DATABASE [WizardMode]
GO

USE [WizardMode]
GO

DROP TABLE IF EXISTS [Comment];
DROP TABLE IF EXISTS [Score];
DROP TABLE IF EXISTS [UserProfile];
GO

CREATE TABLE [UserProfile] (
  [Id] int PRIMARY KEY IDENTITY(1, 1),
  [Email] nvarchar(255) UNIQUE NOT NULL,
  [FireBaseUserId] nvarchar(255) UNIQUE NOT NULL,
  [Initials] nvarchar(255) UNIQUE NOT NULL
)
GO

CREATE TABLE [Score] (
  [Id] int PRIMARY KEY IDENTITY(1, 1),
  [ScoreValue] int NOT NULL,
  [UserProfileId] int NOT NULL,
  [OpdbId] nvarchar(255) NOT NULL,
  [ImgUrl] nvarchar(255),
  [DateCreated] datetime NOT NULL
)
GO

CREATE TABLE [Comment] (
  [Id] int PRIMARY KEY IDENTITY(1, 1),
  [UserProfileId] int NOT NULL,
  [ScoreId] int NOT NULL,
  [CommentText] nvarchar(255) NOT NULL,
  [DateCreated] datetime NOT NULL
)
GO

ALTER TABLE [Score] ADD FOREIGN KEY ([UserProfileId]) REFERENCES [UserProfile] ([Id])
GO

ALTER TABLE [Comment] ADD FOREIGN KEY ([UserProfileId]) REFERENCES [UserProfile] ([Id])
GO

ALTER TABLE [Comment] ADD FOREIGN KEY ([ScoreId]) REFERENCES [Score] ([Id])
GO
