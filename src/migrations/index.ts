import * as migration_20250523_065006 from './20250523_065006';
import * as migration_20250524_010829 from './20250524_010829';

export const migrations = [
  {
    up: migration_20250523_065006.up,
    down: migration_20250523_065006.down,
    name: '20250523_065006',
  },
  {
    up: migration_20250524_010829.up,
    down: migration_20250524_010829.down,
    name: '20250524_010829'
  },
];
