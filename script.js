// Dynamic Typing Effect
const words = ["Problem solver", "Logical thinker", "Front-end developer"];
const typewriter = document.querySelector(".typewriter");
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
    const currentWord = words[wordIndex];
    const visibleText = currentWord.substring(0, charIndex);
    typewriter.textContent = visibleText;

    if (!isDeleting && charIndex < currentWord.length) {
        charIndex++;
        setTimeout(type, 100);
    } else if (isDeleting && charIndex > 0) {
        charIndex--;
        setTimeout(type, 50);
    } else {
        isDeleting = !isDeleting;
        if (!isDeleting) {
            wordIndex = (wordIndex + 1) % words.length;
        }
        setTimeout(type, 2000);
    }
}

window.onload = () => {
    type();
    animateSkills();
};

// Skills Progress Animation
function animateSkills() {
    const skills = document.querySelectorAll(".skill .progress");
    skills.forEach(skill => {
        const skillValue = skill.getAttribute("data-skill");
        setTimeout(() => {
            skill.style.width = skillValue;
            skill.textContent = skillValue;
        }, 500);
    });
}

// AOS Initialization
AOS.init({
    offset: 0,
    duration: 1200,
    easing: 'ease-in-out',
    once: true
});

// Contact form submission
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const mailtoLink = `mailto:haribabu2004.m@gmail.com?subject=Contact%20from%20${name}&body=Name: ${name}%0D%0AEmail: ${email}%0D%0AMessage: ${message}`;
    window.location.href = mailtoLink;
});

function toggleDescription(id) {
    const desc = document.getElementById(id);
    desc.style.display = desc.style.display === "none" ? "block" : "none";
}
