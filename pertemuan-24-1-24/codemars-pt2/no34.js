function isIntCube(n) {
    return Number.isInteger(Math.cbrt(n));
}

function cutCube(volume, n) {
    return isIntCube(n) && isIntCube(volume / n);
}