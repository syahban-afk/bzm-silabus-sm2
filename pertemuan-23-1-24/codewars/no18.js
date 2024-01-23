function splitAndMerge(string, separator) {
    const words = string.split(" ");

    const characters = words.map(word => word.split(""));

    const result = characters.map(chars => chars.join(separator));

    return result.join(" ");
}