var email=document.getElementById("email1");
var err1=document.getElementById("err1");
var psw = document.getElementById("password1");
var pswstrength = document.getElementById('pswstrength');
var pswvalidity = document.getElementById('pswvalidity');
var flag=0;
email.addEventListener("keyup", function()
{
    let regEx1 = /^([a-zA-Z0-9.-]+)@([a-zA-z0-9-]+).([a-z]{2,3})(.[a-z]{2,3})?$/;
    if(regEx1.test(email.value)){
        err1.innerText = "Valid email address";
        email.style.borderColor = 'green';
        flag=1;
    }
    else {
        err1.innerText = "Invalid email address";
        email.style.borderColor = 'red';
        flag=0;
    }
    });
    psw.addEventListener("keyup", function(){
        let pswRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
        if(pswRegex.test(psw.value)){
            pswvalidity.innerText = 'Valid password';
            pswvalidity.style.color = 'green';
            flag = 1;
        }
        else {
            pswvalidity.innerText = 'Invalid password';
            pswvalidity.style.color = 'red';
        }
        checkStrength(psw.value, psw);
    });
    
    function checkStrength(pswvalue, psw){
        let str = 0;
        if(pswvalue.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)){
            str += 1;
        }
        if(pswvalue.match(/[0-9]/)){
            str += 1;
        }
        if(pswvalue.match(/.*[\¬\!\"\£\$\%\^\&\*\(\)\_\+\`\-\=\{\}\:\@\~\<\>\?\[\]\;\'\#\,\.\/\\\|]/)){
            str += 1;
        }
        if(pswvalue.length > 7){
            str += 1;
        }
    
        if(str == 0){
            pswstrength.innerText = 'Empty';
            pswstrength.style.color = 'red';
            psw.style.borderColor = 'red';
        }
    
        else if(str <= 2) {
            pswstrength.innerText = 'Weak';
            pswstrength.style.color = '#f7dc6f';
            psw.style.borderColor = '#f7dc6f';
        }
        else if(str == 3) {
            pswstrength.innerText = 'Good';
            pswstrength.style.color = 'orange';
            psw.style.borderColor = 'orange';
        }
        else if(str == 4) {
            pswstrength.innerText = 'Strong';
            pswstrength.style.color = 'green';
            psw.style.borderColor = 'green';
        }
    }; 
    function validate(){
        return !!flag;
    }
    