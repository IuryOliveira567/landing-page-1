const menu_mobile = document.getElementsByClassName("mobile-menu")[0];

menu_mobile.onclick = function() {
    crossingBars();
    const links = document.getElementsByClassName("links")[0];
    links.classList.toggle("active-menu");
}


function crossingBars() {
    let line3 = document.getElementById("line1").classList.toggle("remove-bar1");
    let line2 = document.getElementById("line2").classList.toggle("rotate-bar2");
    let line1 = document.getElementById("line3").classList.toggle("rotate-bar3");
 }