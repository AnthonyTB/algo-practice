//input: [1, 5, 2, 1] -> output: [1, 2, 5]
//input: [4, 2, 2, 3, 2, 2, 2] -> output: [2, 3, 4]

const uniqSort = (arr: number[]): number[] => {
  const cache = {};
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    if (!cache[arr[i]]) {
      result.push(arr[i]);
      cache[arr[i]] = true;
    }
  }

  return result.sort((a, b) => a - b);
};

console.log(uniqSort([4, 2, 2, 3, 2, 2, 2]));

// ---------------------------------------------------------------

const cache = {};

const memoTimes10 = (input: number): number => {
  if (input in cache) {
    return cache[input];
  } else {
    cache[input] = input * 10;
    return input * 10;
  }
};
