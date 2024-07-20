<script>
    // Smooth scrolling for navigation links
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            document.getElementById(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Scroll to top button
    const scrollToTopBtn = document.createElement('button');
    scrollToTopBtn.innerText = '↑';
    scrollToTopBtn.style.position = 'fixed';
    scrollToTopBtn.style.bottom = '20px';
    scrollToTopBtn.style.right = '20px';
    scrollToTopBtn.style.padding = '10px 15px';
    scrollToTopBtn.style.border = 'none';
    scrollToTopBtn.style.borderRadius = '5px';
    scrollToTopBtn.style.backgroundColor = '#333';
    scrollToTopBtn.style.color = '#fff';
    scrollToTopBtn.style.cursor = 'pointer';
    scrollToTopBtn.style.display = 'none';
    document.body.appendChild(scrollToTopBtn);

    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Show/hide scroll to top button
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollToTopBtn.style.display = 'block';
        } else {
            scrollToTopBtn.style.display = 'none';
        }
    });

    // Initialize AOS (Animate on Scroll)
    AOS.init();
</script>
