function name(name) {
    return `heelo my name is ${name}`
}

function sekolah(namasekolah, jurursansekolah) {
    const data = {
        namasekolah,
        jurursansekolah
    }
    return data
}

function abjadarr(abjad) {
    const abjadlama = ['a', 'b', 'c', 'd']
    if (abjad !== undefined) {
        abjadlama.push(abjad)
    }
}
module.exports = {
    sekolah,
    abjadarr
}