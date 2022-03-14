function checkGallons(input){
    return input > 0; 
}

  function checkDate(input){
    return Object.prototype.toString.call(input) === '[object Date]';
  }

  function checkAddress(input){
    return /^[a-zA-Z0-9]{0,100}$/.test(input);
  }

  function checkFuelQuoteFormInput(gallons, deliveryDate) {
    return gallons > 0 && (new Date(deliveryDate).toString()) !== 'Invalid Date';
  }
  
  exports.checkFuelQuoteFormInput = checkFuelQuoteFormInput;
  exports.checkDate = checkDate; 
  exports.checkAddress = checkAddress; 
  exports.checkGallons = checkGallons; 

