function maxMin(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        throw new Error("The arrays must have the same number of elements.");
    }

    let maxValue = -Infinity;
    let minValue = Infinity;

    for (let i = 0; i < arr1.length; i++) {
        let diff = Math.abs(arr1[i] - arr2[i]);
        maxValue = Math.max(maxValue, diff);
        minValue = Math.min(minValue, diff);
    }

    return [maxValue, minValue];
}