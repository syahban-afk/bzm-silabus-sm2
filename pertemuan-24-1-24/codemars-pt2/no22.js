function shuffleIt(arr, ...indexesArrays) {
  for (const indexes of indexesArrays) {
    const [index1, index2] = indexes;

    [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
  }

  return arr;
}