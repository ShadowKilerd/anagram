
var anagram = require("./index");


test('should return empty array when inputing empty string', () => {
    expect(anagram('')).toEqual([]);
});

test('should return [a] when inputing a', () => {
    expect(anagram('a')).toEqual(['a']);
});
