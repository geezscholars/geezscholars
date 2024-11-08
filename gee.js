const menuBtn = document.querySelector(".menu-btn");
const navBar = document.querySelector(".navbar");
const links = document.querySelectorAll(".links");

let clicked = false;
menuBtn.addEventListener("click", () => {
    if (!clicked) {
        navBar.classList.remove("added");
        links.forEach((each) => {
            each.style.display = "none";
        })
        clicked = true;
    } else {
        navBar.classList.add("added");
        links.forEach((each) => {
            each.style.display = "inline";
        })
        clicked = false;
    }

});