CREATE TABLE "doctors" (
	"id" serial PRIMARY KEY NOT NULL,
	"doctors_name" text NOT NULL,
	"email" text NOT NULL,
	"number" text NOT NULL,
	"street" text NOT NULL,
	"province" text NOT NULL,
	"city" text NOT NULL,
	"baranggay" text NOT NULL,
	"created" timestamp DEFAULT now()
);
--> statement-breakpoint
ALTER TABLE "articles" ALTER COLUMN "image" SET NOT NULL;