// jest tests

const validate = require('./Checks.js');

test('checkLoginInput - empty case', () => {
  expect(validate.checkLoginInput('', '')).toBe(false);
});

test('checkLoginInput - successfuly case', () => {
  expect(validate.checkLoginInput('billybob', '123456789')).toBe(true);
});

test('checkRegisterInput - empty case', () => {
  expect(validate.checkRegisterInput('', '')).toBe(false);
});

test('checkRegisterInput - successful case', () => {
  expect(validate.checkRegisterInput('billy', '123456789')).toBe(true);
});

test('checkLoginInput - random no worko', () => {
  expect(validate.checkLoginInput('ddfsdfasdfasdfasdfas134212341234', '12344566869')).toBe(false);
})

test('checkUsernameCharacters - length 1', () => {
  expect(validate.checkUsernameCharacters('h')).toBe(false)
})

test('checkUsernameCharacters - length 2', () => {
  expect(validate.checkUsernameCharacters('hu')).toBe(false)
})

test('checkUsernameCharacters - length 3', () => {
  expect(validate.checkUsernameCharacters('huh')).toBe(false)
})

test('checkUsernameCharacters - length 4', () => {
  expect(validate.checkUsernameCharacters('what')).toBe(false)
})

test('checkUsernameCharacters - length 21', () => {
  expect(validate.checkUsernameCharacters('beeeeeeeeeeeeeeeeeeep')).toBe(false)
})

test('checkPasswordCharacters - length 1', () => {
  expect(validate.checkPasswordCharacters('A')).toBe(false)
})

test('checkPasswordCharacters - length 2', () => {
  expect(validate.checkPasswordCharacters('pp')).toBe(false)
})

test('checkPasswordCharacters - length 3', () => {
  expect(validate.checkPasswordCharacters('ccc')).toBe(false)
})

test('checkPasswordCharacters - length 4', () => {
  expect(validate.checkPasswordCharacters('aaaa')).toBe(false)
})

test('checkPasswordCharacters - length 5', () => {
  expect(validate.checkPasswordCharacters('bbbbb')).toBe(false)
})

test('checkPasswordCharacters - length 6', () => {
  expect(validate.checkPasswordCharacters('GGGGGG')).toBe(false)
})

test('checkPasswordCharacters - length 7', () => {
  expect(validate.checkPasswordCharacters('hhhhhhh')).toBe(false)
})
