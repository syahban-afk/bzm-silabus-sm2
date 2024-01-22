const fs = require('fs')

//  fs.writeFileSync("perkenalan.txt", "perkenalan saya Syahban")
console.log(fs)

const perkenalan=fs.readFileSync("perkenalan.txt")
console.log(perkenalan.toString())