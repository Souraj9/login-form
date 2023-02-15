let username="souraj@gmail.com";
let passwowd="Souraj@123";


 function validate() {
     let email = document.getElementById("mail").value;
     let pwd = document.getElementById("pw").value;
     if (email == "" && pwd == "")
     {
        alert ("Missing email and password!")
    }
    else if(email=="") {
        alert ("Missing email!") 
        return;
    }
    else if(pwd=="") {
        alert ("Missing password!") 
    }
   else if (email == username && pwd == passwowd ) {
        alert ("Welcome Souraj 🥳")  
    }
    else 
    {
        alert ("Invalid email and password! 🔴")
    }
 }