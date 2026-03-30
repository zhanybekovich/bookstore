import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-vercel-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TABLE "publishers" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"logo_id" integer,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "publishers_id" integer;
  ALTER TABLE "publishers" ADD CONSTRAINT "publishers_logo_id_media_id_fk" FOREIGN KEY ("logo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  CREATE INDEX "publishers_logo_idx" ON "publishers" USING btree ("logo_id");
  CREATE INDEX "publishers_updated_at_idx" ON "publishers" USING btree ("updated_at");
  CREATE INDEX "publishers_created_at_idx" ON "publishers" USING btree ("created_at");
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_publishers_fk" FOREIGN KEY ("publishers_id") REFERENCES "public"."publishers"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "payload_locked_documents_rels_publishers_id_idx" ON "payload_locked_documents_rels" USING btree ("publishers_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "publishers" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "publishers" CASCADE;
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_publishers_fk";
  
  DROP INDEX "payload_locked_documents_rels_publishers_id_idx";
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN "publishers_id";`)
}
