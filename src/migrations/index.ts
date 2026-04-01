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
    name: '20260401_064603_add_about_page'
  },
];
