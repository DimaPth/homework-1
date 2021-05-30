import { toCapitalizeFirstLetter } from './capitalizeFirstLetter';

describe('toCapitalizeFirstLetter', () => {
  test('Должна вернуть строку, изменив первую букву на заглавную', () => {
    expect(toCapitalizeFirstLetter('some string')).toBe('Some string');
  });
});
