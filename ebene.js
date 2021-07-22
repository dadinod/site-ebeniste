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
serv[0].style.color = "#D2A814";

function decoration(){

    services.classList.remove("mesureimg");


    deco.classList.remove("hyde");
    int.classList.add("hyde");
    ext.classList.add("hyde");
    mesu.classList.add("hyde");

    serv[0].style.color = "#D2A814";
    serv[1].style.color = "#2D1E0A";
    serv[2].style.color = "#2D1E0A";
    serv[2].style.color = "#2D1E0A";
    serv[2].style.color = "#2D1E0A";

}

function interieur(){

    services.classList.remove("mesureimg");

    int.classList.remove("hyde");
    deco.classList.add("hyde");
    ext.classList.add("hyde");
    mesu.classList.add("hyde");

    serv[0].style.color = "#2D1E0A";
    serv[1].style.color = "#D2A814";
    serv[2].style.color = "#D2A814";
    serv[3].style.color = "#2D1E0A";
    serv[4].style.color = "#2D1E0A";

}

function exterieur(){

    services.classList.remove("mesureimg");

    ext.classList.remove("hyde");
    deco.classList.add("hyde");
    int.classList.add("hyde");
    mesu.classList.add("hyde");

    serv[0].style.color = "#2D1E0A";
    serv[1].style.color = "#D2A814";
    serv[2].style.color = "#2D1E0A";
    serv[3].style.color = "#D2A814";
    serv[4].style.color = "#2D1E0A";

}

function mesure(){

    services.classList.add("mesureimg");

    mesu.classList.remove("hyde");
    deco.classList.add("hyde");
    int.classList.add("hyde");
    ext.classList.add("hyde");

    serv[0].style.color = "#2D1E0A";
    serv[1].style.color = "#2D1E0A";
    serv[2].style.color = "#2D1E0A";
    serv[3].style.color = "#2D1E0A";
    serv[4].style.color = "#D2A814";

}