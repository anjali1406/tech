// Add event listeners to navigation links
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            targetElement.scrollIntoView({ behavior: 'smooth' });
        });
    });
});

// Add functionality to the contact form
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // You can add code here to send the form data to a server or email it
    console.log('Form submitted:', name, email, message);
});

// Add a simple animation to the hero section
const heroSection = document.getElementById('hero');
heroSection.style.opacity = 0;
window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    const heroSectionTop = heroSection.offsetTop;
    if (scrollPosition > heroSectionTop - 500) {
        heroSection.style.opacity = 1;
        heroSection.style.transition = 'opacity 1s';
    }
});