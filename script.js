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

    // Premium scroll reveal animation for film items
    const filmItems = document.querySelectorAll('.film-item');
    
    if (filmItems.length > 0) {
        const observerOptions = {
            threshold: 0.2,
            rootMargin: '0px 0px -100px 0px'
        };

        const observer = new IntersectionObserver(function(entries) {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    // Smooth reveal - each item reveals as it comes into view
                    entry.target.classList.add('reveal');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        filmItems.forEach((item, index) => {
            // Add slight initial delay based on position for natural stagger
            item.style.transitionDelay = `${index * 0.05}s`;
            observer.observe(item);
        });
    }

    // Premium scroll reveal animation for photo items
    const photoItems = document.querySelectorAll('.photo-item');
    
    if (photoItems.length > 0) {
        const photoObserverOptions = {
            threshold: 0.2,
            rootMargin: '0px 0px -120px 0px'
        };

        const photoObserver = new IntersectionObserver(function(entries) {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('reveal');
                    photoObserver.unobserve(entry.target);
                }
            });
        }, photoObserverOptions);

        photoItems.forEach((item, index) => {
            // Stagger photo reveals for smooth effect
            item.style.transitionDelay = `${index * 0.06}s`;
            photoObserver.observe(item);
        });
    }
});
