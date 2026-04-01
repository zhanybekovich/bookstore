import * as migration_20260322_233106_initial from './20260322_233106_initial';
import * as migration_20260327_101605_add_user_role from './20260327_101605_add_user_role';
import * as migration_20260327_103004_add_categories from './20260327_103004_add_categories';
import * as migration_20260330_064412_add_parent_to_categories from './20260330_064412_add_parent_to_categories';
import * as migration_20260330_071806_create_authors_table from './20260330_071806_create_authors_table';
import * as migration_20260330_072234_add_publishers_table from './20260330_072234_add_publishers_table';
import * as migration_20260330_073510_add_products_table from './20260330_073510_add_products_table';
import * as migration_20260330_082244_add_orders_table from './20260330_082244_add_orders_table';
import * as migration_20260401_025427_add_instock_column_to_orders_table from './20260401_025427_add_instock_column_to_orders_table';
import * as migration_20260401_030847_add_store_global from './20260401_030847_add_store_global';
import * as migration_20260401_062542_add_publisheYear_column from './20260401_062542_add_publisheYear_column';
import * as migration_20260401_064603_add_about_page from './20260401_064603_add_about_page';
import * as migration_20260401_064844_add_delivery from './20260401_064844_add_delivery';
import * as migration_20260401_065148_add_return from './20260401_065148_add_return';
import * as migration_20260401_065447_add_hero_image from './20260401_065447_add_hero_image';
import * as migration_20260401_071704_add_terms_of_use from './20260401_071704_add_terms_of_use';
import * as migration_20260401_071937_add_privacy_policy from './20260401_071937_add_privacy_policy';

export const migrations = [
  {
    up: migration_20260322_233106_initial.up,
    down: migration_20260322_233106_initial.down,
    name: '20260322_233106_initial',
  },
  {
    up: migration_20260327_101605_add_user_role.up,
    down: migration_20260327_101605_add_user_role.down,
    name: '20260327_101605_add_user_role',
  },
  {
    up: migration_20260327_103004_add_categories.up,
    down: migration_20260327_103004_add_categories.down,
    name: '20260327_103004_add_categories',
  },
  {
    up: migration_20260330_064412_add_parent_to_categories.up,
    down: migration_20260330_064412_add_parent_to_categories.down,
    name: '20260330_064412_add_parent_to_categories',
  },
  {
    up: migration_20260330_071806_create_authors_table.up,
    down: migration_20260330_071806_create_authors_table.down,
    name: '20260330_071806_create_authors_table',
  },
  {
    up: migration_20260330_072234_add_publishers_table.up,
    down: migration_20260330_072234_add_publishers_table.down,
    name: '20260330_072234_add_publishers_table',
  },
  {
    up: migration_20260330_073510_add_products_table.up,
    down: migration_20260330_073510_add_products_table.down,
    name: '20260330_073510_add_products_table',
  },
  {
    up: migration_20260330_082244_add_orders_table.up,
    down: migration_20260330_082244_add_orders_table.down,
    name: '20260330_082244_add_orders_table',
  },
  {
    up: migration_20260401_025427_add_instock_column_to_orders_table.up,
    down: migration_20260401_025427_add_instock_column_to_orders_table.down,
    name: '20260401_025427_add_instock_column_to_orders_table',
  },
  {
    up: migration_20260401_030847_add_store_global.up,
    down: migration_20260401_030847_add_store_global.down,
    name: '20260401_030847_add_store_global',
  },
  {
    up: migration_20260401_062542_add_publisheYear_column.up,
    down: migration_20260401_062542_add_publisheYear_column.down,
    name: '20260401_062542_add_publisheYear_column',
  },
  {
    up: migration_20260401_064603_add_about_page.up,
    down: migration_20260401_064603_add_about_page.down,
    name: '20260401_064603_add_about_page',
  },
  {
    up: migration_20260401_064844_add_delivery.up,
    down: migration_20260401_064844_add_delivery.down,
    name: '20260401_064844_add_delivery',
  },
  {
    up: migration_20260401_065148_add_return.up,
    down: migration_20260401_065148_add_return.down,
    name: '20260401_065148_add_return',
  },
  {
    up: migration_20260401_065447_add_hero_image.up,
    down: migration_20260401_065447_add_hero_image.down,
    name: '20260401_065447_add_hero_image',
  },
  {
    up: migration_20260401_071704_add_terms_of_use.up,
    down: migration_20260401_071704_add_terms_of_use.down,
    name: '20260401_071704_add_terms_of_use',
  },
  {
    up: migration_20260401_071937_add_privacy_policy.up,
    down: migration_20260401_071937_add_privacy_policy.down,
    name: '20260401_071937_add_privacy_policy'
  },
];
