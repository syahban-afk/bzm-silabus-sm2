// const { getNameKelas,getAsync } = require("./arsitektursoal1")

// // console.log(getNameKelas(1))

const getKelasAsync = async (kodeId) => {
    const kelas = kodeId === 1 ? "SIJA" : "RPL"
    return { kodeId, kelas }
}

getKelasAsync(1).then(console.log)

const getAsync = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const kelas = id === 1 ? "SIJA" : "RPL"
            resolve({id, kelas})
        }, 1000)
    })
}

getAsync(1).then(console.log)
