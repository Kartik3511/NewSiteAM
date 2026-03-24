// ============================================
// Smooth Scroll
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href !== '#subscribe') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// ============================================
// Navigation Active State
// ============================================
function setActiveNav() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        const linkPage = link.getAttribute('href');
        if (linkPage === currentPage || (currentPage === '' && linkPage === 'index.html')) {
            link.classList.add('active');
        }
    });
}

// ============================================
// Scroll Header Effect
// ============================================
let lastScroll = 0;
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    } else {
        header.style.boxShadow = 'none';
    }
    
    lastScroll = currentScroll;
});

// ============================================
// Image Lazy Loading Enhancement
// ============================================
if ('loading' in HTMLImageElement.prototype) {
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
        img.src = img.dataset.src || img.src;
    });
} else {
    // Fallback for browsers that don't support lazy loading
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
    document.body.appendChild(script);
}

// ============================================
// Fade In on Scroll Animation
// ============================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe category sections
document.querySelectorAll('.category-section, .work-item, .project-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// ============================================
// Mobile Menu Toggle (if needed)
// ============================================
function createMobileMenu() {
    if (window.innerWidth <= 768) {
        const nav = document.querySelector('.nav');
        const headerRight = document.querySelector('.header-right');
        
        if (!document.querySelector('.mobile-menu-btn')) {
            const menuBtn = document.createElement('button');
            menuBtn.className = 'mobile-menu-btn';
            menuBtn.innerHTML = '☰';
            menuBtn.style.cssText = `
                background: none;
                border: none;
                font-size: 24px;
                cursor: pointer;
                padding: 5px;
            `;
            
            headerRight.insertBefore(menuBtn, headerRight.firstChild);
            
            menuBtn.addEventListener('click', () => {
                nav.style.display = nav.style.display === 'block' ? 'none' : 'block';
                nav.style.position = 'absolute';
                nav.style.top = '100%';
                nav.style.left = '0';
                nav.style.right = '0';
                nav.style.background = 'white';
                nav.style.padding = '20px';
                nav.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
                
                const navList = nav.querySelector('.nav-list');
                navList.style.flexDirection = 'column';
                navList.style.gap = '20px';
            });
        }
    }
}

// ============================================
// Search Functionality (Basic)
// ============================================
const searchBtn = document.querySelector('.search-btn');
if (searchBtn) {
    searchBtn.addEventListener('click', () => {
        const searchTerm = prompt('Search:');
        if (searchTerm) {
            alert(`Search functionality coming soon! You searched for: ${searchTerm}`);
        }
    });
}

// ============================================
// Generate Placeholder Images
// ============================================
function createPlaceholderImage(width, height, text) {
    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext('2d');
    
    // Gradient background
    const gradient = ctx.createLinearGradient(0, 0, width, height);
    gradient.addColorStop(0, '#667eea');
    gradient.addColorStop(1, '#764ba2');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);
    
    // Text
    ctx.fillStyle = 'white';
    ctx.font = 'bold 24px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(text || `${width}x${height}`, width / 2, height / 2);
    
    return canvas.toDataURL();
}

// Replace missing images with placeholders
function handleMissingImages() {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('error', function() {
            const width = this.clientWidth || 800;
            const height = this.clientHeight || 600;
            const alt = this.alt || 'Image';
            this.src = createPlaceholderImage(width, height, alt);
        });
        
        // Set placeholder if src is empty
        if (!img.src || img.src.includes('undefined')) {
            const width = 800;
            const height = 600;
            const alt = img.alt || 'Placeholder';
            img.src = createPlaceholderImage(width, height, alt);
        }
    });
}

// ============================================
// Initialize
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    setActiveNav();
    createMobileMenu();
    handleMissingImages();
    
    // Add resize listener
    window.addEventListener('resize', () => {
        createMobileMenu();
    });
});

// ============================================
// Page Transition Effect
// ============================================
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});
