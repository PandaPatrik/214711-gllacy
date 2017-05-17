var link = document.querySelector(".contacs-btn");
var popup = document.querySelector(".contact-us");
var close = document.querySelector(".close-btn");
var overlay = document.querySelector(".overlay");


link.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.add("contact-us-show");
  overlay.classList.add("modal-overlay-show");
});

close.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.remove("contact-us-show");
  overlay.classList.remove("modal-overlay-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if(popup.classList.contains("contact-us-show")) {
    popup.classList.remove("contact-us-show");
    overlay.classList.remove("modal-overlay-show");
    }
  }
});
