document.getElementById("calc-widget").querySelector(".close-widget").onclick = (evt) => {
    evt.target.parentNode.classList.remove("opened");
    // evt.target.className = "card";
}
document.getElementById("calc-widget").onclick = (evt) => {
    evt.target.classList.add("opened");
}