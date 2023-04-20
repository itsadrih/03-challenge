var characterLength= 8;
var userChoices=[];

var upperCase=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var lowerCase=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var numbers=['1','2','3','4','5','6','7','8','9','0',];
var specialCharacters=['=','+','*','@','>','<','&','^','$','#','!','~','{','}','?',]

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
 function writePassword() {
  var correctPrompt= showPrompt();
  var passwordText = document.querySelector("#password");



  if (correctPrompt) {
   var newPassword = generatePassword();
   passwordText.value = newPassword;

  } else{
  passwordText.value = "";

  }

 

 }
//

function generatePassword() {
 var password = " ";
   for(var i = 0;i < characterLength;i++) {
    var randomLetters= Math.floor(Math.random()* userChoices.length);
    password = password + userChoices[randomLetters];

   }
   return password;
}


 

function showPrompt() {
  userChoices=[];

  characterLength = parseInt(prompt("How many characters would you like your password to contain? 8 - 128 characters"));

  if(isNaN(characterLength) || characterLength < 8 || characterLength > 128) {

   
   }


 if (confirm("Would you like your password to contain a Upper Case letter?")){
     userChoices= userChoices.concat(upperCase);
  }

 if (confirm("Would you like your password to contain a lower Case letter?")) {
      userChoices= userChoices.concat(lowerCase);
  } 



 if (confirm("Would you like your password to contain a number?")) {
      userChoices= userChoices.concat(numbers);
  }



 if (confirm("Would you like your password to contain special characters?")) {
      userChoices= userChoices.concat(specialCharacters);
 } 
return true;
}