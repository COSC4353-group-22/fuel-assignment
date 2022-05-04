const profilecheck = require('./ProfileChecks.js')

test('check profile empty', () => {
    expect(profilecheck.CheckNotEmpty('', '', '','','','','')).toBe(false)
})

test('check profile valid length', () => {
    expect(profilecheck.CheckNotEmpty('user1234', 'asdaf', 'as','as','af','72','ag')).toBe(true)
})