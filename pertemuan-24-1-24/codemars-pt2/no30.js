function tailAndHead(arr) {

    const test = arr.map((item, index) => {
        const last = item % 10;
        const first = arr[index + 1]
        const firstNum = '' + first
        return last + Number(firstNum[0]);
    })

    test.pop();

    return test.reduce((prev, next) => prev * next);
}