
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

const nodes = Array.from(heroTitle.childNodes);

heroTitle.innerHTML = "";

let nodeIndex = 0;
let charIndex = 0;

function typeEffect() {
    if (nodeIndex >= nodes.length) return;

    const currentNode = nodes[nodeIndex];

    if (currentNode.nodeType === Node.TEXT_NODE) {
        if (charIndex < currentNode.textContent.length) {
            heroTitle.append(currentNode.textContent[charIndex]);
            charIndex++;
            setTimeout(typeEffect, 30);
        } else {
            nodeIndex++;
            charIndex = 0;
            typeEffect();
        }
    } 

    else if (currentNode.nodeType === Node.ELEMENT_NODE) {
        const clone = currentNode.cloneNode(false);
        heroTitle.appendChild(clone);

        const text = currentNode.textContent;
        let i = 0;

        function typeInside() {
            if (i < text.length) {
                clone.textContent += text[i];
                i++;
                setTimeout(typeInside, 30);
            } else {
                nodeIndex++;
                charIndex = 0;
                typeEffect();
            }
        }

        typeInside();
    }
}

window.addEventListener("load", typeEffect);


// =============================
// SCROLL TO TOP BUTTON
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

