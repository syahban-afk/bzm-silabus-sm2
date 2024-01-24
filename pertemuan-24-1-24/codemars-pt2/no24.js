function threeInOne(arr) {
  const result = [];

  for (let i = 0; i < arr.length; i += 3) {
    const sum = arr.slice(i, i + 3).reduce((acc, num) => acc + num, 0);
    result.push(sum);
  }

  return result;
}