//Шторка на карте
var className = "map-opacity-hidden";
var divOpacity = document.querySelector(".map-opacity");
var mapContainerClass = ".map-container";
var mapContainer = document.querySelector(mapContainerClass);

divOpacity.addEventListener("click", function (event) {
	event.preventDefault();
	divOpacity.classList.add(className);
});

mapContainer.addEventListener("mouseout", function (event) {
	event.preventDefault();
	divOpacity.classList.remove(className);
});

//Popap
var link = document.querySelector(".button-red");
var popup = document.querySelector(".popup");
var close = document.querySelector(".popup-close");
var login = popup.querySelector("[name=login]");
var email = popup.querySelector("[name=email]");
var letter = popup.querySelector("[name=letter]");
var form = popup.querySelector("form");
var storageLogin = localStorage.getItem("login");
var storageEmail = localStorage.getItem("email");

link.addEventListener("click", function(event) {
	event.preventDefault();
	popup.classList.add("popup-show");
	login.focus();
	
	if (storageLogin) {
		login.value = storageLogin;
		email.focus();
	} else {
		login.focus();
	}
	
	if (storageEmail) {
		email.value = storageEmail;
		letter.focus();
	} else {
		login.focus();
	}
});

close.addEventListener("click", function(event) {
	event.preventDefault();
	popup.classList.remove("popup-show");
});

form.addEventListener("submit", function() {
	if (!(login.value && email.value)) {
		event.preventDefault();
		popup.classList.add(".popup-close");
	} else {
		localStorage.setItem("login", login.value);
		localStorage.setItem("email", email.value);
	}
});

window.addEventListener("keydown", function(event) {
	if (event.keyCode == 27) {
		if(popup.classList.contains("popup-show")){
			popup.classList.remove("popup-show");
		}
	}
});