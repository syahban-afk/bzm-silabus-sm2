function rndCode(){
    var codeLength = 8;
  
    var uppercaseChars = "ABCDEFGHIJKLM";
    var numericChars = "0123456789";
    var specialChars = "~!@#$%^&*";
  
    var generatedCode = "";
  
    generatedCode += uppercaseChars[~~(uppercaseChars.length * Math.random())];
    generatedCode += uppercaseChars[~~(uppercaseChars.length * Math.random())];
  
    for (var i = 0; i < 4; i++) {
      generatedCode += numericChars[~~(numericChars.length * Math.random())];
    }
  
    generatedCode += specialChars[~~(specialChars.length * Math.random())];
    generatedCode += specialChars[~~(specialChars.length * Math.random())];
  
    return generatedCode;
  }