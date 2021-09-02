const stringLength = (str) => {
  if(str.length < 1) {

    throw new Error('Empty string not allowed');

  } else if (str.length > 10) {
      
    throw new Error('10 character limit exceeded');
      
  } 

    return str.length
}

module.exports = stringLength
