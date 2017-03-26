function navBarEffect() {
    var nav = document.getElementById("topNav");
    if (nav.className === "nav-links") {
        nav.className += " responsive";
    } else {
        nav.className = "nav-links";
    }
}