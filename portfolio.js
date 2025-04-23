// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetSection.offsetTop - 80, // Adjust for fixed header
                behavior: 'smooth'
            });
        });
    });
    
    // Form submission handling
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = this.querySelector('input[type="text"]').value;
            const email = this.querySelector('input[type="email"]').value;
            const message = this.querySelector('textarea').value;
            
            // Simple validation
            if (!name || !email || !message) {
                alert('Please fill in all fields');
                return;
            }
            
            // Here you would typically send the form data to a server
            // For now, we'll just show a success message
            alert('Thank you for your message! I will get back to you soon.');
            this.reset();
        });
    }
    
    // Add animation on scroll
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.education-card, .skill-card, .project-card, .experience-card');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 100) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };
    
    // Set initial styles for animation
    const elementsToAnimate = document.querySelectorAll('.education-card, .skill-card, .project-card, .experience-card');
    elementsToAnimate.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    // Run animation on scroll
    window.addEventListener('scroll', animateOnScroll);
    // Run once on page load
    animateOnScroll();
    
    // Mobile navigation toggle
    const createMobileNav = function() {
        const nav = document.querySelector('nav');
        const navLinks = document.querySelector('.nav-links');
        
        // Create hamburger menu button
        const hamburger = document.createElement('div');
        hamburger.className = 'hamburger';
        hamburger.innerHTML = '<span></span><span></span><span></span>';
        
        // Add hamburger to nav
        nav.insertBefore(hamburger, navLinks);
        
        // Toggle mobile menu
        hamburger.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
        
        // Close mobile menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!nav.contains(e.target) && navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                hamburger.classList.remove('active');
            }
        });
    };
    
    // Only create mobile nav if screen width is small
    if (window.innerWidth <= 768) {
        createMobileNav();
    }
    
    // Update mobile nav on window resize
    window.addEventListener('resize', function() {
        if (window.innerWidth <= 768 && !document.querySelector('.hamburger')) {
            createMobileNav();
        }
    });
    
    // Add typing effect to hero section
    const addTypingEffect = function() {
        const heroTitle = document.querySelector('.hero h1');
        const heroSubtitle = document.querySelector('.hero p');
        
        if (heroTitle && heroSubtitle) {
            const titleText = heroTitle.textContent;
            const subtitleText = heroSubtitle.textContent;
            
            heroTitle.textContent = '';
            heroSubtitle.textContent = '';
            
            let titleIndex = 0;
            let subtitleIndex = 0;
            
            const typeTitle = function() {
                if (titleIndex < titleText.length) {
                    heroTitle.textContent += titleText.charAt(titleIndex);
                    titleIndex++;
                    setTimeout(typeTitle, 100);
                } else {
                    setTimeout(typeSubtitle, 500);
                }
            };
            
            const typeSubtitle = function() {
                if (subtitleIndex < subtitleText.length) {
                    heroSubtitle.textContent += subtitleText.charAt(subtitleIndex);
                    subtitleIndex++;
                    setTimeout(typeSubtitle, 50);
                }
            };
            
            setTimeout(typeTitle, 500);
        }
    };
    
    // Run typing effect
    addTypingEffect();
}); 