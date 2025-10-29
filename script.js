// Dropdown menu functionality
document.addEventListener('DOMContentLoaded', function() {
    const dropdown = document.querySelector('.dropdown');
    const dropdownBtn = document.querySelector('.dropdown-btn');
    
    // Toggle dropdown on click
    if (dropdownBtn) {
        dropdownBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            dropdown.classList.toggle('active');
        });
    }
    
    // Close dropdown when clicking outside
    document.addEventListener('click', function(e) {
        if (dropdown && !dropdown.contains(e.target)) {
            dropdown.classList.remove('active');
        }
    });
    
    // Close dropdown after clicking a link
    const dropdownLinks = document.querySelectorAll('.dropdown-content a');
    dropdownLinks.forEach(link => {
        link.addEventListener('click', function() {
            dropdown.classList.remove('active');
        });
    });
    
    // Optional: Hover functionality for desktop
    if (window.innerWidth > 768 && dropdown) {
        dropdown.addEventListener('mouseenter', function() {
            dropdown.classList.add('active');
        });
        
        dropdown.addEventListener('mouseleave', function() {
            dropdown.classList.remove('active');
        });
    }

    // Scroll reveal animation for film items
    const filmItems = document.querySelectorAll('.film-item');
    
    if (filmItems.length > 0) {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver(function(entries) {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    // Add delay based on index for staggered effect
                    setTimeout(() => {
                        entry.target.classList.add('reveal');
                    }, index * 100);
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        filmItems.forEach(item => {
            observer.observe(item);
        });
    }
});
