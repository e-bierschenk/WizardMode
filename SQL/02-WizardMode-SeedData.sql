USE [WizardMode];
GO

set identity_insert [UserProfile] on
insert into UserProfile (Id, Email, FirebaseUserId, [Initials]) VALUES (1, 'bob@aol.com', 'uUX0RPeScFfm9KslVXoiyiSvn3q1', 'GOR');
insert into UserProfile (Id, Email, FirebaseUserId, [Initials]) VALUES (2, 'bob2@aol.com', 'uUX0RPeScFfm9KslVXoiyiSvn3q2', 'ERC');
insert into UserProfile (Id, Email, FirebaseUserId, [Initials]) VALUES (3, 'foo@bar.com', 'uUX0RPeScFfm9KslVXoiyiSvn3q3', 'BOB');
insert into UserProfile (Id, Email, FirebaseUserId, [Initials]) VALUES (4, 'dw@gmail.com', 'uUX0RPeScFfm9KslVXoiyiSvn3q4', 'DJW');
insert into UserProfile (Id, Email, FirebaseUserId, [Initials]) VALUES (5, 'kevin@homealone.com', 'uUX0RPeScFfm9KslVXoiyiSvn3q5', 'KEV');
insert into UserProfile (Id, Email, FirebaseUserId, [Initials]) VALUES (6, 'fake@email.com', 'uUX0RPeScFfm9KslVXoiyiSvn3q6', 'WOW');
insert into UserProfile (Id, Email, FirebaseUserId, [Initials]) VALUES (7, 'more@cow.com', 'uUX0RPeScFfm9KslVXoiyiSvn3q7', 'ENT');
insert into UserProfile (Id, Email, FirebaseUserId, [Initials]) VALUES (8, 'junk@mail.com', 'uUX0RPeScFfm9KslVXoiyiSvn3q8', 'KDE');
insert into UserProfile (Id, Email, FirebaseUserId, [Initials]) VALUES (9, 'dead@alive.com', 'uUX0RPeScFfm9KslVXoiyiSvn3q9', 'LYS');
insert into UserProfile (Id, Email, FirebaseUserId, [Initials]) VALUES (10, 'gorgar@gorgar.com', 'uUX0RPeScFfm9KslVXoiyiSvn3q0', 'GOR');
set identity_insert [UserProfile] off

