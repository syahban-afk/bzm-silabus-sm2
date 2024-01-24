function sortIt(arr) {
  const newArr = arr.slice();

  newArr.sort((a, b) => {
    if (arr.filter(x => x === a).length !== arr.filter(x => x === b).length) {
      return arr.filter(x => x === a).length - arr.filter(x => x === b).length;
    }

    return b - a;
  });

  return newArr;
}