document.addEventListener("DOMContentLoaded", function(){
var em=document.getElementById("email");
var phoneinput = document.getElementById("phone");
// var pwd = document.getElementById("password");
// var err3=document.getElementById("err3");
var err1=document.getElementById("err1");
var err2=document.getElementById("err2");
function validateemail()
{
let regEx1=/([a-zA-Z0-9.-]+)@([a-zA-Z0-9\-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/
if(regEx1.test(em.value)){
    console.log("valid");
    // err1.innerText="";
    return true;
}
else{
    err1.innerText="Email is invalid"
    return false;
}
};
function validatephone()
{

let regEx2 = /^(0)?(\+)?(91)?[ \-.]?\d{3}[ \-.]?\d{3}[ \-.]?\d{4}$/;
    // console.log(phoneinput.value);
    if(regEx2.test(phoneinput.value)){
        console.log("Phone number is valid");
        return true;
      } else {
        console.log("Phone number is not valid");
        return false;
    }
};
})


    //     // console.log("valid");
    //     err2.innerText = "Valid mobile number";
    //     return true;
    // }
    // else{
    // err2.innerText = "Invalid mobile number";
    // return false;
    


// btn.addEventListener("click", function(){
//     alert("Button clicked!!!!")
// })
    // const lengthRegex = /.{8,}/;        
    // const upperCaseRegex = /[A-Z]/;     
    // const lowerCaseRegex = /[a-z]/;    
    // const numberRegex = /\d/;   
    // let strength = 0;
    // if (lengthRegex.test(password)) {
    //     strength += 1;
    // }
    // if (upperCaseRegex.test(password)) {
    //     strength += 1;
    // }

    //    if (lowerCaseRegex.test(password)) {
    //     strength += 1;
    // }

    //    if (numberRegex.test(password)) {
    //     strength += 1;
    // }

    //     if (strength === 4) {
    //     err3.textContent = "Strong Password";
    //     err3.className = "strong";
    // } else if (strength === 3) {
    //     err3.textContent = "Medium Password";
    //     err3.className = "medium";
    // } else {
    //     err3.textContent = "Poor Password";
    //     err3.className = "poor";
    // }






// function validatePassword() {
//     const password = document.getElementById('password').value;
//     const strengthMessage = document.getElementById('strengthMessage');

//     // Regular expressions to check password strength
//     const lengthRegex = /.{8,}/;        // Minimum 8 characters
//     const upperCaseRegex = /[A-Z]/;     // At least one uppercase letter
//     const lowerCaseRegex = /[a-z]/;     // At least one lowercase letter
//     const numberRegex = /\d/;           // At least one number

//     let strength = 0;

//     // Check for minimum length of 8 characters
//     if (lengthRegex.test(password)) {
//         strength += 1;
//     }

//     // Check for uppercase letters
//     if (upperCaseRegex.test(password)) {
//         strength += 1;
//     }

//     // Check for lowercase letters
//     if (lowerCaseRegex.test(password)) {
//         strength += 1;
//     }

//     // Check for numbers
//     if (numberRegex.test(password)) {
//         strength += 1;
//     }

//     // Display the password strength and color code it
//     if (strength === 4) {
//         strengthMessage.textContent = "Strong Password";
//         strengthMessage.className = "strong";
//     } else if (strength === 3) {
//         strengthMessage.textContent = "Medium Password";
//         strengthMessage.className = "medium";
//     } else {
//         strengthMessage.textContent = "Poor Password";
//         strengthMessage.className = "poor";
//     }
// }