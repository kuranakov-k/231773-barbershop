var showLogin = document.querySelector(".user-block");
var loginPopup = document.querySelector(".login");
var close = document.querySelector(".btn-close");
var closeMap = document.querySelector(".btn-close-map");

var showMap = document.querySelector(".open-map");
var mapPopup = document.querySelector(".map");

showLogin.addEventListener("click", function(e) {
    e.preventDefault();
    loginPopup.classList.add("modal-content-show");
});

showMap.addEventListener("click", function(e) {
    e.preventDefault();
    mapPopup.classList.add("modal-content-show");
});

close.addEventListener("click", function(e) {
    e.preventDefault();
    loginPopup.classList.remove("modal-content-show");
});
closeMap.addEventListener("click", function(e) {
    e.preventDefault();
    mapPopup.classList.remove("modal-content-show");
});