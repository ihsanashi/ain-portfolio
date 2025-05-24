import * as migration_20250524_012132 from './20250524_012132';
import * as migration_20250524_013856 from './20250524_013856';

export const migrations = [
  {
    up: migration_20250524_012132.up,
    down: migration_20250524_012132.down,
    name: '20250524_012132',
  },
  {
    up: migration_20250524_013856.up,
    down: migration_20250524_013856.down,
    name: '20250524_013856'
  },
];
