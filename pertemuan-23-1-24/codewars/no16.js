function cutIt(arr) {
    let minLength = arr[0].length;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i].length < minLength) {
            minLength = arr[i].length;
        }
    }

    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].slice(0, minLength);
    }

    return arr
}