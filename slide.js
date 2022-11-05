function openNav() {
    document.getElementById("mySidenav").style.width = "200px";
    document.getElementById("main").style.marginLeft = "200px";
    document.body.style.backgroundImage.opacity=0.5;
    document.getElementById("open").style.opacity= "0";
    document.getElementById("open").style.visibility = "hidden";
}
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.body.style.backgroundColor = "white";
    document.getElementById("open").style.opacity ="1";
    document.getElementById("open").style.visibility = "visible";
    }