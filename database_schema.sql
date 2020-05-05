DROP TABLE IF EXISTS app_user;

CREATE TABLE "app_user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL,
    "display_name" VARCHAR (80) NOT NULL,
    "is_admin" BOOLEAN NOT NULL DEFAULT FALSE,
    "date_created" TIMESTAMP NOT NULL DEFAULT NOW()
);