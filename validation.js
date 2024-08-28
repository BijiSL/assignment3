var em=document.getElementById("email");
var phonenumber = document.getElementById("phone number");
var err1=document.getElementById("err1");
var err2=document.getElementById("err2");
function validate()
{
let regEx1=/([a-zA-Z0-9.-]+)@([a-zA-Z0-9\-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/
if(regEx1.test(em.value)){
    // err1.innerText="";
    return true;
}
else{
    err1.innerText="Email is inavalid"
    return false;
}
let regEx2 = /^(0)?(\+)?(91)?[ \-.]?\d{3}[ \-.]?\d{3}[ \-.]?\d{4}$/;
    console.log(phonenumber.value);
    if(regEx2.test(phonenumber.value)){
        err2.innerText = "Valid mobile number";
        phonenumber.style.borderColor = 'green';
    }
    else{
    err2.innerText = "Invalid mobile number";
        phonenumber.style.borderColor = 'red';
    }
};
