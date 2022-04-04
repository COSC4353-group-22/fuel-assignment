function checkGallons(input){
    return input > 0; 
}

  function checkDate(input){
    if (input === '') {
      return false;
    }
    if(!/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(input))
        return false;

    // Parse the date parts to integers
    var parts = input.split("/");
    var day = parseInt(parts[1], 10);
    var month = parseInt(parts[0], 10);
    var year = parseInt(parts[2], 10);

    // Check the ranges of month and year
    if(year < 1000 || year > 3000 || month == 0 || month > 12)
        return false;

    var monthLength = [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];

    // Adjust for leap years
    if(year % 400 == 0 || (year % 100 != 0 && year % 4 == 0))
        monthLength[1] = 29;

    // Check the range of the day
    return day > 0 && day <= monthLength[month - 1];
  }

  function checkAddress(input){
    return /^[a-zA-Z0-9\s,'-]{1,100}$/.test(input);
  }
  
  exports.checkDate = checkDate; 
  exports.checkAddress = checkAddress; 
  exports.checkGallons = checkGallons; 

