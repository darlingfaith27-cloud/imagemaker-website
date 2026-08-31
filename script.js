
// Image Maker Website JavaScript

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function (e) {
        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            e.preventDefault();

            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Change navbar style when scrolling
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');

    if (!navbar) return;

    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Reveal sections on scroll
const sections = document.querySelectorAll('section');

const revealOnScroll = () => {
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;

        if (sectionTop < window.innerHeight - 100) {
            section.classList.add('show');
        }
    });
};

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);
// Mobile hamburger menu
document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.querySelector(".navbar");

    if (!navbar) return;

    const menuButton = document.createElement("button");
    menuButton.className = "menu-toggle";
    menuButton.setAttribute("aria-label", "Toggle navigation menu");
    menuButton.innerHTML = "☰";

    navbar.parentNode.insertBefore(menuButton, navbar);

    menuButton.addEventListener("click", function () {
        navbar.classList.toggle("mobile-open");

        if (navbar.classList.contains("mobile-open")) {
            menuButton.innerHTML = "✕";
        } else {
            menuButton.innerHTML = "☰";
        }
    });

    navbar.querySelectorAll("a").forEach(function (link) {
        link.addEventListener("click", function () {
            navbar.classList.remove("mobile-open");
            menuButton.innerHTML = "☰";
        });
    });
});
