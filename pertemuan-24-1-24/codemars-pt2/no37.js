function countAnimals(animals, count) {
    var result = [];

    for (var i = 0; i < count.length; i++) {
        var animal = count[i];

        var matches = animals.match(new RegExp(animal, 'g')) || [];

        result.push(matches.length);
    }

    return result;
}