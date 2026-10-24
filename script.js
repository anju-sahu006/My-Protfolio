// Mobile Navigation

const menuBtn = document.getElementById("menuBtn");

const navLinks = document.getElementById("navLinks");


menuBtn.addEventListener("click", function () {

    navLinks.classList.toggle("active");

});


// Close menu when a link is clicked

document.querySelectorAll(".nav-links a").forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("active");

    });

});


// Contact Form

const contactForm = document.getElementById("contactForm");


contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = document.getElementById("name").value;

    alert("Thank you, " + name + "! Your message has been submitted.");

    contactForm.reset();

});


// Floating Mouse Glow Effect

document.addEventListener("mousemove", function (event) {

    document.body.style.setProperty("--mouse-x", event.clientX + "px");

    document.body.style.setProperty("--mouse-y", event.clientY + "px");

});