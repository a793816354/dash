// const graph = {
//   start: [
//     {
//       key: "A",
//       value: 6,
//     },
//     {
//       key: "B",
//       value: 2,
//     },
//   ],
//   end: [],
//   A: [
//     {
//       key: "end",
//       value: 1,
//     },
//   ],
//   B: [
//     {
//       key: "A",
//       value: 3,
//     },
//     {
//       key: "end",
//       value: 5,
//     },
//   ],
// };
const graph = {
  start: [
    {
      key: "A",
      value: 5,
    },
    {
      key: "B",
      value: 2,
    },
  ],
  end: [],
  A: [
    {
      key: "C",
      value: 4,
    },
    {
      key: "D",
      value: 2,
    },
  ],
  B: [
    {
      key: "A",
      value: 8,
    },
    {
      key: "D",
      value: 7,
    },
  ],
  C: [
    {
      key: "end",
      value: 3,
    },
    {
      key: "D",
      value: 6,
    },
  ],
  D: [
    {
      key: "end",
      value: 1,
    },
  ],
};

//无负值
const bfsSearchPowerGraph = () => {
  const queue = ["start"];
  let cost = 0;
  const costMap = {};
  const keySet = new Set();

  while (queue.length) {
    const length = queue.length;
    for (let i = 0; i < length; i++) {
      const relation = graph[queue[i]] || [];
      queue.shift();

      const fitstItem = relation[0] || {};
      let minKey = fitstItem.key || "";
      let minCost = fitstItem.value || 0;
      for (let j = 1; j < relation.length; j++) {
        const ele = relation[j];
        const { key, value } = ele;

        if (minCost > value) {
          minKey = key;
          minCost = value;
        }
      }

      if (minKey && !keySet.has(minKey)) {
        cost = cost + minCost;
        costMap[minKey] = cost;
        keySet.add(minKey);
        queue.push(minKey);
      }
    }
  }

  return costMap["end"] || "暂无路线";
};

console.log(bfsSearchPowerGraph());
