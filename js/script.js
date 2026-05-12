// Navigasi Mobile
function hamburg() {
    document.querySelector(".dropdown").classList.add("active");
}

function cancel() {
    document.querySelector(".dropdown").classList.remove("active");
}

// Typewriter Effect (Hanya jalan jika elemen ada)
const textElement = document.querySelector(".typewriter-text");
if (textElement) {
    const texts = ["Teleco Engineer", "RF Specialist", "Antenna Designer"];
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
        const currentText = texts[textIndex];
        if (isDeleting) {
            textElement.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
        } else {
            textElement.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
        }

        let typeSpeed = isDeleting ? 50 : 100;
        if (!isDeleting && charIndex === currentText.length) {
            typeSpeed = 2000;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
            typeSpeed = 500;
        }
        setTimeout(type, typeSpeed);
    }
    
    window.addEventListener('load', () => setTimeout(type, 1200));
}