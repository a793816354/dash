// /**
//  * Definition for Employee.
//  * function Employee(id, importance, subordinates) {
//  *     this.id = id;
//  *     this.importance = importance;
//  *     this.subordinates = subordinates;
//  * }
//  */

// /**
//  * @param {Employee[]} employees
//  * @param {number} id
//  * @return {number}
//  */
// var GetImportance = function (employees, id) {
//   for (let i = 0; i < employees.length; i++) {
//     let result = 0;
//     const curEmployee = employees[i];
//     if (id === curEmployee.id) {
//       const stack = [curEmployee];
//       while (stack.length) {
//         const node = stack.pop();
//         result += node.importance;
//         for (let j = 0; j < node.subordinates.length; j++) {
//           for (let k = 0; k < employees.length; k++) {
//             if (employees[k].id === node.subordinates[j]) {
//               stack.push(employees[k]);
//             }
//           }
//         }
//       }
//       return result;
//     }
//   }
//   return 0;
// };

/**
 * Definition for Employee.
 * function Employee(id, importance, subordinates) {
 *     this.id = id;
 *     this.importance = importance;
 *     this.subordinates = subordinates;
 * }
 */

/**
 * @param {Employee[]} employees
 * @param {number} id
 * @return {number}
 */
var GetImportance = function (employees, id) {
       let result = 0;
  var dfs = function (employees, id) {
    for (let i = 0; i < employees.length; i++) {
      const curEmployee = employees[i];
      if (id === curEmployee.id) {
        result+=curEmployee.importance
        for (let index = 0; index < curEmployee.subordinates.length; index++) {
            dfs(employees,curEmployee.subordinates[index])
        }
      }
    }
  };
  dfs(employees, id)
  return result
};
