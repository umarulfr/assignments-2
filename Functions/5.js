function toLowerCase(character) {
   
    if (character >= 'A' && character <= 'Z') {
      
      return String.fromCharCode(character.charCodeAt(0) + 32);
    }
    
    
    return character;
  }
  
  
  const myCharacter = 'H';
  const lowerCaseCharacter = toLowerCase(myCharacter);
  console.log("Lowercase Character:", lowerCaseCharacter);