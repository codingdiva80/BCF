let touchEvent = 'ontouchstart' in window ? 'touchstart' : 'click';

let services = [
    { 
        id: "business-credit-recurring-payment-plan-mo",
        price: "$1200",
        title: "Business Credit Consulting Payment Plan Initial Payment - Regular",
        qty: 1
    },
    { 
        id: "business-credit-consulting-payment",
        price: "$3995",
        title: "Business Credit Consulting Payment",
        qty: 1
    },
    { 
        id: "initial-payment-full-payment-business-credit-consulting",
        price: "$2995",
        title: "Initial Payment- Full Payment - Business Credit Consulting",
        qty: 1
    },
    { 
        id: "business-credit-recurring-payment-plan-mo",
        price: "$800",
        title: "Business Credit Recurring payment plan 7 Mo.",
        qty: 1
    }
]

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

function showModal(){

}

(function (e){
    p||(p=t("ember-routing-handlebars/helpers/action").ActionHelper);
    var n=T(e.currentTarget).attr("data-ember-action"),i=p.registeredActions[n];
return i&&i.eventName===r?i.handler(e):void 0});
