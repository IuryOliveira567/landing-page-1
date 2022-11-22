const lupa = document.getElementById("lupa");

lupa.onclick = function() {
    this.classList.toggle("hide");
    const searchbar = document.getElementsByClassName("searchbar")[0];
    
    const signin = document.getElementsByClassName("signin")[0];
    signin.classList.toggle("hide")
    
    searchbar.classList.toggle("activebar");
    searchbar.focus();

    searchbar.onblur = function() {
        lupa.classList.toggle("hide", false);
        this.classList.toggle("activebar", false);
        signin.classList.toggle("hide", false);
    }
}