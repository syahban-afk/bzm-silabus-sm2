function thinkingAndTesting(number, base) {
    const b = base;
    while (number >= base) base *= b;
    return number - base / b;
}