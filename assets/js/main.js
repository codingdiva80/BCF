let touchEvent = 'ontouchstart' in window ? 'touchstart' : 'click';

function displayTestimonials() {
    let divToDisplay = document.getElementById("testimonials-container-2");
    let buttonDisplay = document.getElementById("displayButton");
    buttonDisplay.addEventListener(touchEvent, ()=>{
        divToDisplay.style.display = "flex";
        buttonDisplay.style.display = "none";
    });
       
}

window.addEventListener(touchEvent, function(){
    alert("Welcome");
});