
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

// Mobile menu
menuBtn.addEventListener("click", function () {
    navLinks.classList.toggle("show");

    menuBtn.textContent = navLinks.classList.contains("show")
        ? "✕"
        : "☰";
});

// Close menu after clicking a link
document.querySelectorAll(".nav-links a").forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.classList.remove("show");
        menuBtn.textContent = "☰";
    });
});

// Current year in footer
document.getElementById("year").textContent =
    new Date().getFullYear();

// Scroll animation
const animatedSections = document.querySelectorAll(
    ".section, .details div, .skill, .project"
);

animatedSections.forEach(function (element) {
    element.classList.add("reveal");
});

const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.12
});

animatedSections.forEach(function (element) {
    observer.observe(element);
});
