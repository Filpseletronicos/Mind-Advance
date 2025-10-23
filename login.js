document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();

        // 1. Basic Client-Side Validation (The 'required' attribute handles empty fields, but this is extra)
        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();

        if (email.length < 5 || password.length < 6) {
            alert('Por favor, insira um e-mail válido e uma senha com pelo menos 6 caracteres.');
            return; // Stop the process
        }
        
        // 2. Simulate Login/Server Request (In a real app, you'd make an API call here)
        // For demonstration, we'll just navigate to the prototype page.
        
        console.log('Attempting login for:', email);
        
        // Use a more dynamic, user-friendly feedback mechanism in a real app (e.g., loading spinner)

        // 3. Navigation after (simulated) success
        // Based on your HTML's previous intention, navigating to 'prototipo.html'
        window.location.href = 'prototipo.html';
    });
});