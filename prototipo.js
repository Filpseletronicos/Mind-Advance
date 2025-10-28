document.addEventListener('DOMContentLoaded', function() {
    // 1. Get all "Retomar" buttons (only in the continue-learning section)
    const resumeButtons = document.querySelectorAll('.resume-button');

    // 2. Add a click listener to each button
    resumeButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            // Prevent default form submission or navigation if this were an anchor
            event.preventDefault();

            // Find the parent card to get course information
            const card = this.closest('.card');
            const courseTitle = card.querySelector('h3').textContent;
            const courseId = card.dataset.courseId; // Get the ID from the data- attribute

            // Simple user feedback (You would replace this with actual navigation)
            alert(`Retomando o curso: "${courseTitle}" (ID: ${courseId}).\nBoa sorte, Amanda!`);

            // In a real application, you would use:
            // window.location.href = `/course/${courseId}/resume`;
        });
    });

    // 3. Get all Category Cards (in the explore-content section)
    const categoryCards = document.querySelectorAll('.category-card');

    // 4. Add a click listener to each category card
    categoryCards.forEach(card => {
        card.addEventListener('click', function() {
            const categoryName = card.querySelector('h3').textContent;
            const categoryId = card.dataset.category;

            // Simple user feedback for exploration
            alert(`Explorando a área de ${categoryName} (Slug: ${categoryId}).`);

            // In a real application, you would use:
            // window.location.href = `/explore/${categoryId}`;
        });
    });
    
    // 5. Add a simple event for the Profile Icon (e.g., showing a menu)
    const profileIcon = document.querySelector('.profile-icon');
    profileIcon.addEventListener('click', function() {
        alert('Menu de Perfil: Configurações, Sair, Ajuda.');
    });
});