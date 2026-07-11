// =============================
// MOBILE MENU
// =============================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});


// =============================
// TYPING EFFECT
// =============================

const typing = document.querySelector(".typing");

const words = [
    "Frontend Developer",
    "Responsive Web Designer",
    "JavaScript Developer",
    "Bootstrap Developer",
    "Building Modern Websites"
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {

    const currentWord = words[wordIndex];

    if (!isDeleting) {
        typing.textContent = currentWord.substring(0, charIndex++);
    } else {
        typing.textContent = currentWord.substring(0, charIndex--);
    }

    let speed = isDeleting ? 60 : 120;

    if (!isDeleting && charIndex > currentWord.length) {
        isDeleting = true;
        speed = 1500; // Pause before deleting
    }

    if (isDeleting && charIndex < 0) {
        isDeleting = false;
        charIndex = 0;
        wordIndex = (wordIndex + 1) % words.length;
        speed = 400;
    }

    setTimeout(typeEffect, speed);
}

typeEffect();


// =============================
// STICKY NAVBAR SHADOW
// =============================

window.addEventListener("scroll", () => {

    const header = document.querySelector("header");

    if (window.scrollY > 50) {
        header.style.boxShadow = "0 5px 20px rgba(0,0,0,.5)";
    } else {
        header.style.boxShadow = "none";
    }

});


// =============================
// ACTIVE NAV LINK
// =============================

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});


// =============================
// SCROLL REVEAL
// =============================

const revealElements = document.querySelectorAll(
    ".hero, .about-container, .skill, .card, .edu-box, form"
);

function reveal() {

    revealElements.forEach(element => {

        const windowHeight = window.innerHeight;

        const revealTop = element.getBoundingClientRect().top;

        if (revealTop < windowHeight - 100) {

            element.style.opacity = "1";
            element.style.transform = "translateY(0)";

        }

    });

}

revealElements.forEach(element => {

    element.style.opacity = "0";
    element.style.transform = "translateY(50px)";
    element.style.transition = "all .8s ease";

});

window.addEventListener("scroll", reveal);

reveal();


// =============================
// BACK TO TOP BUTTON
// =============================

const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";

topBtn.id = "topBtn";

document.body.appendChild(topBtn);

topBtn.style.position = "fixed";
topBtn.style.bottom = "30px";
topBtn.style.right = "30px";
topBtn.style.width = "50px";
topBtn.style.height = "50px";
topBtn.style.border = "none";
topBtn.style.borderRadius = "50%";
topBtn.style.background = "#00d9ff";
topBtn.style.color = "#000";
topBtn.style.fontSize = "22px";
topBtn.style.cursor = "pointer";
topBtn.style.display = "none";
topBtn.style.zIndex = "999";
topBtn.style.boxShadow = "0 0 15px #00d9ff";

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,
        behavior: "smooth"

    });

});


// =============================
// CLOSE MENU AFTER CLICK
// =============================

navItems.forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

    });

});




// =============================
// DARK / LIGHT MODE
// =============================

const themeBtn = document.querySelector(".theme-toggle");

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("light-mode");

    const icon = themeBtn.querySelector("i");

    if (document.body.classList.contains("light-mode")) {
        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");
        localStorage.setItem("theme", "light");
    } else {
        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");
        localStorage.setItem("theme", "dark");
    }

});

// Load Saved Theme

if (localStorage.getItem("theme") === "light") {

    document.body.classList.add("light-mode");

    const icon = document.querySelector(".theme-toggle i");

    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");

}

const readBtn = document.getElementById("readBtn");
const moreText = document.getElementById("moreText");

readBtn.addEventListener("click", () => {

    if (moreText.style.display === "none") {
        moreText.style.display = "block";
        readBtn.innerHTML = "Show Less";
    } else {
        moreText.style.display = "none";
        readBtn.innerHTML = "Show More";
    }

});
