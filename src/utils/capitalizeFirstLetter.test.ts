import { toCapitalizeFirstLetter } from './capitalizeFirstLetter';

describe('toCapitalizeFirstLetter', () => {
  test('Должна вернуть строку, изменив первую букву на заглавную', () => {
    expect(toCapitalizeFirstLetter('some string')).toBe('Some string');
  });
  test('Должна вернуть пустую строку', () => {
    expect(toCapitalizeFirstLetter('')).toBe('');
  });
});
