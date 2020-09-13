
//input: [1, 5, 2, 1] -> output: [1, 2, 5]
//input: [4, 2, 2, 3, 2, 2, 2] -> output: [2, 3, 4]

const uniqSort = (arr: number[]): number[] => {
const breadcrumbs = {};
const result = [arr[0]];

for (let i = 1; i < arr.length; i++) {
if (!breadcrumbs[arr[i]]) {
    result.push(arr[i]);
    breadcrumbs[arr[i]] = true;
}
}

return result.sort((a, b) => a - b);
}

console.log(uniqSort([4, 2, 2, 3, 2, 2, 2]));