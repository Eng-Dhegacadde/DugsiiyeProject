let Menu = document.querySelector(".burger");
let navBar = document.querySelector(".navigation-bar");
Menu.addEventListener("click", ()=> {
    navBar.classList.toggle("active");
});