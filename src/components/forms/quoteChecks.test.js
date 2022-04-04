
const validate = require('./quoteChecks.js');

test('checkGallons - empty case', () => {
  expect(validate.checkGallons('')).toBe(false);
});

test('checkGallons - 0 case', () => {
  expect(validate.checkGallons(0)).toBe(false);
});

test('checkGallons- successful case', () => {
  expect(validate.checkGallons(1)).toBe(true);
});

test('checkDate - empty case', () => {
  expect(validate.checkDate('')).toBe(false);
});

test('checkDate - successful case', () => {
  expect(validate.checkDate('06/08/2022')).toBe(true);
});

test('checkDate - invalid date case', () => {
  expect(validate.checkDate('06/08/999')).toBe(false);
});

test('checkAddress - empty case', () => {
  expect(validate.checkAddress('')).toBe(false);
});

test('checkAddress - successful case', () => {
  expect(validate.checkAddress('1313 Cornelia Street')).toBe(true);
});
