function padIt(str, n) {
  for (let i = 0; i < n; i++) {
    if (i % 2 === 0) {
      str = '*' + str;
    } else {
      str = str + '*';
    }
  }
  return str;
}