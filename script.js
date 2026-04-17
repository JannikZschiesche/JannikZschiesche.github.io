// Warte, bis das HTML vollständig geladen ist
document.addEventListener("DOMContentLoaded", () => {
    
    // Finde das Formular-Element
    const contactForm = document.getElementById("contact-form");
    
    // Verhindere das Standard-Abschicken und zeige ein Popup
    contactForm.addEventListener("submit", (e) => {
        
        // Verhindert das Standard-Verhalten des Formulars (Seite neu laden)
        e.preventDefault(); 
        
        // Popup-Nachricht anzeigen
        alert("🧙‍♂️ Deine Botschaft wurde an die Raben gilde übergeben! Wir haben noch keine echten Raben, aber der Platzhalter ist stolz darauf, deine Runen angenommen zu haben.");
        
        // Optionale: Das Formular leeren
        // contactForm.reset(); 
    });
});
