// =============================
// NAVBAR SCROLL EFFECT
// =============================
const header = document.querySelector(".cap");

window.addEventListener("scroll", () => {
    if (window.scrollY > 60) {
        header.style.background = "rgba(10, 10, 10, 0.98)";
        header.style.boxShadow = "0 5px 25px rgba(0,0,0,0.6)";
        header.style.transition = "all 0.3s ease";
    } else {
        header.style.background = "rgba(10, 10, 10, 0.9)";
        header.style.boxShadow = "none";
    }
});


// =============================
// SCROLL REVEAL (cards + timeline)
// =============================
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, { threshold: 0.15 });

const elementsToAnimate = document.querySelectorAll(
    ".project-card, .timeline-item"
);

elementsToAnimate.forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(40px)";
    el.style.transition = "all 0.6s ease";
    observer.observe(el);
});


// =============================
// PARALLAX HERO
// =============================
const hero = document.querySelector(".inici");

window.addEventListener("scroll", () => {
    let offset = window.scrollY;
    hero.style.backgroundPositionY = offset * 0.5 + "px";
});


// =============================
// TYPING EFFECT AL HERO
// =============================
const heroTitle = document.querySelector(".inici h1");
const originalText = heroTitle.innerHTML;
heroTitle.innerHTML = "";

let i = 0;

function typeEffect() {
    if (i < originalText.length) {
        heroTitle.innerHTML += originalText.charAt(i);
        i++;
        setTimeout(typeEffect, 30);
    }
}

window.addEventListener("load", typeEffect);


// =============================
// SCROLL TO TOP BUTTON (creat amb JS)
// =============================
const scrollBtn = document.createElement("button");
scrollBtn.innerHTML = "↑";
document.body.appendChild(scrollBtn);

scrollBtn.style.position = "fixed";
scrollBtn.style.bottom = "30px";
scrollBtn.style.right = "30px";
scrollBtn.style.width = "45px";
scrollBtn.style.height = "45px";
scrollBtn.style.borderRadius = "50%";
scrollBtn.style.border = "none";
scrollBtn.style.cursor = "pointer";
scrollBtn.style.fontSize = "20px";
scrollBtn.style.background = "#6c63ff";
scrollBtn.style.color = "white";
scrollBtn.style.boxShadow = "0 5px 20px rgba(0,0,0,0.4)";
scrollBtn.style.opacity = "0";
scrollBtn.style.transition = "all 0.3s ease";
scrollBtn.style.zIndex = "999";

window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
        scrollBtn.style.opacity = "1";
    } else {
        scrollBtn.style.opacity = "0";
    }
});

scrollBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});


// =============================
// HOVER 3D EFFECT A LES CARDS
// =============================
const cards = document.querySelectorAll(".project-card");

cards.forEach(card => {
    card.addEventListener("mousemove", e => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = (y - centerY) / 15;
        const rotateY = (centerX - x) / 15;

        card.style.transform = `
            rotateX(${rotateX}deg)
            rotateY(${rotateY}deg)
            scale(1.03)
        `;
        card.style.transition = "none";
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "rotateX(0) rotateY(0) scale(1)";
        card.style.transition = "all 0.4s ease";
    });
});