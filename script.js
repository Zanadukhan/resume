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

    // --- Contact form (Formspree) ---
    const contactForm = document.getElementById('contactForm');
    const contactStatus = document.getElementById('contactStatus');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const submitBtn = contactForm.querySelector('.contact-submit');
        submitBtn.disabled = true;
        submitBtn.textContent = 'Sending...';
        contactStatus.textContent = '';
        contactStatus.className = 'contact-note';

        fetch(contactForm.action, {
            method: 'POST',
            body: new FormData(contactForm),
            headers: { 'Accept': 'application/json' }
        }).then(res => {
            if (res.ok) {
                contactStatus.textContent = 'Message sent successfully!';
                contactStatus.classList.add('success');
                contactForm.reset();
            } else {
                contactStatus.textContent = 'Something went wrong. Please try again.';
                contactStatus.classList.add('error');
            }
        }).catch(() => {
            contactStatus.textContent = 'Something went wrong. Please try again.';
            contactStatus.classList.add('error');
        }).finally(() => {
            submitBtn.disabled = false;
            submitBtn.innerHTML = '<span class="prompt">$</span> send_message';
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
        '.skill-card, .timeline-item, .project-card, .education-card, .contact-form'
    );

    animatables.forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
});
