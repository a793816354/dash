const getRandomArr = (num = 20) => {
  const result = Array(num)
    .fill(true)
    .map((item) => Math.floor(Math.random() * num));
  return result;
};

const getSortArr = (num = 20, asc = true) => {
  const result = getRandomArr(num);
  result.sort((a, b) => (asc ? a - b : b - a));
  return result;
};

module.exports = {
  getRandomArr,
  getSortArr,
};
