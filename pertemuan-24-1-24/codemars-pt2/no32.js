function roundIt(n) {
    if (n % 1 === 0) {
        return n;
    }

    if (n > 0) {
        if (Math.floor(n) === Math.ceil(n)) {
            return Math.round(n);
        } else if (n % 1 > 0.5) {
            return Math.ceil(n);
        } else {
            return Math.floor(n);
        }
    } else {
        n = -n;
        if (Math.floor(n) === Math.ceil(n)) {
            return Math.round(n);
        } else if (n % 1 > 0.5) {
            return Math.floor(n);
        } else {
            return Math.ceil(n);
        }
    }
}