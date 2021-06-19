const getAbbrWord = (str) => {
  const midLength = str.length - 2;
  let formatStr = str;
  if (midLength > 0) {
    formatStr = `${str[0]}${midLength}${str[str.length - 1]}`;
  }
  return formatStr;
};

/**
 * @param {string[]} dictionary
 */
var ValidWordAbbr = function (dictionary) {
  this.obj = {};
  for (let index = 0; index < dictionary.length; index++) {
    const str = dictionary[index];
    const formatStr = getAbbrWord(str);

    if (!this.obj[formatStr]) {
      this.obj[formatStr] = new Set();
    }
    this.obj[formatStr].add(str);
  }
};

/**
 * @param {string} word
 * @return {boolean}
 */
ValidWordAbbr.prototype.isUnique = function (word) {
  const formatStr = getAbbrWord(word);

  if (
    !this.obj[formatStr] ||
    (this.obj[formatStr].size === 1 && [...this.obj[formatStr]][0] === word)
  ) {
    return true;
  }
  return false;
};

/**
 * Your ValidWordAbbr object will be instantiated and called as such:
 * var obj = new ValidWordAbbr(dictionary)
 * var param_1 = obj.isUnique(word)
 */
