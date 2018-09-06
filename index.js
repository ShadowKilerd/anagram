const anagram = (string) => {
    if(string.length == 0) {
        return new Set()
    }
    if (string.length == 1) {
        return new Set(string)
    }
    let ret = new Set();
    string.split('').map((item, index, array) => {
        let subStringArray = [...array];
        subStringArray.splice(subStringArray.indexOf(item), 1);
        [...anagram(subStringArray.join(''))].map(subString=> {
            ret.add(`${item}${subString}`);
        })
    })

    return ret;
}


module.exports = anagram