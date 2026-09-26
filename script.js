// Smooth page entrance animation
gsap.from(".hero-content", {
    duration: 1,
    y: 50,
    opacity: 0,
    ease: "power3.out"
});

gsap.from(".hero-card", {
    duration: 1.2,
    x: 80,
    opacity: 0,
    delay: 0.2,
    ease: "power3.out"
});


// Animate navigation
gsap.from(".navbar", {
    duration: 0.8,
    y: -40,
    opacity: 0,
    ease: "power3.out"
});


// Animate section headings when page loads
gsap.from(".section-heading", {
    duration: 1,
    y: 30,
    opacity: 0,
    delay: 0.5,
    ease: "power2.out"
});


// Button hover effect
const buttons = document.querySelectorAll(".primary-btn, .secondary-btn");

buttons.forEach(button => {

    button.addEventListener("mouseenter", () => {
        gsap.to(button, {
            scale: 1.05,
            duration: 0.2
        });
    });

    button.addEventListener("mouseleave", () => {
        gsap.to(button, {
            scale: 1,
            duration: 0.2
        });
    });

});


// Project card animation
const projects = document.querySelectorAll(".project-card");

projects.forEach(project => {

    project.addEventListener("mouseenter", () => {
        gsap.to(project, {
            y: -8,
            duration: 0.3,
            ease: "power2.out"
        });
    });

    project.addEventListener("mouseleave", () => {
        gsap.to(project, {
            y: 0,
            duration: 0.3,
            ease: "power2.out"
        });
    });

});


// Skills animation
gsap.from(".progress-bar", {
    width: "0%",
    duration: 1.5,
    delay: 0.8,
    stagger: 0.2,
    ease: "power2.out"
});


// Smooth navigation
document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", function(event) {

        event.preventDefault();

        const target = document.querySelector(
            this.getAttribute("href")
        );

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }

    });

});