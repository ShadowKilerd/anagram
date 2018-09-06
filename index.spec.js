
var anagram = require("./index");


test('should return empty array when inputing empty string', () => {
    expect(anagram('')).toEqual(new Set());
});

test('should return [a] when inputing a', () => {
    expect(anagram('a')).toEqual(new Set('a'));
});

test('should return [ab, ba] when inputing ab', () => {
    expectedSet = new Set()
    expectedSet.add('ab')
    expectedSet.add('ba')
    expect(anagram('ab')).toEqual(expectedSet);
});

