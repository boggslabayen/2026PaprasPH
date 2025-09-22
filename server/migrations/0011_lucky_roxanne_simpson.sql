CREATE TABLE "articles" (
	"id" serial PRIMARY KEY NOT NULL,
	"description" text NOT NULL,
	"created" timestamp DEFAULT now()
);
