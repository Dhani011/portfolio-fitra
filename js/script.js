// Navbar Control
function hamburg() {
    const dropdown = document.querySelector(".dropdown");
    dropdown.classList.add("active");
}

function cancel() {
    const dropdown = document.querySelector(".dropdown");
    dropdown.classList.remove("active");
}

// Opsional: Tutup menu saat link diklik
document.querySelectorAll(".dropdown .links a").forEach(link => {
    link.addEventListener("click", () => {
        cancel();
    });
});

// Typewriter Effect
const texts = [
    "Teleco Engineer",
    "RF Specialist",
    "Antenna Designer"
];

let speed = 100;
const textElements = document.querySelector(".typewriter-text");
let textIndex = 0;
let characterIndex = 0;

function typeWriter() {
    if (characterIndex < texts[textIndex].length) {
        textElements.innerHTML += texts[textIndex].charAt(characterIndex);
        characterIndex++;
        setTimeout(typeWriter, speed);
    } else {
        setTimeout(eraseText, 2000);
    }
}

function eraseText() {
    if (textElements.innerHTML.length > 0) {
        textElements.innerHTML = textElements.innerHTML.slice(0, -1);
        setTimeout(eraseText, 50);
    } else {
        textIndex = (textIndex + 1) % texts.length;
        characterIndex = 0;
        setTimeout(typeWriter, 500);
    }
}


// Initialize
window.addEventListener('load', () => {
    // Delay untuk sinkronisasi dengan animasi AOS (900ms delay)
    setTimeout(typeWriter, 1200);
});