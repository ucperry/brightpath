// ========================================
// BRIGHTPATH DEV - HAILE METHODOLOGY
// Interactive Website JavaScript
// ========================================

// HAILE Demo Steps Data - Updated for 4-Phase Process
const demoSteps = {
    1: {
        title: "Phase 1: Rapid MVP Creation",
        description: "Build core workflow in 1-2 weeks. Focus on main business process. Make it production-ready and demonstrable. Cost: $2,500-5,000 range.",
        code: "rapid_mvp_creation(core_workflow, 1-2_weeks, $2500_range)"
    },
    2: {
        title: "Phase 2: Live Usage & Customer Discovery", 
        description: "Customer uses actual working system in real business operations for 1-2 weeks. Real business scenarios tested. Enhancement opportunities emerge naturally.",
        code: "customer_discovery(working_system, real_usage, organic_requirements)"
    },
    3: {
        title: "Phase 3: Post-MVP Charter Development",
        description: "Create specific enhancement roadmap based on actual usage. Customer requests based on real business value. Clear timeline and cost projections.",
        code: "post_mvp_charter(evidence_based_planning, customer_requests, realistic_projections)"
    },
    4: {
        title: "Phase 4: Customer-Driven Enhancement", 
        description: "Implement customer-requested enhancements based on demonstrated value. Timeline: 2-4 weeks per phase. Investment: $3,000-8,000 per phase typically.",
        code: "customer_driven_enhancement(proven_roi, organic_evolution, measured_value)"
    }
};

// ========================================
// NAVIGATION FUNCTIONS
// ========================================

// Smooth scroll to section
function scrollToSection(sectionId) {
    try {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            return false; // Prevent default link behavior
        } else {
            console.error('Section not found:', sectionId);
            return true; // Allow default behavior as fallback
        }
    } catch (error) {
        console.error('Error scrolling to section:', error);
        return true; // Allow default behavior as fallback
    }
}

// Scroll to top
function scrollToTop() {
    try {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    } catch (error) {
        console.error('Error scrolling to top:', error);
    }
}

// Navigation scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (navbar) {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }
});

// ========================================
// HAILE INTERACTIVE DEMO FUNCTIONS
// ========================================

// Show HAILE demo step
function showDemoStep(stepNumber, buttonElement) {
    try {
        // Remove active class from all buttons
        document.querySelectorAll('.demo-button').forEach(btn => {
            btn.classList.remove('active');
        });
        
        // Add active class to clicked button
        if (buttonElement) {
            buttonElement.classList.add('active');
        }
        
        // Update demo content
        const step = demoSteps[stepNumber];
        const demoContent = document.getElementById('demo-content');
        
        if (step && demoContent) {
            demoContent.innerHTML = `
                <div>
                    <h3>${step.title}</h3>
                    <p>${step.description}</p>
                    <br>
                    <code style="color: #6B8E23;">${step.code}</code>
                </div>
            `;
            
            // Add animation
            demoContent.style.opacity = '0';
            setTimeout(() => {
                demoContent.style.opacity = '1';
            }, 100);
        }
    } catch (error) {
        console.error('Error in showDemoStep:', error);
    }
}

// Highlight flow step
function highlightStep(stepElement) {
    try {
        // Remove highlight from all steps
        document.querySelectorAll('.flow-step').forEach(step => {
            step.style.transform = 'translateY(0px)';
            step.style.borderColor = 'rgba(255, 224, 102, 0.2)';
        });
        
        // Highlight clicked step
        if (stepElement) {
            stepElement.style.transform = 'translateY(-10px)';
            stepElement.style.borderColor = '#FFE066';
            
            // Reset after 2 seconds
            setTimeout(() => {
                stepElement.style.transform = 'translateY(0px)';
                stepElement.style.borderColor = 'rgba(255, 224, 102, 0.2)';
            }, 2000);
        }
    } catch (error) {
        console.error('Error in highlightStep:', error);
    }
}

// ========================================
// CUSTOMER FIRST COMPARISON FUNCTIONS
// ========================================

// Animate comparison card
function animateCard(cardElement) {
    try {
        if (cardElement) {
            cardElement.style.transform = 'translateY(-10px) scale(1.02)';
            
            setTimeout(() => {
                cardElement.style.transform = 'translateY(0px) scale(1)';
            }, 300);
        }
    } catch (error) {
        console.error('Error in animateCard:', error);
    }
}

// Set active list item and update outcome box
function setActiveAndUpdateOutcome(listItem, outcomeId, content) {
    try {
        // Remove active class from all list items in the same card
        const parentCard = listItem.closest('.comparison-card');
        if (parentCard) {
            parentCard.querySelectorAll('.feature-list li').forEach(item => {
                item.classList.remove('active');
            });
        }
        
        // Add active class to clicked item
        listItem.classList.add('active');
        
        // Update outcome box
        const outcomeBox = document.getElementById(outcomeId);
        if (outcomeBox) {
            outcomeBox.innerHTML = content;
        }
    } catch (error) {
        console.error('Error in setActiveAndUpdateOutcome:', error);
    }
}

