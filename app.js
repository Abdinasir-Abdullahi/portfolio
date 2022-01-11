function openmenu() {
    if(open == true){
    closeNav();    
}else{
    openNav();    
}
}


function openNav() {
document.getElementById("navi").style.marginLeft = "200px";
document.getElementById("navi").classList.add("close-nav");
open = true;
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
function closeNav() {
document.getElementById("navi").style.marginLeft = "0";
document.getElementById("navi").classList.remove("close-nav");
open = false;
}
