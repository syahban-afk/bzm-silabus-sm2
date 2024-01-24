function mirrorImage(arr) {
    let result = [-1, -1];

    arr.some((x, i) => {
        let a = x;
        let b = parseInt(x.toString().split('').reverse().join(''), 10);

        if (arr[i + 1] === b) {
            result = [a, b];
            return true;
        }

        return false;
    });

    return result;
}