document.addEventListener('DOMContentLoaded', () => {

    // --- Terminal typing effect ---
    const command = 'cat about_me.txt';
    const typedEl = document.getElementById('heroTyped');
    const outputEl = document.getElementById('heroOutput');
    let i = 0;

    function typeChar() {
        if (i < command.length) {
            typedEl.textContent += command[i];
            i++;
            setTimeout(typeChar, 60 + Math.random() * 40);
        } else {
            setTimeout(() => {
                outputEl.classList.add('visible');
            }, 300);
        }
    }

    setTimeout(typeChar, 800);

    // --- Dynamic footer year ---
    document.getElementById('year').textContent = new Date().getFullYear();

    // --- Mobile nav toggle ---
    const toggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');

    toggle.addEventListener('click', () => {
        navLinks.classList.toggle('open');
    });

    // Close nav on link click
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('open');
        });
    });

    // --- Scroll fade-in animations ---
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Add fade-in class to animatable elements
    const animatables = document.querySelectorAll(
        '.skill-card, .timeline-item, .project-card, .education-card'
    );

    animatables.forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
});
