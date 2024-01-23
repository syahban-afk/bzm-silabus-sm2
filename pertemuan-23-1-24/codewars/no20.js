function topSecret(str) {
    let decryptedText = "";

    for (let i = 0; i < str.length; i++) {
        let char = str[i];

        if (/[a-zA-Z]/.test(char)) {
            let isUpperCase = (char === char.toUpperCase());
            let shiftedCharCode = char.charCodeAt(0) - 3;

            if ((isUpperCase && shiftedCharCode < 65) || (!isUpperCase && shiftedCharCode < 97)) {
                shiftedCharCode += 26;
            }

            decryptedText += String.fromCharCode(shiftedCharCode);
        } else {
            decryptedText += char;
        }
    }

    return decryptedText;

}
//question1: The top secret file number is...
answer1 = "3529";
//question2: Super agent's name is...
answer2 = "LcZ";
//question3: He stole the treasure is...
answer3 = "Expired biscuits";