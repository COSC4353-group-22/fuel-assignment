const profilecheck = require('./ProfileChecks.js')

test('check profile empty', () => {
    expect(profilecheck.EmptyCheck('', '','','','','')).toBe(false)
})

test('check profile valid length', () => {
    expect(profilecheck.EmptyCheck('asdaf', 'as','as','af','72','ag')).toBe(true)
})