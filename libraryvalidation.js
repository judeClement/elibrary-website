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

function validate() {
    var nameregexp=/^([a-zA-Z]+)$/;
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
        err4.innerText="valid"
        err4.style.color="green";
    
    } else {
        err4.innerText="Password invalid"
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
        err4.innerText="valid"
        err4.style.color="green";
    
    } else {
        err4.innerText="Password invalid"
        err4.style.color="red";
        return valid=false;
    }//password
    return valid;
}