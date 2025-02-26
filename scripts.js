// scripts.js

document.addEventListener('DOMContentLoaded', function() {
    // Basic form submission handling (client-side only for demonstration)
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent default form submission

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            // Basic validation (you should enhance this)
            if (!name || !email || !message) {
                alert('Please fill in all fields.');
                return;
            }

            // Simulate form submission (replace with actual backend logic)
            console.log('Form submitted:');
            console.log('Name:', name);
            console.log('Email:', email);
            console.log('Message:', message);

            alert('Message sent successfully! (This is a simulation)');

            // Clear form fields after "submission"
            document.getElementById('name').value = '';
            document.getElementById('email').value = '';
            document.getElementById('message').value = '';
        });
    }

    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});
