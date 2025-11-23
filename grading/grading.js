// Horizontal Before/After Slider Functionality
document.addEventListener('DOMContentLoaded', function() {
    const sliders = document.querySelectorAll('.before-after-wrapper');
    
    sliders.forEach(wrapper => {
        const sliderControl = wrapper.querySelector('.slider-control');
        const beforeContainer = wrapper.querySelector('.before-container');
        const divider = wrapper.querySelector('.slider-divider');
        
        if (!sliderControl || !beforeContainer || !divider) return;
        
        // Set initial position - start with LOG fully visible (0%)
        function updateSlider(value) {
            const percentage = value + '%';
            beforeContainer.style.width = percentage;
            divider.style.left = percentage;
            sliderControl.value = value;
        }
        
        // Handle input (drag)
        sliderControl.addEventListener('input', function() {
            updateSlider(this.value);
        });
        
        // Handle mouse click on wrapper
        wrapper.addEventListener('click', function(e) {
            if (e.target === sliderControl || e.target === divider || e.target.closest('.slider-divider')) return;
            
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const percentage = (x / rect.width) * 100;
            const clampedValue = Math.max(0, Math.min(100, percentage));
            updateSlider(clampedValue);
        });
        
        // Handle mouse drag
        let isDragging = false;
        
        divider.addEventListener('mousedown', function(e) {
            isDragging = true;
            e.preventDefault();
        });
        
        document.addEventListener('mousemove', function(e) {
            if (!isDragging) return;
            
            const rect = wrapper.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const percentage = (x / rect.width) * 100;
            const clampedValue = Math.max(0, Math.min(100, percentage));
            updateSlider(clampedValue);
        });
        
        document.addEventListener('mouseup', function() {
            isDragging = false;
        });
        
        // Touch support for mobile swipe
        divider.addEventListener('touchstart', function(e) {
            isDragging = true;
            e.preventDefault();
        });
        
        wrapper.addEventListener('touchmove', function(e) {
            if (!isDragging) return;
            
            const rect = this.getBoundingClientRect();
            const touch = e.touches[0];
            const x = touch.clientX - rect.left;
            const percentage = (x / rect.width) * 100;
            const clampedValue = Math.max(0, Math.min(100, percentage));
            updateSlider(clampedValue);
            e.preventDefault();
        });
        
        document.addEventListener('touchend', function() {
            isDragging = false;
        });
        
        // Initialize at 0% (LOG fully visible)
        updateSlider(0);
    });
});
