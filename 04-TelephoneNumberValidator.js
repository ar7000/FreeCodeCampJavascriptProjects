function telephoneCheck(str) {
  const splitStr = str.split('');
  
  const hasTenDigits = splitStr.filter(x => /[0-9]/.test(x)).length === 10;
  
  const hasElevenDigits = splitStr.filter(x => /[0-9]/.test(x)).length === 11 && /^1/.test(str);

  const onlyPermittedChars = splitStr.every(x => /[0-9\(\) -]/.test(x)) && !/\)$/.test(str);

  function validParentheses(){
    let newArr = [];
    
    for(let i = 0; i < splitStr.length; i++){
      if(splitStr[i] === "(" || splitStr[i] === ")"){
        newArr.push(splitStr[i]);
      }
    }

    if(newArr.join('') === "()" && str.indexOf(newArr[1]) - str.indexOf(newArr[0]) === 4){
      return true;
    } else if(newArr.join('') === ""){
      return true;
    };

    return false;

  }

  if(!hasTenDigits && !hasElevenDigits){
    return false;
  } else if (!onlyPermittedChars){
    return false;
  } else if (!validParentheses()){
    return false;
  }

  return true;

}

telephoneCheck("555-555-5555");

//Can also be done with a single Regex:

function telephoneCheck(str) {
  let regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s-]?(\d{3})[\s-]?(\d{4})$/

  if(regex.test(str)){
    return true;
  }

  return false;

}

telephoneCheck("555-555-5555");