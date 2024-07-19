// Initialize AOS (Animate on Scroll)
AOS.init();

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form submission handling
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    // Here you would typically send the form data to a server
    // For this example, we'll just log it to the console
    console.log('Form submitted!');
    this.reset();
    alert('Thank you for your message!');
});

// Add more interactivity as needed
