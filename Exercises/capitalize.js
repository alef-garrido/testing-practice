function  capitalize(str) {
  if(typeof str !== 'string') {
    throw new Error('Argument is not a string!')
  }
  return str.replace(/^\w/, c => c.toUpperCase());
}

module.exports = capitalize