// ========================================
// RESULTS SECTION FUNCTIONS
// ========================================

// Reveal HAILE metric with counting animation
function revealMetric(cardElement, targetNumber, label, description) {
    try {
        // Prevent multiple clicks on same card
        if (cardElement.classList.contains('revealed')) {
            return;
        }
        
        cardElement.classList.add('revealed');
        
        // Update card content
        cardElement.innerHTML = `
            <div class="metric-number">0%</div>
            <div class="metric-label">${label}</div>
            <p class="metric-description">${description}</p>
        `;
        
        // Animate number counting
        const numberElement = cardElement.querySelector('.metric-number');
        if (numberElement) {
            let currentNumber = 0;
            const increment = targetNumber / 50;
            
            const countAnimation = setInterval(() => {
                currentNumber += increment;
                if (currentNumber >= targetNumber) {
                    numberElement.textContent = targetNumber + '%';
                    clearInterval(countAnimation);
                } else {
                    numberElement.textContent = Math.floor(currentNumber) + '%';
                }
            }, 30);
        }
        
        // Add scale animation
        cardElement.style.transform = 'scale(1.05)';
        setTimeout(() => {
            cardElement.style.transform = 'scale(1)';
        }, 300);
        
    } catch (error) {
        console.error('Error in revealMetric:', error);
    }
}

// ========================================
// CONTACT FUNCTIONS
// ========================================

// Configuration - Replace with your Google Apps Script Web App URL
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwkB4OAXOWp5Y7IkcVoJFmE8BM8eYRGSBpVFWRkFbBwc8Nhed-dv-r5ACgBsuJmfCWN/exec';

// Initialize contact form
function initializeContactForm() {
    const form = document.getElementById('brightpath-contact-form');
    
    if (form) {
        form.addEventListener('submit', handleContactFormSubmit);
    }
}

// Handle contact form submission
async function handleContactFormSubmit(event) {
    event.preventDefault();
    
    const form = event.target;
    const submitBtn = document.getElementById('contact-submit');
    const messageDiv = document.getElementById('form-message');
    
    // Show loading state
    submitBtn.classList.add('loading');
    submitBtn.disabled = true;
    hideMessage();
    
    try {
        // Collect form data
        const formData = {
            name: form.name.value.trim(),
            email: form.email.value.trim(),
            company: form.company.value.trim(),
            phone: form.phone.value.trim(),
            projectType: form.projectType.value,
            message: form.message.value.trim()
        };
        
        // Validate required fields
        if (!formData.name || !formData.email || !formData.message) {
            throw new Error('Please fill in all required fields.');
        }
        
        // Validate email format
        if (!isValidEmail(formData.email)) {
            throw new Error('Please enter a valid email address.');
        }
        
        // Submit to Google Apps Script
        const response = await fetch(GOOGLE_SCRIPT_URL, {
            method: 'POST',
            mode: 'no-cors', // Required for Google Apps Script
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        });
        
        // Since we're using no-cors, we can't read the response
        // So we'll assume success if no error was thrown
        showMessage('Thank you for choosing HAILE! We\'ll be in touch within 24 hours to discuss your MVP discovery consultation.', 'success');
        form.reset();
        
        // Track conversion (if you use analytics)
        trackContactFormSubmission(formData);
        
    } catch (error) {
        console.error('Contact form error:', error);
        showMessage(error.message || 'Sorry, there was an error sending your message. Please try again or contact us directly.', 'error');
    } finally {
        // Reset button state
        submitBtn.classList.remove('loading');
        submitBtn.disabled = false;
    }
}

// Validate email format
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Show form message
function showMessage(message, type) {
    const messageDiv = document.getElementById('form-message');
    if (messageDiv) {
        messageDiv.textContent = message;
        messageDiv.className = `form-message ${type}`;
        messageDiv.style.display = 'block';
        
        // Scroll message into view
        messageDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
}

// Hide form message
function hideMessage() {
    const messageDiv = document.getElementById('form-message');
    if (messageDiv) {
        messageDiv.style.display = 'none';
        messageDiv.className = 'form-message';
    }
}

// Track form submission for analytics (optional)
function trackContactFormSubmission(formData) {
    try {
        // Google Analytics 4 (if you have it)
        if (typeof gtag !== 'undefined') {
            gtag('event', 'haile_contact_form_submit', {
                event_category: 'HAILE Contact',
                event_label: formData.projectType || 'Unknown',
                value: 1
            });
        }
        
        // Facebook Pixel (if you have it)
        if (typeof fbq !== 'undefined') {
            fbq('track', 'Contact', {
                content_category: 'HAILE Methodology'
            });
        }
        
    } catch (error) {
        console.log('Analytics tracking error:', error);
        // Don't throw - form submission should still succeed
    }
}

// Show contact form and scroll to it
function showContactForm() {
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
        
        // Focus on the first input after scrolling
        setTimeout(() => {
            const firstInput = document.getElementById('contact-name');
            if (firstInput) {
                firstInput.focus();
            }
        }, 1000);
    } else {
        // Fallback - scroll to the section even if ID is different
        scrollToSection('start-mvp');
    }
}

