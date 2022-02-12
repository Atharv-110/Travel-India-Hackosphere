const menuBtn = document.querySelector(".menu-btn");
const navigation = document.querySelector(".nav-bar");

menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("active");
    navigation.classList.toggle("active");
})