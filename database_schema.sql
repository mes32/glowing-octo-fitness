DROP TABLE IF EXISTS calisthenic_duration;
DROP TABLE IF EXISTS calisthenic_reps;
DROP TABLE IF EXISTS calisthenic_set;
DROP TABLE IF EXISTS calisthenic_exercise_enum;
DROP TABLE IF EXISTS workout;

DROP TABLE IF EXISTS friend_request;
DROP TABLE IF EXISTS friend;

DROP TABLE IF EXISTS app_user;

CREATE TABLE app_user (
    id SERIAL PRIMARY KEY,
    username VARCHAR (80) UNIQUE NOT NULL,
    password VARCHAR (1000) NOT NULL,
    display_name VARCHAR (80) NOT NULL,
    is_admin BOOLEAN NOT NULL DEFAULT FALSE,
    date_created TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE friend (
    user_id INT REFERENCES app_user(id) ON DELETE CASCADE,
    friend_id INT REFERENCES app_user(id) ON DELETE CASCADE,
    date_created TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    PRIMARY KEY (user_id, friend_id)
);

CREATE TABLE friend_request (
    id SERIAL PRIMARY KEY,
    from_user_id INT REFERENCES app_user(id) ON DELETE CASCADE,
    to_user_id INT REFERENCES app_user(id) ON DELETE CASCADE,
    date_created TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE workout (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES app_user(id) ON DELETE CASCADE,
    date_created TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE calisthenic_exercise_enum (
    id VARCHAR(6) PRIMARY KEY,
    exercise_name VARCHAR(200)
);
INSERT INTO calisthenic_exercise_enum
    (id, exercise_name)
    VALUES
    ('100001', 'burbees'),
    ('100002', 'jumping jacks'),
    ('200001', 'situps'),
    ('200002', 'crunches'),
    ('200003', 'planks'),
    ('300001', 'chinups'),
    ('300002', 'pullups'),
    ('400001', 'rows'),
    ('500001', 'pushups pike position'),
    ('600001', 'pushups'),
    ('700001', 'squats'),
    ('700002', 'lunges'),
    ('800001', 'single leg deadlift');

CREATE TABLE calisthenic_set (
    id SERIAL PRIMARY KEY,
    workout_id INT REFERENCES workout(id) ON DELETE CASCADE,
    workout_order INT NOT NULL,
    CONSTRAINT positive_workout_order CHECK (workout_order > 0),
    calisthenic_exercise VARCHAR(6) REFERENCES calisthenic_exercise_enum(id),
    CONSTRAINT unique_workout_order UNIQUE (workout_id, workout_order)
);

CREATE TABLE calisthenic_reps (
    id SERIAL PRIMARY KEY,
    set_id INT REFERENCES calisthenic_set(id) ON DELETE CASCADE,
    rep_count INT NOT NULL,
    CONSTRAINT nonnegative_rep_count CHECK (rep_count >= 0)
);

CREATE TABLE calisthenic_duration (
    id SERIAL PRIMARY KEY,
    set_id INT REFERENCES calisthenic_set(id) ON DELETE CASCADE,
    duration_sec INT NOT NULL,
    CONSTRAINT nonnegative_rep_duration CHECK (duration_sec >= 0)
);