set identity_insert [Score] on
insert into Score (Id, ScoreValue, UserProfileId, OpdbId, DateCreated) VALUES (1, 1591573470, 1, 'G4ODR-MDXEy', '2022-03-26');
insert into Score (Id, ScoreValue, UserProfileId, OpdbId, DateCreated) VALUES (2, 45000, 2, 'G4ODR-MDXEy', '2022-03-27');
insert into Score (Id, ScoreValue, UserProfileId, OpdbId, DateCreated) VALUES (3, 2926282, 3, 'G4ODR-MDXEy', '2022-03-28');
insert into Score (Id, ScoreValue, UserProfileId, OpdbId, DateCreated) VALUES (4, 35040124, 4, 'G4ODR-MDXEy', '2022-03-26');
insert into Score (Id, ScoreValue, UserProfileId, OpdbId, DateCreated) VALUES (5, 15000000, 5, 'G4ODR-MDXEy', '2022-03-27');
insert into Score (Id, ScoreValue, UserProfileId, OpdbId, DateCreated) VALUES (6, 262834951, 6, 'G4ODR-MDXEy', '2022-04-26');
insert into Score (Id, ScoreValue, UserProfileId, OpdbId, DateCreated) VALUES (7, 92384781, 7, 'G4ODR-MDXEy', '2022-04-26');
insert into Score (Id, ScoreValue, UserProfileId, OpdbId, DateCreated) VALUES (8, 314884738, 8, 'G4ODR-MDXEy', '2022-06-26');
insert into Score (Id, ScoreValue, UserProfileId, OpdbId, DateCreated) VALUES (9, 98374982, 9, 'G4ODR-MDXEy', '2022-05-24');
insert into Score (Id, ScoreValue, UserProfileId, OpdbId, DateCreated) VALUES (10, 234873, 10, 'G4ODR-MDXEy', '2022-03-13');
insert into Score (Id, ScoreValue, UserProfileId, OpdbId, DateCreated) VALUES (11, 770838272, 2, 'G5pe4-MePZv', '2022-03-26');
insert into Score (Id, ScoreValue, UserProfileId, OpdbId, DateCreated) VALUES (12, 770838272, 2, 'G5pe4-MePZv', '2022-04-01');
insert into Score (Id, ScoreValue, UserProfileId, OpdbId, DateCreated) VALUES (13, 342342233, 3, 'G5pe4-MePZv', '2022-05-01');
insert into Score (Id, ScoreValue, UserProfileId, OpdbId, DateCreated) VALUES (14, 234234, 1, 'G5pe4-MePZv', '2022-07-01');
insert into Score (Id, ScoreValue, UserProfileId, OpdbId, DateCreated) VALUES (15, 121234323, 4, 'G5pe4-MePZv', '2022-04-03');
insert into Score (Id, ScoreValue, UserProfileId, OpdbId, DateCreated) VALUES (16, 8348767, 5, 'G5pe4-MePZv', '2022-05-11');
insert into Score (Id, ScoreValue, UserProfileId, OpdbId, DateCreated) VALUES (17, 1591573470, 1, 'GrXzD-MjBPX', '2022-03-26');
insert into Score (Id, ScoreValue, UserProfileId, OpdbId, DateCreated) VALUES (18, 1000000, 2, 'GrXzD-MjBPX', '2022-03-27');
insert into Score (Id, ScoreValue, UserProfileId, OpdbId, DateCreated) VALUES (19, 101282, 3, 'GrXzD-MjBPX', '2022-03-28');
insert into Score (Id, ScoreValue, UserProfileId, OpdbId, DateCreated) VALUES (21, 7343733, 7, 'GrXzD-MjBPX', '2022-03-29');
insert into Score (Id, ScoreValue, UserProfileId, OpdbId, DateCreated) VALUES (22, 1243411, 8, 'GrXzD-MjBPX', '2022-03-30');
insert into Score (Id, ScoreValue, UserProfileId, OpdbId, DateCreated) VALUES (23, 1921450, 9, 'G5zd6-MJVo4', '2022-03-31');
insert into Score (Id, ScoreValue, UserProfileId, OpdbId, DateCreated) VALUES (24, 25830, 2, 'G5zd6-MJVo4', '2022-04-01');
insert into Score (Id, ScoreValue, UserProfileId, OpdbId, DateCreated) VALUES (25, 999999, 3, 'G5zd6-MJVo4', '2022-04-02');
insert into Score (Id, ScoreValue, UserProfileId, OpdbId, DateCreated) VALUES (26, 23423, 1, 'G5zd6-MJVo4', '2022-04-03');
insert into Score (Id, ScoreValue, UserProfileId, OpdbId, DateCreated) VALUES (27, 2348734, 6, 'G5zd6-MJVo4', '2022-04-04');
insert into Score (Id, ScoreValue, UserProfileId, OpdbId, DateCreated) VALUES (28, 2348773, 4, 'G5zd6-MJVo4', '2022-04-05');
insert into Score (Id, ScoreValue, UserProfileId, OpdbId, DateCreated) VALUES (29, 127272, 2, 'G5zd6-MJVo4', '2022-04-06');
insert into Score (Id, ScoreValue, UserProfileId, OpdbId, DateCreated) VALUES (30, 3483733, 10, 'G5zd6-MJVo4', '2022-05-26');
set identity_insert [Score] off

set identity_insert [Comment] on
insert into Comment (Id, UserProfileId, ScoreId, DateCreated, CommentText) VALUES (1, 1, 1, '2022-03-26', 'I cannot believe this one!');
insert into Comment (Id, UserProfileId, ScoreId, DateCreated, CommentText) VALUES (2, 2, 1, '2022-03-26', 'WOW, great score');
insert into Comment (Id, UserProfileId, ScoreId, DateCreated, CommentText) VALUES (3, 3, 1, '2022-03-26', 'How do you even get such a high score?');
insert into Comment (Id, UserProfileId, ScoreId, DateCreated, CommentText) VALUES (4, 1, 1, '2022-03-26', 'Right Ramp All Day...');
set identity_insert [Comment] off