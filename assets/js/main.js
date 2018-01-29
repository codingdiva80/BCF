function initLinks(){
	let divEls = document.querySelectorAll("[data-href]");
	divEls.forEach(div => {
		div.style.cursor = "pointer";
		div.onclick = () => {
			let win = window.open(div.getAttribute("data-href"), '_blank');
		}
	});
}