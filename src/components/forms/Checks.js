// Utility Functions (Ex: functions that check for length etc)

function checkUsernameCharacters(input) {
    return /^[a-zA-Z0-9!@#$%^&*()]{5,20}$/.test(input);
  }
  
  function checkPasswordCharacters(input) {
    return /^[a-zA-Z0-9!@#$%^&*()]{8,30}$/.test(input);
  }
  
  function checkRegisterInput(username, password) {
    return username.length >= 5 && username.length <= 20 && password.length >= 8;
  }
  
  function checkLoginInput(username, password) {
    return username.length >= 5 && username.length <= 20 && password.length >= 8;
  }
  
  exports.checkRegisterInput = checkRegisterInput;
  exports.checkLoginInput = checkLoginInput;
  exports.checkUsernameCharacters = checkUsernameCharacters;
  exports.checkPasswordCharacters = checkPasswordCharacters;