// ========================================
// BRIGHTPATH DEV - HUMAN-AI METHODOLOGY
// Interactive Website JavaScript
// ========================================

// Demo Steps Data
const demoSteps = {
    1: {
        title: "Human Problem Definition",
        description: "Expert analysts identify core business challenges, define success metrics, and establish project scope boundaries using proven Agile practices.",
        code: "analyze_business_problem(requirements, constraints, success_criteria)"
    },
    2: {
        title: "Strategic Planning",
        description: "Human experts create development roadmaps, select optimal technology stacks, and design system architectures that solve specific problems.",
        code: "design_architecture(business_requirements, technical_constraints, scalability_needs)"
    },
    3: {
        title: "AI-Driven Implementation",
        description: "Advanced AI systems execute development tasks with precision, speed, and consistency while adhering to human-defined requirements.",
        code: "ai_development.implement(architecture, requirements, quality_standards)"
    },
    4: {
        title: "Continuous Validation",
        description: "Human oversight ensures each feature delivers measurable value, maintains scope control, and aligns with original business objectives.",
        code: "validate_features(business_value, scope_alignment, quality_metrics)"
    },
    5: {
        title: "Streamlined Delivery",
        description: "Efficient deployment processes and comprehensive documentation ensure smooth handoffs and long-term maintainability.",
        code: "deploy_solution(optimized_code, documentation, support_materials)"
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
// INTERACTIVE DEMO FUNCTIONS
// ========================================

// Show demo step
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
// COMPARISON SECTION FUNCTIONS
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

// Reveal metric with counting animation
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

// Show contact form (placeholder)
function showContactForm() {
    try {
        alert('Contact form integration would be implemented here. For now, please reach out via email or LinkedIn!');
    } catch (error) {
        console.error('Error in showContactForm:', error);
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
        const animatedElements = document.querySelectorAll('.flow-step, .comparison-card, .metric-card');
        
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
// INITIALIZATION
// ========================================

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    try {
        // Initialize demo with first step
        const firstButton = document.querySelector('.demo-button');
        if (firstButton) {
            showDemoStep(1, firstButton);
        }
        
        // Trigger initial animation check
        animateOnScroll();
        
        console.log('BrightPath Human-AI Methodology site initialized successfully');
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

// Add this to your script.js file

// ========================================
// CONTACT FORM FUNCTIONS
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
        showMessage('Thank you for your interest! We\'ll be in touch within 24 hours.', 'success');
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
            gtag('event', 'contact_form_submit', {
                event_category: 'Contact',
                event_label: formData.projectType || 'Unknown',
                value: 1
            });
        }
        
        // Facebook Pixel (if you have it)
        if (typeof fbq !== 'undefined') {
            fbq('track', 'Contact', {
                content_category: 'Human-AI Methodology'
            });
        }
        
    } catch (error) {
        console.log('Analytics tracking error:', error);
        // Don't throw - form submission should still succeed
    }
}

// Update the showContactForm function to scroll to the form
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
        // Fallback message if form section doesn't exist
        alert('Contact form is being set up. Please reach out via email for now!');
    }
}

// ========================================
// UPDATE INITIALIZATION
// ========================================

// Update the DOMContentLoaded event listener to include contact form initialization
document.addEventListener('DOMContentLoaded', function() {
    try {
        // Initialize demo with first step
        const firstButton = document.querySelector('.demo-button');
        if (firstButton) {
            showDemoStep(1, firstButton);
        }
        
        // Initialize contact form
        initializeContactForm();
        
        // Trigger initial animation check
        animateOnScroll();
        
        console.log('BrightPath Human-AI Methodology site initialized successfully');
    } catch (error) {
        console.error('Error during initialization:', error);
    }
});