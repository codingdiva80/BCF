function respNav() {
    let x = document.getElementById("resNav");
    if (x.className === "navbar") {
        x.className += " responsive";
    } else {
        x.className = "navbar";
    }
}
function displayTestimonials() {
    let divToDisplay = document.getElementById("testimonials-container-2");
    let buttonDisplay = document.getElementById("displayButton");
    buttonDisplay.addEventListener("click", function() {
        divToDisplay.style.display = "flex";
        buttonDisplay.style.display = "none";
    })
}
// displayTestimonials();