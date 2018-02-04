let touchEvent = 'ontouchstart' in window ? 'touchstart' : 'click';

function init(){
    displayTestimonials();        
    showHideMenu();
}

function displayTestimonials() {
    let divToDisplay = document.getElementById("testimonials-container-2");
    let buttonDisplay = document.getElementById("displayTestimonialsTag");
    buttonDisplay.addEventListener(touchEvent, ()=>{
        divToDisplay.style.display = "flex";
        buttonDisplay.style.display = "none";
    });
}

function showHideMenu(){
    toggleMenu();
    let hamburgerMenu = document.querySelector("#toggle-label");
    let navMenu = document.querySelector("#navMenu");
    navMenu.addEventListener(touchEvent, (e)=>{
        toggleMenu();
        let location = e.target.href.substr(e.target.href.indexOf("#")+1);
        console.log(location);
        let anchorTags = document.querySelectorAll("a");
        let anchorTag = null;
        let element = [].forEach.call(anchorTags, (tag) => {
            if(tag.name === location){
                anchorTag = tag;
            }
        });
        anchorTag.scrollIntoView();
        window.scrollBy(0, -100);
    });
    hamburgerMenu.addEventListener(touchEvent, (e)=>{
        toggleMenu();
    });
}

function toggleMenu(){
    let navMenu = document.querySelector("#navMenu");
    let d = navMenu.getAttribute("class");
    navMenu.setAttribute("class", (d === "navMenuHide") ? "navMenuShow" : "navMenuHide");
    console.log(navMenu.getAttribute("class"));
}
