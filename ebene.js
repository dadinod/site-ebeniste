// ------------------FORMULAIRE---------------------

function Submit(){ 
 var name =document.getElementById("name");
 var email =document.getElementById("email");
 var objet =document.getElementById("objet");
 var message =document.getElementById("message");
 var robot =document.getElementById("robot");


    if (name.value == "")                                  
    { 
        // alert("Mettez votre nom."); 
        name.focus(); 
        return false; 
    }      
    if (email.value == "")                                   
    { 
        // alert("Mettez une adresse email valide."); 
        email.focus(); 
        return false; 
    }    
    if (email.value.indexOf("@", 0) < 0)                 
    { 
        // alert("Mettez une adresse email valide."); 
        email.focus(); 
        return false; 
    }    
    if (email.value.indexOf(".", 0) < 0)                 
    { 
        // alert("Mettez une adresse email valide."); 
        email.focus(); 
        return false; 
    } 
    if (objet.value == "")                        
    { 
        // alert("Saisissez un objet"); 
        objet.focus(); 
        return false; 
    }
    if (message.value == "")                        
    { 
        // alert("Saisissez votre message"); 
        message.focus(); 
        return false; 
    } 
    if (robot.value == "")                        
    { 
        alert("Confirmer que vous n'êtes pas robot"); 
        robot.focus(); 
        return false; 
    }
}