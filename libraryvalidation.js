var name1=document.getElementById('name');
var email=document.getElementById('email');
var phno=document.getElementById('number');
var pswd=document.getElementById('password1');
var pswd2=document.getElementById('password2');
var err1=document.getElementById('err1');
var err2=document.getElementById('err2');
var err3=document.getElementById('err3');
var err4=document.getElementById('err4');
var err5=document.getElementById('err5');
var strengthIndicator=document.getElementById('strengthIndicator');

function validate() {
    var nameregexp=/^[a-zA-Z]+(?:\s[a-zA-Z]+)*$/;
    var emailregexp=/^([a-zA-Z0-9.-]+)@([a-zA-z0-9.-]+)\.([a-z]{2,3})(\.[a-zA-Z]{2,3})?$/
    // var phnregexp=/^([0-9]{10})$/;
    // var phnregexp=/^(\\d{3}[- ]?){2}\\d{4}$/;
    var phnregexp=/^\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}?/;
    var pswdregexp=/^((?=.*\d)(?=.*[a-z])(?=.*[A-Z].+)[a-zA-Z0-9]+).{7,}$/;

    let valid=true;

    if (nameregexp.test(name1.value)) {
        err1.innerText="Name is valid"
        err1.style.color="green";

    } else {
        err1.innerText="enter the name"
        err1.style.color="red";
        return valid=false;
    } //name

    if(emailregexp.test(email.value)){
        err2.innerText="e-mail is valid"
        err2.style.color="green";
       }else{
           err2.innerText="invalid e-mail" 
           err2.style.color="red";
           return valid=false;
       }//email 

       if (phnregexp.test(phno.value)) {
        err3.innerText="valid number"
        err3.style.color="green";    
    } else {
        err3.innerText="invalid number"
        err3.style.color="red";
        return valid=false;
    }//phone no

    if (pswdregexp.test(pswd.value)) {
        err4.innerText="valid password"
        err4.style.color="green";
    
    } else {
        err4.innerText="Minimum 8 characters required"
        err4.style.color="red";
        return valid=false;
    }//password



    if (pswd.value==pswd2.value) {
        err5.innerText="Password Created"
        err5.style.color="green";
    } else {
        err5.innerText="Passwords not matching"
        err5.style.color="red";
        return valid=false;   
    }
   
    return valid;
}

function validate2(){
    var emailregexp=/^([a-zA-Z0-9.-]+)@([a-zA-z0-9.-]+)\.([a-z]{2,3})(\.[a-zA-Z]{2,3})?$/
    var pswdregexp=/^((?=.*\d)(?=.*[a-z])(?=.*[A-Z].+)[a-zA-Z0-9]+).{7,}$/;
    let valid=true;
    
    if(emailregexp.test(email.value)){
        err2.innerText="e-mail is valid"
        err2.style.color="green";
       }else{
           err2.innerText="invalid e-mail" 
           err2.style.color="red";
           return valid=false;
       }//email 

       if (pswdregexp.test(pswd.value)) {
        err4.innerText="valid password"
        err4.style.color="green";
    
    } else {
        err4.innerText="invalid password"
        err4.style.color="red";
        return valid=false;
    }//password

    return valid;

}

function checkPasswordStrength(password) {
            var strength = 0;

            // If password length is less than 6, return 'Poor'
            if (password.length < 6) {
                return 'Poor';
            }

            // If password length is greater than 12, return 'Strong'
            if (password.length > 12) {
                return 'Strong';
            }

            // Check if password contains uppercase letters
            if (/[A-Z]./.test(password)) {
                strength += 1;
            }

            // Check if password contains lowercase letters
            if (/[a-z]/.test(password)) {
                strength += 1;
            }

            // Check if password contains numbers
            if (/\d/.test(password)) {
                strength += 1;
            }

            // Check if password contains special characters
            if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
                strength += 1;
            }
            
            // If password meets at least 3 criteria, return 'Strong'
            if (strength >= 5) {
                return 'Strong';
            }

            // If password meets at least 2 criteria, return 'Medium'
            if (strength >= 2) {
                return 'Medium';
            }

            // If password meets at least 1 criterion, return 'Medium'
            // if (strength >= 1) {
            //     return 'Medium';
            // }

            // If none of the above conditions are met, return 'Poor'
            return 'Poor';
        }

function updateStrength() {
    var password = document.getElementById("password1").value;
    var strengthIndicator = document.getElementById("strengthIndicator");

    var strength = checkPasswordStrength(password);

    if (strength === 'Poor') {
        strengthIndicator.style.color = 'red';
    } else if (strength === 'Medium') {
        strengthIndicator.style.color = 'orange';
    } else {
        strengthIndicator.style.color = 'green';
    }

    strengthIndicator.innerHTML = strength;
}