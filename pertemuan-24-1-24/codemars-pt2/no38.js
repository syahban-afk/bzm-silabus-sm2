function findSimilarity(str, word) {
    var regex = new RegExp("^" + word[0] + ".".repeat(word.length - 2) + word[word.length - 1] + "$");

    var result = str.split(" ").filter(function (w) {
        return regex.test(w);
    });

    return result.join(" ");
}