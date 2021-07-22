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
        name.style.borderColor = "red";  
        return false; 
    }      
    if (email.value == "")                                   
    { 
        // alert("Mettez une adresse email valide."); 
        email.style.borderColor = "red"; 
        return false; 
    }    
    if (email.value.indexOf("@", 0) < 0)                 
    { 
        // alert("Mettez une adresse email valide."); 
        email.style.borderColor = "red"; 
        return false; 
    }    
    if (email.value.indexOf(".", 0) < 0)                 
    { 
        // alert("Mettez une adresse email valide."); 
        email.style.borderColor = "red"; 
        return false; 
    } 
    if (objet.value == "")                        
    { 
        // alert("Saisissez un objet"); 
        objet.style.borderColor = "red"; 
        return false; 
    }
    if (message.value == "")                        
    { 
        // alert("Saisissez votre message"); 
        message.style.borderColor = "red"; 
        return false; 
    } 
    if (robot.value == "")                        
    { 
        // alert("Confirmer que vous n'êtes pas robot"); 
        robot.style.borderColor = "red"; 
        return false; 
    }
}

// ------------------FIN FORMULAIRE---------------------
var services = document.getElementById("services");
var deco = document.getElementById("deco");
var int = document.getElementById("int");
var ext = document.getElementById("ext");
var mesu = document.getElementById("mesu");
var serv = document.getElementsByClassName("serv");

function decoration(){

    services.classList.remove("mesureimg");


    deco.classList.remove("hyde");
    int.classList.add("hyde");
    ext.classList.add("hyde");
    mesu.classList.add("hyde");

    serv[0].classList.add("activeserv");
    serv[1].classList.remove("activeserv");
    serv[2].classList.remove("activeserv");
    serv[3].classList.remove("activeserv");
    serv[4].classList.remove("activeserv");

}

function interieur(){

    services.classList.remove("mesureimg");

    int.classList.remove("hyde");
    deco.classList.add("hyde");
    ext.classList.add("hyde");
    mesu.classList.add("hyde");

    serv[0].classList.remove("activeserv");
    serv[1].classList.add("activeserv");
    serv[2].classList.add("activeserv");
    serv[3].classList.remove("activeserv");
    serv[4].classList.remove("activeserv");

}

function exterieur(){

    services.classList.remove("mesureimg");

    ext.classList.remove("hyde");
    deco.classList.add("hyde");
    int.classList.add("hyde");
    mesu.classList.add("hyde");

    serv[0].classList.remove("activeserv");
    serv[1].classList.add("activeserv");
    serv[2].classList.remove("activeserv");
    serv[3].classList.add("activeserv");
    serv[4].classList.remove("activeserv");

}

function mesure(){

    services.classList.add("mesureimg");

    mesu.classList.remove("hyde");
    deco.classList.add("hyde");
    int.classList.add("hyde");
    ext.classList.add("hyde");

    serv[0].classList.remove("activeserv");
    serv[1].classList.remove("activeserv");
    serv[2].classList.remove("activeserv");
    serv[3].classList.remove("activeserv");
    serv[4].classList.add("activeserv");

}