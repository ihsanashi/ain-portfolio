import * as migration_20250524_012132 from './20250524_012132';

export const migrations = [
  {
    up: migration_20250524_012132.up,
    down: migration_20250524_012132.down,
    name: '20250524_012132'
  },
];
