var menus = document.getElementById("menus");
var navbar = document.getElementById("navbar")
menus.style.right = "-110%";
function togleMenu(){
    menus.style.right = "-110%";
}

function togleMenu(){
    if(menus.style.right == "-110%"){
       menus.style.right = "0px"

    }
    else{
        menus.style.right = "-110%"
    }
    
    
}