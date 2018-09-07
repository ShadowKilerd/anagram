
var anagram = require("./index");


test('should return empty array when inputing empty string', () => {
    expect(anagram('')).toEqual(new Set());
});

test('should return [a] when inputing a', () => {
    expect(anagram('a')).toEqual(new Set('a'));
});

test('should return [ab, ba] when inputing ab', () => {
    let expectedSet = new Set()
    expectedSet.add('ab')
    expectedSet.add('ba')
    expect(anagram('ab')).toEqual(expectedSet);
});


test('should return a lot when inputing abc', () => {
    expect([...anagram('abc')].length).toEqual(6);
});

test('should return specific set when inputing abc', () => {
    let expectedSet = new Set()
    expectedSet.add('abc')
    expectedSet.add('acb')
    expectedSet.add('bac')
    expectedSet.add('bca')
    expectedSet.add('cab')
    expectedSet.add('cba')
    expect(anagram('abc')).toEqual(expectedSet);
});
test('should return a lot when inputing abcd', () => {
    expect([...anagram('abcd')].length).toEqual(24);
});
