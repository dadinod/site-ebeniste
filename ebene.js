// ------------------FORMULAIRE---------------------

function Submit(){ 

 var name =document.getElementById("name");
 var email =document.getElementById("email");
 var objet =document.getElementById("objet");
 var message =document.getElementById("message");
 var robot =document.getElementById("robot");
 var check =document.getElementById("check");


    if (name.value == "") { 
        name.style.borderColor = "red";  
        return false; 
    } else {
        name.style.borderColor = "initial";  
    }    
    if (email.value == "") { 
        email.style.borderColor = "red"; 
        return false; 
    }  else {
        email.style.borderColor = "initial";  
    }     
    if (email.value.indexOf("@", 0) < 0) { 
        email.style.borderColor = "red"; 
        return false; 
    }  else {
        email.style.borderColor = "initial";  
    }         
    if (email.value.indexOf(".", 0) < 0) { 
        email.style.borderColor = "red"; 
        return false; 
    }  else {
        email.style.borderColor = "initial";  
    }      
    if (objet.value == "") { 
        objet.style.borderColor = "red"; 
        return false; 
    } else {
        objet.style.borderColor = "initial";  
    }  
    if (message.value == "") { 
        message.style.borderColor = "red"; 
        return false; 
    }  else {
        message.style.borderColor = "initial";  
    }  
    if (robot.checked == false) {  
        check.style.color = "red"; 
        return false; 
    } else {
        check.style.color = "initial";  
    }   
}

function Reset(){
    
let name =document.getElementById("name");
    
    name.style.borderColor = "initial"; 
    email.style.borderColor = "initial";
    objet.style.borderColor = "initial";  
    message.style.borderColor = "initial";  
    check.style.color = "initial";   
}

// ------------------FIN FORMULAIRE---------------------
// ------------------SERVICES---------------------

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

// ------------------FIN SERVICES---------------------