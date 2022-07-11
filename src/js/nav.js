import open from "../assets/shared/icon-hamburger.svg"
import close from "../assets/shared/icon-close.svg"

const hamburger = document.querySelector(".hamburger")
const navbar = document.querySelector(".navbar")

const toggleMenu = () => {
    const isMenuOpen = navbar.classList.contains("navbar--open")

    if (isMenuOpen) {
        navbar.classList.remove("navbar--open")
        hamburger.style.backgroundImage = `url("${open}")`
    } else {
        navbar.classList.add("navbar--open")
        hamburger.style.backgroundImage = `url("${close}")`
    }
}

hamburger.addEventListener("click", toggleMenu)