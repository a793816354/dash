/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function (list1, list2) {
  const obj = {};
  let result = [];
  let min = list1.length + list2.length;

  for (let index = 0; index < list1.length; index++) {
    obj[list1[index]] = index;
  }

  for (let index = 0; index < list2.length && index <= min; index++) {
    const ele = list2[index]

    const l1Index = obj[ele];
    if (l1Index !== undefined) {
      if (l1Index + index < min) {
        min = l1Index + index;
        result = [ele];
      } else if (l1Index + index === min) {
        result.push(ele);
      }
    }
  }

  return result;
};

console.log(
  findRestaurant(
    ["Shogun", "Tapioca Express", "Burger King", "KFC"],
    [
      "Piatti",
      "The Grill at Torrey Pines",
      "Hungry Hunter Steakhouse",
      "Shogun",
    ]
  )
);
