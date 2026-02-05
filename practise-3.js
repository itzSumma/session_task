/**
 * Problem 3: Password Strength Checker
Function name: checkPassword(password)
Rules:
Length must be at least 8
Must contain at least 1 number
Must contain at least 1 uppercase letter
Must not contain spaces
Test case 1
Input:  "helloWorld"
Output:
{ valid: false, reasons: ["missing number"] }
 */
// function checkPassword(password) {
//   let reasons = [];
//   let length = password.length;
//   let checkNumber = false;
//   let checkUpperCase = false;
//   let checkSpace = password.includes(" ");

//   for (let i = 0; i < length; i++) {
//     let character = password[i];
//     // console.log(character);
//     if (character >= "0" && character <= "9") {
//       checkNumber = true;
//     }
//     if (character >= "A" && character <= "Z") {
//       checkUpperCase = true;
//     }
//   }

//   if (!checkNumber) {
//     reasons.push("Missing Number");
//   }
//   if (!checkUpperCase) {
//     reasons.push("Missing UpperCase");
//   }
//   if (checkSpace == true) {
//     reasons.push("Space has been found");
//   }

//   console.log(password, length, checkNumber, checkUpperCase, checkSpace);
//   let isvalid;
//   if (reasons.length == 0) {
//     isvalid = true;
//   } else {
//     isvalid = false;
//   }
//   //  console.log(reasons);
//   //  console.log(isvalid);
//   return {
//     valid: isvalid,
//     reasons,
//   };
// }

// let output = checkPassword("helloWorld6");
// // let output = checkPassword("helloWorld")
// console.log(output);
function checkPassword(password){
    let length = password.length;
    let reasons = [];
let checkNumber= false;
let checkUpperCase= false;
let checkSpace = password.includes(" ");

for (let i = 0; i <length; i++) {
   let character = password[i];
    if (character >= "0" && character <= "9") {
       checkNumber = true;
   }
    if (character >= "A" && character <= "Z") {
       checkUpperCase = true;     }
    }
  
    if (!checkNumber) {
        reasons.push(" Missing Number")
    } 
    if (!checkUpperCase) {
        reasons.push(" Missing UpperCase")
    } 
    if (checkSpace == true) {
    reasons.push("Space has been found");
}
let isvalid ;
if(reasons.length == 0){
    isvalid = true;
}
else{
    isvalid = false;
}
console.log(password,length, checkNumber, checkUpperCase, checkSpace)
return{
    valid : isvalid,
reasons
}
}
let output= checkPassword("helloWorld")
console.log(output);