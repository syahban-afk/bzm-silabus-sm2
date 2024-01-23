function getLength(arr) {
  //return length of arr
  let a = arr.length;
  return a;
}
function getFirst(arr) {
  //return the first element of arr
  let a = arr[0];
  return a;
}
function getLast(arr) {
  //return the last element of arr
  let a = arr[arr.length - 1];
  return a;
}
function pushElement(arr) {
  var el = 1;
  //push el to arr
  arr.push(el)
  return arr
}
function popElement(arr) {
  //pop an element from arr
  arr.pop()
  return arr
}