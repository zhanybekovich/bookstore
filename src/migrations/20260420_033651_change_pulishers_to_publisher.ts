import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-vercel-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "products_rels" DROP CONSTRAINT "products_rels_publishers_fk";
  
  DROP INDEX "products_rels_publishers_id_idx";
  ALTER TABLE "products" ADD COLUMN "publisher_id" integer;
  ALTER TABLE "products" ADD CONSTRAINT "products_publisher_id_publishers_id_fk" FOREIGN KEY ("publisher_id") REFERENCES "public"."publishers"("id") ON DELETE set null ON UPDATE no action;
  CREATE INDEX "products_publisher_idx" ON "products" USING btree ("publisher_id");
  ALTER TABLE "products_rels" DROP COLUMN "publishers_id";`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "products" DROP CONSTRAINT "products_publisher_id_publishers_id_fk";
  
  DROP INDEX "products_publisher_idx";
  ALTER TABLE "products_rels" ADD COLUMN "publishers_id" integer;
  ALTER TABLE "products_rels" ADD CONSTRAINT "products_rels_publishers_fk" FOREIGN KEY ("publishers_id") REFERENCES "public"."publishers"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "products_rels_publishers_id_idx" ON "products_rels" USING btree ("publishers_id");
  ALTER TABLE "products" DROP COLUMN "publisher_id";`)
}
