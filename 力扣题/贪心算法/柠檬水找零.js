// /**
//  * @param {number[]} bills
//  * @return {boolean}
//  */
// var lemonadeChange = function (bills) {
//   const billMap = { 5: 0 };

//   for (let index = 0; index < bills.length; index++) {
//     const ele = bills[index];
//     const expChange = ele - 5;

//     let temp = expChange;
//     let change = 0;
//     while (temp !== 0) {
//       if (billMap[temp] && change + temp <= expChange) {
//         billMap[temp]--;
//         change += temp;
//       } else {
//         temp -= 5;
//       }
//     }

//     if (change !== expChange) {
//       return false;
//     }

//     if (billMap[ele]) {
//       billMap[ele]++;
//     } else {
//       billMap[ele] = 1;
//     }
//   }
//   return true;
// };
// console.log(lemonadeChange([5, 5, 5, 10, 20]));

/**
 * @param {number[]} bills
 * @return {boolean}
 */
// 1.定义初始价格，此时不用找零
// 2.定义手里已有的钱收集工具（数组，链表，对象）
// 2.计算差价，优先找更大的零钱，因为可以被替代
// 3.大概率一张不够找，此时可以循环找钱，有一定概率使用小钱补差价

// 优先找更大的零钱为贪心的观念
// 1.数组
// var lemonadeChange = function (bills) {
//   const price = 5;
//   const parket = [];

//   for (let i = 0; i < bills.length; i++) {
//     const bill = bills[i];
//     if (bill !== price) {
//       let gap = bill - price;
//       while (gap !== 0) {
//         if (!parket.length) return false;
//         //找已有最大，且小于gap的index
//         let max = 0;
//         let maxIndex = 0;
//         for (let j = 0; j < parket.length; j++) {
//           const ele = parket[j];
//           if (gap >= ele && max <= ele) {
//             max = ele;
//             maxIndex = j;
//           }
//         }
//         gap -= max;
//         parket.splice(maxIndex, 1);
//       }
//     }
//     parket.push(bill);
//   }
//   return true;
// };

// 2.对象
var lemonadeChange = function (bills) {
  const price = 5;
  const parket = {};

  for (let index = 0; index < bills.length; index++) {
    const bill = bills[index];
    let gap = bill - price;

    let payBill = gap;
    while (gap !== 0) {
      if (payBill <= 0) {
        return false;
      } else if (parket[payBill] > 0 && payBill <= gap) {
        gap -= payBill;
        parket[payBill]--;
      } else {
        payBill -= 5;
      }
    }

    const billNum = parket[bill];
    if (billNum) {
      parket[bill] = 1 + billNum;
    } else {
      parket[bill] = 1;
    }
  }
  return true;
};

// console.log(lemonadeChange([5, 5, 5, 10, 20]));
// console.log(lemonadeChange([5, 5, 10]));
// console.log(lemonadeChange([10, 10]));
console.log(lemonadeChange([5, 5, 5, 5, 10, 5, 10, 10, 10, 20]));