// ========================================
// SCROLL-TRIGGERED ANIMATIONS
// ========================================

// Check if element is in viewport
function isElementInViewport(el) {
    try {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    } catch (error) {
        console.error('Error in isElementInViewport:', error);
        return false;
    }
}

// Animate elements on scroll
function animateOnScroll() {
    try {
        const animatedElements = document.querySelectorAll('.flow-step, .comparison-card, .metric-card, .architecture-card, .enabler-card, .charter-approach');
        
        animatedElements.forEach(element => {
            if (isElementInViewport(element)) {
                element.style.animation = 'fadeInUp 0.6s ease-out forwards';
            }
        });
    } catch (error) {
        console.error('Error in animateOnScroll:', error);
    }
}

// ========================================
// HAILE SPECIFIC INTERACTIONS
// ========================================

// Add special interaction for Economic Enabler cards
function initializeEconomicEnablerInteractions() {
    try {
        const enablerCards = document.querySelectorAll('.enabler-card');
        enablerCards.forEach(card => {
            card.addEventListener('click', function() {
                // Highlight the clicked card
                enablerCards.forEach(c => c.style.transform = 'scale(1)');
                this.style.transform = 'scale(1.05)';
                
                // Reset after animation
                setTimeout(() => {
                    this.style.transform = 'scale(1)';
                }, 300);
            });
        });
    } catch (error) {
        console.error('Error initializing economic enabler interactions:', error);
    }
}

// Add interaction for charter comparison
function initializeCharterInteractions() {
    try {
        const charterApproaches = document.querySelectorAll('.charter-approach');
        charterApproaches.forEach(approach => {
            approach.addEventListener('click', function() {
                // Highlight the approach
                charterApproaches.forEach(a => {
                    a.style.transform = 'scale(1)';
                    a.style.borderWidth = '2px';
                });
                
                this.style.transform = 'scale(1.02)';
                this.style.borderWidth = '3px';
                
                // Reset after animation
                setTimeout(() => {
                    this.style.transform = 'scale(1)';
                    this.style.borderWidth = '2px';
                }, 1000);
            });
        });
    } catch (error) {
        console.error('Error initializing charter interactions:', error);
    }
}

// ========================================
// INITIALIZATION
// ========================================

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    try {
        // Initialize HAILE demo with first phase
        const firstButton = document.querySelector('.demo-button');
        if (firstButton) {
            showDemoStep(1, firstButton);
        }
        
        // Initialize contact form
        initializeContactForm();
        
        // Initialize HAILE-specific interactions
        initializeEconomicEnablerInteractions();
        initializeCharterInteractions();
        
        // Trigger initial animation check
        animateOnScroll();
        
        console.log('BrightPath HAILE Methodology site initialized successfully');
    } catch (error) {
        console.error('Error during initialization:', error);
    }
});

// Add scroll listener for animations
window.addEventListener('scroll', animateOnScroll);

// ========================================
// UTILITY FUNCTIONS
// ========================================

// Debounce function for performance
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Add debounced scroll listener
window.addEventListener('scroll', debounce(animateOnScroll, 100));

// ========================================
// ERROR HANDLING
// ========================================

// Global error handler
window.addEventListener('error', function(e) {
    console.error('Global error caught:', e.error);
});

// Unhandled promise rejection handler
window.addEventListener('unhandledrejection', function(e) {
    console.error('Unhandled promise rejection:', e.reason);
});

// ========================================
// HAILE METHODOLOGY ENHANCEMENTS
// ========================================

// Add smooth transitions for all HAILE interactions
function addHaileTransitions() {
    try {
        // Add transition classes to key elements
        const transitionElements = document.querySelectorAll(
            '.flow-step, .comparison-card, .metric-card, .enabler-card, .charter-approach, .architecture-card'
        );
        
        transitionElements.forEach(element => {
            element.style.transition = 'all 0.3s ease';
        });
    } catch (error) {
        console.error('Error adding HAILE transitions:', error);
    }
}

// Initialize HAILE enhancements after DOM load
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(addHaileTransitions, 500); // Slight delay to ensure all elements are loaded
});