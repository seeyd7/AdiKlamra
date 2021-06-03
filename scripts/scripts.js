const menu = document.querySelector("#menu");

const navMenu = document.querySelector(".navbar-menu");
const menuToggler = document.querySelector(".menu-toggler");

const navbar = document.querySelector("nav");


menuToggler.addEventListener("click", () => {
	if(menuToggler.classList.contains("active")) {
		menuToggler.classList.remove("active");
		navMenu.classList.remove("active");
	} else {
		menuToggler.classList.add("active");
		navMenu.classList.add("active");
	}
});


