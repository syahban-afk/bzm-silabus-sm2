const generateRandomId= (length)=>{
    let result= ''
    const number = '1234567890'
    for (let index = 0; index < length; index++) {
        result+=number.charAt(Math.floor(Math.random()* number.length))
    }
    return result
}

module.exports=generateRandomId