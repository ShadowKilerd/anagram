
var anagram = require("./index");


test('should return empty array when inputing empty string', () => {
    expect(anagram('')).toEqual([]);
});
