document.addEventListener("DOMContentLoaded", () => {
    
    const contactForm = document.getElementById("contact-form");
    if(contactForm) {
        contactForm.addEventListener("submit", (e) => {
            e.preventDefault(); 
            alert("🧙‍♂️ Deine Botschaft wurde an die Raben gilde übergeben! Der Platzhalter ist stolz.");
        });
    }

    const observerOptions = {
        threshold: 0.2
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fly-in').forEach(el => {
        observer.observe(el);
    });
});
