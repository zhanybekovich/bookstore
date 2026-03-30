import * as migration_20260322_233106_initial from './20260322_233106_initial';
import * as migration_20260327_101605_add_user_role from './20260327_101605_add_user_role';
import * as migration_20260327_103004_add_categories from './20260327_103004_add_categories';
import * as migration_20260330_064412_add_parent_to_categories from './20260330_064412_add_parent_to_categories';
import * as migration_20260330_071806_create_authors_table from './20260330_071806_create_authors_table';
import * as migration_20260330_072234_add_publishers_table from './20260330_072234_add_publishers_table';

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
    name: '20260330_072234_add_publishers_table'
  },
];
