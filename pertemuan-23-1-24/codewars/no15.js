function howManySmaller(arr,n){
    for (let i = 0; i < arr.length; i++) {
      arr[i] = arr[i].toFixed(2);
    }
  
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
      if (parseFloat(arr[i]) < n) {
        count++;
      }
    }
  
    return count;
  }