import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-vercel-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TABLE "store" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"description" varchar NOT NULL,
  	"address" varchar NOT NULL,
  	"phone" varchar NOT NULL,
  	"email" varchar NOT NULL,
  	"socials_facebook" varchar,
  	"socials_instagram" varchar,
  	"socials_telegram" varchar,
  	"socials_whatsapp" varchar,
  	"logo_id" integer,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  ALTER TABLE "store" ADD CONSTRAINT "store_logo_id_media_id_fk" FOREIGN KEY ("logo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  CREATE INDEX "store_logo_idx" ON "store" USING btree ("logo_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "store" CASCADE;`)
}
