// Arquivo: index.js

document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelector('.nav-links');
    const menuToggle = document.querySelector('.menu-toggle');
    const dropdownToggle = document.querySelector('.dropdown-toggle');
    const dropdownItem = dropdownToggle ? dropdownToggle.parentElement : null;

    // --- 1. Smooth scrolling for navigation links ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');

            // Ignora links que são apenas # (como o dropdown-toggle)
            if (targetId === '#') {
                e.preventDefault();
                return;
            }

            e.preventDefault();

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Ajusta o scroll para a posição do elemento, compensando a altura do header fixo (80px)
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });

                // Fecha o menu mobile (se aberto) ao clicar em um link
                if (navLinks && navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                }
            }
        });
    });

    // --- 2. Form submission handling (Exemplo) ---
    document.getElementById('contactForm')?.addEventListener('submit', function(e) {
        e.preventDefault();

        // Em um projeto real, você enviaria os dados aqui (usando Fetch/XMLHttpRequest)
        alert('Obrigado por entrar em contato! Em breve retornaremos sua mensagem.');
        this.reset();
    });

    // --- 3. Mobile menu toggle (Hamburguer) ---
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', function() {
            // Alterna a classe 'active' para mostrar/esconder o menu mobile
            navLinks.classList.toggle('active');
            
            // Garante que o dropdown seja fechado ao abrir/fechar o menu principal
            if (dropdownItem && dropdownItem.classList.contains('active')) {
                dropdownItem.classList.remove('active');
            }
        });
    }

    // Adiciona evento para fechar o menu mobile ao clicar fora dele
    document.addEventListener('click', function(e) {
        if (navLinks && navLinks.classList.contains('active') && 
            !navLinks.contains(e.target) && !menuToggle.contains(e.target)) {
            
            navLinks.classList.remove('active');
        }
    });


    // --- 4. Dropdown behavior ---
    if (dropdownToggle) {
        // Ação de clique no item 'Estratégia'
        dropdownToggle.addEventListener('click', function(e) {
            e.preventDefault();
            if (dropdownItem) {
                // Adiciona a classe 'active' para mostrar o menu
                dropdownItem.classList.toggle('active');
            }
        });

        // Adiciona um listener para fechar o dropdown ao clicar em um link DENTRO dele
        const dropdownLinks = dropdownItem ? dropdownItem.querySelectorAll('.dropdown-menu a') : [];
        dropdownLinks.forEach(link => {
            link.addEventListener('click', function() {
                if (dropdownItem) {
                    dropdownItem.classList.remove('active'); // Fecha o dropdown
                    
                    // Fecha o menu principal se o site estiver em modo mobile
                    if (navLinks && navLinks.classList.contains('active')) {
                        navLinks.classList.remove('active');
                    }
                }
            });
        });
        
        // Fechar o menu dropdown quando clicar fora dele
        document.addEventListener('click', function(e) {
            const isClickInside = dropdownItem && dropdownItem.contains(e.target);
            const isClickOnToggle = dropdownToggle && dropdownToggle.contains(e.target);
            
            if (!isClickInside && !isClickOnToggle && dropdownItem && dropdownItem.classList.contains('active')) {
                dropdownItem.classList.remove('active');
            }
        });
    }
});