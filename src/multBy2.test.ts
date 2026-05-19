import { expect, test } from 'vitest';

import multBy2 from './multBy2';

test('is a function', () => {
  expect(multBy2).toBeInstanceOf(Function);
});