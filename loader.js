// Page Loading Animation
document.addEventListener('DOMContentLoaded', function() {
    // Create loader HTML
    const loaderHTML = `
        <div class="loader-container">
            <div class="loader-content">
                <div class="loader-plant">
                    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                        <!-- Soil -->
                        <ellipse cx="50" cy="85" rx="35" ry="8" fill="#8B4513" opacity="0.8"/>
                        
                        <!-- Stem -->
                        <path d="M50 85 Q50 70 50 60" stroke="#228B22" stroke-width="3" fill="none" 
                              stroke-linecap="round" opacity="0.8"/>
                        
                        <!-- Leaves -->
                        <ellipse cx="45" cy="75" rx="8" ry="4" fill="#32CD32" transform="rotate(-15 45 75)"/>
                        <ellipse cx="55" cy="70" rx="6" ry="3" fill="#228B22" transform="rotate(20 55 70)"/>
                        <ellipse cx="42" cy="65" rx="7" ry="3.5" fill="#32CD32" transform="rotate(-25 42 65)"/>
                        
                        <!-- Flower/Bud -->
                        <circle cx="50" cy="55" r="6" fill="#FFD700"/>
                        <circle cx="47" cy="52" r="2" fill="#FFA500"/>
                        <circle cx="53" cy="52" r="2" fill="#FFA500"/>
                        <circle cx="50" cy="58" r="2" fill="#FFA500"/>
                        <circle cx="47" cy="58" r="2" fill="#FFA500"/>
                        <circle cx="53" cy="58" r="2" fill="#FFA500"/>
                    </svg>
                </div>
            </div>
        </div>
    `;
    
    // Insert loader at the beginning of body
    document.body.insertAdjacentHTML('afterbegin', loaderHTML);
    
    // Get the loader element
    const loader = document.querySelector('.loader-container');
    
    // Hide loader after animation completes
    setTimeout(() => {
        loader.classList.add('fade-out');
        
        // Remove loader completely after fade out
        setTimeout(() => {
            loader.classList.add('hidden');
        }, 500);
    }, 2000); // Total animation time: 2 seconds (reduced from 3)
});

// Optional: Show loader on page transitions (for future use)
function showLoader() {
    const loader = document.querySelector('.loader-container');
    if (loader) {
        loader.classList.remove('hidden', 'fade-out');
    }
} 