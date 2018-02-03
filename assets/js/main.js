let touchEvent = 'ontouchstart' in window ? 'touchstart' : 'click';

function displayTestimonials() {
    let divToDisplay = document.getElementById("testimonials-container-2");
    let buttonDisplay = document.getElementById("displayButton");
    document.addEventListener(touchEvent, ()=>{
        alert("Iphone clicked");
        divToDisplay.style.display = "flex";
        buttonDisplay.style.display = "none";
    });
       
}