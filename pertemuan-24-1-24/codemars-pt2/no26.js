function isolateIt(arr) {
    return arr.map(str => {
        const length = str.length;

        if (length % 2 === 0) {
            const mid = length / 2;
            return str.slice(0, mid) + '|' + str.slice(mid);
        } else {
            const mid = Math.floor(length / 2);
            return str.slice(0, mid) + '|' + str.slice(mid + 1);
        }
    });
}