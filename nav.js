function locationFunction() {
    document.getElementById("locationContent").classList.toggle("show");
}
function aboutFunction() {
    document.getElementById("aboutContent").classList.toggle("show");
}
function mediaFunction() {
    document.getElementById("mediaContent").classList.toggle("show");
}
function myFunction() {
    var icon = document.getElementById("myTopnav");
    if (icon.className === "topnav") {
        icon.className += " responsive";
    } else {
        icon.className = "topnav";
    }
}
