//Only change code below this line  
var myName;
var message;
//Only change code above this line

myName = "Padawans";
function myMsg(name) {
  "use strict";
  message = "Hello, " + name + "!";
  return message;
}
console.log(myMsg(myName));
module.exports = myMsg;