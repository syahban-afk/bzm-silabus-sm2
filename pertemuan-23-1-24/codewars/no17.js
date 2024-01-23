function firstToLast(str, c) {
    var firstIndex = str.indexOf(c);
    var lastIndex = str.lastIndexOf(c);

    if (firstIndex !== -1 && lastIndex !== -1) {
        return lastIndex - firstIndex;
    } else {
        return -1;
    }
}