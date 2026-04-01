import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-vercel-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "store" ALTER COLUMN "logo_id" SET NOT NULL;
  ALTER TABLE "store" ADD COLUMN "hero_image_id" integer NOT NULL;
  ALTER TABLE "store" ADD CONSTRAINT "store_hero_image_id_media_id_fk" FOREIGN KEY ("hero_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  CREATE INDEX "store_hero_image_idx" ON "store" USING btree ("hero_image_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "store" DROP CONSTRAINT "store_hero_image_id_media_id_fk";
  
  DROP INDEX "store_hero_image_idx";
  ALTER TABLE "store" ALTER COLUMN "logo_id" DROP NOT NULL;
  ALTER TABLE "store" DROP COLUMN "hero_image_id";`)
}
