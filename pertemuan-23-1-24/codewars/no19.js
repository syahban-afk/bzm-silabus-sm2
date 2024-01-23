function alienLanguage(str) {
    const words = str.split(" ");

    const alienWords = words.map(word => {
        const firstPart = word.slice(0, -1).toUpperCase();
        const lastLetter = word.slice(-1).toLowerCase();
        return firstPart + lastLetter;
    });

    const alienSentence = alienWords.join(" ");

    return alienSentence;
} 