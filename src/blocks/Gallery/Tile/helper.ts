export type GridConfig = 'one' | 'two' | 'three' | 'four' | 'fiveOrMore';

export const gridMapperClasses = {
  one: 'grid-cols-1',
  two: 'grid-cols-1 lg:grid-cols-2',
  three: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
  four: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
  fiveOrMore: 'grid-cols-1 md:grid-cols-3 lg:grid-cols-5',
};

export const getGridConfig = (count: number): GridConfig => {
  if (count >= 5) {
    return 'fiveOrMore';
  }
  switch (count) {
    case 4:
      return 'four';
    case 3:
      return 'three';
    case 2:
      return 'two';
    case 1:
    default:
      return 'one';
  }
};
