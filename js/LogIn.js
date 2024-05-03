function printerror(id,msg){  
    document.getElementById(id).innerHTML = msg;
}
function validateform(){  

        var nm= document.getElementById('name').innerHTML.value;
        var em=document.getElementById('email').innerHTML.value;
        var ph=document.getElementById('phone').innerHTML.value;
        var pass=document.getElementById('pass').innerHTML.value;
        var dob=document.getElementById('dob').innerHTML.value;
        var namerr=emailerr=pherr=doberr=passerr=nerr=true;
    
        if(nm == "") {
        document.write("namerr", "Please enter your name");
        } 
        else{
        var regex = /^[a-zA-Z\s]+$/;                
        if(regex.test(nm) === false) {
            printerror("namerr", "Please enter a valid name");
        } 
        else {
            printerror("namerr", "");
            namerr = false;
             }
        }
    
        if(em == "") {
            printerror("emailerr", "Please enter your email-id");
        } else {
            
            var regex = /^\S+@\S+\.\S+$/;
            if(regex.test(em) === false) {
                printerror("emailerr", "Please enter a valid email-id");
                
            } else{
                printerror("emailerr", "");
               
                emailerr = false;
            }
        }
    
        if(ps == "") {
            printerror("passerr", "Please enter your password");
        } else {
            
            var regex = ("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
            if(regex.test(pass) === false) {
                printerror("passerr", "Please enter a valid email-id");
               
            } else{
                printerror("passerr", "");
            
                passerr = false;
            }
        }
    
        if(mb== "") {
            printerror("pherr", "Please enter 10-digit  mobile number");
            
        } else {
            var regex = /^[1-9]\d{9}$/;
            if(regex.test(ph) === false) {
                printerror("pherr", "Please enter a valid 10 digit mobile number");
                
            } else{
                printerror("pherr", "");
               
                pherr = false;
            }
        }
    
        if(bch == "") {
            printerror("btcherr", "Please select your batch");
            setTimeout(3000);
        } else {
            printerror("btcherr", "");
            setTimeout(3000);
            btcherr = false;
        }
    
        if((namerr||emailerr||passerr||pherr||nerr)==true)
        {
        return false;
        }
        else{
        var dataPreview = "You've entered the following details: \n" +
        "Full Name: " + nm + "\n"+
        "Email ID: " + em + "\n"+
        " Password "+ pass +"\n"+
        "Mobile Number:"+ ph +"\n"+
        "Nationality:"+ bch +"\n";
        alert(dataPreview);
        }
    }
      