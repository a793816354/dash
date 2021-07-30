const graph = {
  me: ["alice", "bob", "claire"],
  bob: ["anuj", "peggy"],
  alice: ["peggy"],
  claire: ["thom", "jonny"],
  anuj: [],
  peggy: [],
  thom: [],
  jonny: [],
};

const bfsSearchGraph = (from, to) => {
  const personSet = new Set();
  const queue = [from];
  let num = 0;

  while (queue.length) {
    num++;
    const length = queue.length;

    for (let i = 0; i < length; i++) {
      const ele = queue[i];
      queue.shift();

      const relation = graph[ele] || [];
      for (let j = 0; j < relation.length; j++) {
        const person = relation[j];
        if (person === to) {
          return num;
        }

        if (!personSet.has(person)) {
          personSet.add(person);
          queue.push(person);
        }
      }
    }
  }
  return -1;
};

console.log(bfsSearchGraph("me", "jonny"));
