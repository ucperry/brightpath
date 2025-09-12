// ========================================
// BRIGHTPATH CH(Ai)SE - COMPLETE JAVASCRIPT
// Brand-Aligned Interactive Functionality
// ========================================

// Principle Details Data - Enhanced with brand messaging
const principleDetails = {
    1: {
        title: "Customer-Driven Clarity",
        description: "Working software reveals true requirements better than planning documents. Customers understand their needs only after experiencing functional systems in their actual business context.",
        problem: "Traditional requirement gathering fails because small businesses can't articulate technical needs without seeing systems in action. Planning documents create false confidence in speculative requirements.",
        solution: "CH(Ai)SE™ starts with rapid MVP development that lets customers experience their solution immediately, revealing actual requirements through real usage patterns and workflow discovery.",
        example: "Hair By Rhiannon couldn't specify email automation needs until she used the booking system for one week and realized exactly what operational gaps needed filling - 6-step automation emerged from usage, not planning.",
        brandValue: "This is why MBP > MVP - the Methodology ensures customer-driven evolution is systematic, not chaotic."
    },
    2: {
        title: "Evidence-First Progress",
        description: "Every development session produces both working code and documented decisions. Progress is measured by demonstrable value, not completed tasks or time spent.",
        problem: "Traditional project tracking focuses on task completion rather than value delivery, leading to 'busy work' without business impact. Teams report progress without proving value.",
        solution: "CH(Ai)SE™ requires evidence of value in every development cycle - working features, documented decisions, and measurable business outcomes. The Playbook captures plan-vs-actual with full traceability.",
        example: "Each Hair By Rhiannon development session produced functional features AND documented why each choice was made, creating complete lineage from methodology principles to implementation details.",
        brandValue: "Bi-directional lineage means every work item traces back to its business rationale - no guesswork, no rework."
    },
    3: {
        title: "Incremental Investment",
        description: "Small initial commitments enable scope evolution without financial risk. Enhancement decisions are made based on proven value rather than speculative planning.",
        problem: "Large upfront investments create project paralysis and scope change anxiety. Traditional contracts make evolution expensive, forcing customers to guess their future needs perfectly.",
        solution: "CH(Ai)SE™ enables small MVP investments ($2,500-15,000) that prove value before larger commitments, making scope evolution financially manageable and strategically advantageous.",
        example: "Hair By Rhiannon's 300% scope increase became manageable $3K-5K phases instead of $15K-30K traditional budget overruns. Each enhancement was justified by proven ROI.",
        brandValue: "This transforms scope evolution from a risk into a competitive advantage - the core CH(Ai)SE™ promise."
    },
    4: {
        title: "Human-AI Synergy",
        description: "AI accelerates development velocity while humans provide strategic judgment, business context, and final accountability. Technology serves human decision-making, not the reverse.",
        problem: "Pure AI development lacks business context and strategic judgment. Pure human development is too slow and expensive for competitive markets. Most approaches force an either/or choice.",
        solution: "CH(Ai)SE™ combines human strategic oversight with AI implementation acceleration, ensuring both speed and business alignment. Humans govern, AI executes, synergy delivers.",
        example: "Human experts defined Hair By Rhiannon's business workflow and strategic priorities while AI accelerated the technical implementation, delivering in 8 days instead of 16 weeks.",
        brandValue: "This is the 'Collaborative' in CH(Ai)SE™ - not replacing humans with AI, but amplifying human judgment with AI speed."
    },
    5: {
        title: "Organic Evolution",
        description: "Requirements emerge from system usage, not upfront speculation. The most successful projects adapt based on customer discovery through working software interaction.",
        problem: "Fixed-scope projects deliver planned features instead of needed solutions, often missing the mark on actual business value. Requirements lock-in prevents beneficial adaptation.",
        solution: "CH(Ai)SE™ treats scope evolution as competitive advantage, systematically capturing and implementing insights from actual usage through the organic charter development process.",
        example: "Hair By Rhiannon's organic charter revealed specific automation needs that no planning session could have predicted - real workflow usage exposed the actual pain points and opportunities.",
        brandValue: "Organic evolution is only possible with strong MBP foundation - Methodology governs change, Blueprint ensures compatibility, Playbook maintains traceability."
    }
};

// Pillar Details Data - Enhanced with MBP messaging
const pillarDetails = {
    methodology: {
        title: "Methodology (M)",
        subtitle: "Governance Principles - The 'Why' Foundation",
        description: "Establishes the foundational principles that govern how value is judged, risk is managed, and decisions are made. The Methodology provides the philosophical framework that ensures every downstream decision aligns with CH(Ai)SE™ core values.",
        keyPoints: [
            "Five revolutionary principles addressing traditional project failures",
            "Human-AI collaboration protocols with clear accountability structures",
            "Organic project evolution model eliminating scope change anxiety",
            "Ethical AI integration framework maintaining human oversight",
            "Economic model transforming project risk into customer confidence"
        ],
        businessImpact: "Methodology fundamentally changes how customers think about software projects - from fixed-scope risks to value-driven partnerships where evolution becomes advantage.",
        lineage: "Top-down: M governs all Blueprint decisions and Playbook executions. Bottom-up: Every work item must trace back to a Methodology principle."
    },
    blueprint: {
        title: "Blueprint (B)",
        subtitle: "Architecture & Standards - The 'How' Framework",
        description: "Translates Methodology principles into concrete technical architecture, patterns, and implementation standards. The Blueprint ensures that every component, integration, and technical decision is traceable to governance principles.",
        keyPoints: [
            "Frontend & database architecture blueprints for rapid deployment",
            "Security & authentication standards with built-in compliance",
            "Monitoring & maintenance protocols for operational excellence", 
            "Scalable patterns that grow with business needs without rework",
            "Evidence capture systems supporting methodology transparency"
        ],
        businessImpact: "Blueprint eliminates technical risk while enabling rapid value delivery through proven, repeatable patterns that maintain consistency across all implementations.",
        lineage: "Top-down: B implements M principles in technical decisions. Bottom-up: Every architecture choice links back to its governing principle and business rationale."
    },
    playbook: {
        title: "Playbook (P)", 
        subtitle: "Execution & Traceability - The 'What Actually Happened' Record",
        description: "Documents the complete execution story with Plan vs. Actual vs. Why transparency. The Playbook creates unprecedented project visibility and captures lessons that continuously improve the methodology.",
        keyPoints: [
            "Complete Plan vs. Actual documentation for every project phase",
            "Evidence-based progress tracking with real artifacts and outcomes",
            "Change log with business rationale for every deviation or pivot",
            "Lessons learned integration feeding back into Methodology and Blueprint",
            "Full bi-directional traceability from principles to implementation details"
        ],
        businessImpact: "Playbook provides customers complete transparency while creating continuous improvement loops that enhance methodology effectiveness with each implementation.",
        lineage: "Top-down: P documents how M and B were actually executed. Bottom-up: Every task links to Blueprint decisions and Methodology principles with full rationale."
    }
};

// ========================================
// CORE NAVIGATION & SCROLL FUNCTIONS
// ========================================

// Smooth scroll to section with navbar offset
function scrollToSection(sectionId) {
    try {
        const element = document.getElementById(sectionId);
        if (element) {
            const navHeight = document.getElementById('navbar').offsetHeight;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - navHeight - 20;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
            
            return false;
        } else {
            console.error('Section not found:', sectionId);
            return true;
        }
    } catch (error) {
        console.error('Error scrolling to section:', error);
        return true;
    }
}

// Scroll to top with smooth animation
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

// Navigation scroll effect and active section highlighting
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    
    // Navbar scroll effect
    if (navbar) {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }
});

// ========================================
// MOBILE NAVIGATION - WORKING VERSION
// ========================================

// Initialize mobile navigation
document.addEventListener('DOMContentLoaded', function() {
    const mobileToggle = document.getElementById('mobile-toggle');
    const navMenu = document.getElementById('nav-menu');
    
    if (mobileToggle && navMenu) {
        console.log('Mobile nav elements found - setting up...');
        
        mobileToggle.addEventListener('click', function() {
            console.log('Mobile button clicked!');
            mobileToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
            console.log('Menu state:', navMenu.classList.contains('active') ? 'OPEN' : 'CLOSED');
        });
        
        // Close menu when clicking links
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                mobileToggle.classList.remove('active');
                navMenu.classList.remove('active');
                console.log('Menu closed via nav link');
            });
        });
    } else {
        console.error('Mobile nav elements not found!');
    }
});

// ========================================
// PRINCIPLE INTERACTION FUNCTIONS
// ========================================

// Show principle details with enhanced brand messaging
function showPrinciple(principleNumber) {
    try {
        // Remove active class from all principle cards
        document.querySelectorAll('.principle-card').forEach(card => {
            card.classList.remove('active');
        });
        
        // Add active class to clicked card
        const clickedCard = document.querySelector(`.principle-card:nth-child(${principleNumber})`);
        if (clickedCard) {
            clickedCard.classList.add('active');
        }
        
        // Update principle details with enhanced content
        const principle = principleDetails[principleNumber];
        const detailsElement = document.getElementById('principle-details');
        
        if (principle && detailsElement) {
            detailsElement.innerHTML = `
                <div class="principle-detail-content">
                    <h4>${principle.title}</h4>
                    <p class="principle-description"><strong>Core Principle:</strong> ${principle.description}</p>
                    
                    <div class="principle-breakdown">
                        <div class="problem-solution-detail">
                            <div class="detail-section problem">
                                <h5><i class="fas fa-exclamation-triangle"></i> The Problem</h5>
                                <p>${principle.problem}</p>
                            </div>
                            <div class="detail-section solution">
                                <h5><i class="fas fa-lightbulb"></i> CH(Ai)SE™ Solution</h5>
                                <p>${principle.solution}</p>
                            </div>
                        </div>
                        
                        <div class="example-section">
                            <h5><i class="fas fa-chart-line"></i> Real Implementation Example</h5>
                            <p>${principle.example}</p>
                        </div>
                        
                        <div class="brand-value">
                            <h5><i class="fas fa-crown"></i> MBP Connection</h5>
                            <p class="methodology-subtitle">${principle.brandValue}</p>
                        </div>
                    </div>
                </div>
            `;
            
            // Add animation
            detailsElement.style.opacity = '0';
            setTimeout(() => {
                detailsElement.style.opacity = '1';
                detailsElement.classList.add('fade-in');
            }, 100);
        }
    } catch (error) {
        console.error('Error in showPrinciple:', error);
    }
}

// ========================================
// PILLAR INTERACTION FUNCTIONS
// ========================================

// Show pillar details with MBP focus
function showPillar(pillarKey) {
    try {
        // Remove active class from all pillar cards
        document.querySelectorAll('.pillar-card').forEach(card => {
            card.classList.remove('active');
        });
        
        // Add active class to clicked card
        const clickedCard = document.querySelector(`[onclick="showPillar('${pillarKey}')"]`);
        if (clickedCard) {
            clickedCard.classList.add('active');
        }
        
        // Update pillar details with enhanced MBP messaging
        const pillar = pillarDetails[pillarKey];
        const detailsElement = document.getElementById('pillar-details');
        
        if (pillar && detailsElement) {
            detailsElement.innerHTML = `
                <div class="pillar-detail-content">
                    <div class="pillar-header">
                        <h3>${pillar.title}</h3>
                        <h4 class="methodology-subtitle">${pillar.subtitle}</h4>
                    </div>
                    
                    <p class="pillar-description">${pillar.description}</p>
                    
                    <div class="pillar-breakdown">
                        <div class="key-components">
                            <h5><i class="fas fa-cogs"></i> Key Components</h5>
                            <ul class="component-list">
                                ${pillar.keyPoints.map(point => `<li>${point}</li>`).join('')}
                            </ul>
                        </div>
                        
                        <div class="business-impact">
                            <h5><i class="fas fa-chart-line"></i> Business Impact</h5>
                            <p>${pillar.businessImpact}</p>
                        </div>
                        
                        <div class="lineage-connection">
                            <h5><i class="fas fa-project-diagram"></i> Bi-Directional Lineage</h5>
                            <p class="methodology-subtitle">${pillar.lineage}</p>
                        </div>
                    </div>
                </div>
            `;
            
            // Add animation
            detailsElement.style.opacity = '0';
            setTimeout(() => {
                detailsElement.style.opacity = '1';
                detailsElement.classList.add('fade-in');
            }, 100);
        }
    } catch (error) {
        console.error('Error in showPillar:', error);
    }
}

// ========================================
// TIMELINE INTERACTION
// ========================================

// Highlight timeline phase with enhanced interaction
function highlightPhase(phaseNumber) {
    try {
        // Remove highlights from all phases
        document.querySelectorAll('.timeline-item').forEach(phase => {
            phase.classList.remove('highlighted');
        });
        
        // Highlight selected phase
        const selectedPhase = document.querySelector(`.timeline-item:nth-child(${phaseNumber})`);
        if (selectedPhase) {
            selectedPhase.classList.add('highlighted');
            
            // Scroll phase into view if needed
            selectedPhase.scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            });
            
            // Add pulse animation
            selectedPhase.style.animation = 'pulse 1s ease-in-out';
            setTimeout(() => {
                selectedPhase.style.animation = '';
            }, 1000);
        }
        
    } catch (error) {
        console.error('Timeline highlight error:', error);
    }
}

// ========================================
// CONTACT MODAL FUNCTIONS
// ========================================

// Show contact modal
function showContactModal() {
    try {
        const modal = document.getElementById('contact-modal');
        if (modal) {
            modal.classList.add('show');
            document.body.style.overflow = 'hidden'; // Prevent background scrolling
            
            // Focus on first input after animation
            setTimeout(() => {
                const firstInput = document.getElementById('name');
                if (firstInput) {
                    firstInput.focus();
                }
            }, 300);
        }
    } catch (error) {
        console.error('Error in showContactModal:', error);
    }
}

// Close contact modal
function closeContactModal() {
    try {
        const modal = document.getElementById('contact-modal');
        if (modal) {
            modal.classList.remove('show');
            document.body.style.overflow = ''; // Restore scrolling
        }
    } catch (error) {
        console.error('Error in closeContactModal:', error);
    }
}

// Handle contact form submission
function handleContactFormSubmit(event) {
    event.preventDefault();
    
    const form = event.target;
    const submitBtn = form.querySelector('.form-submit-btn');
    const messageDiv = document.getElementById('form-message');
    
    try {
        // Show loading state
        submitBtn.classList.add('loading');
        submitBtn.disabled = true;
        hideFormMessage();
        
        // Collect and validate form data
        const formData = {
            name: form.name.value.trim(),
            email: form.email.value.trim(),
            company: form.company.value.trim(),
            interest: form.interest.value,
            message: form.message.value.trim()
        };
        
        // Enhanced validation
        const validationResult = validateContactForm(formData);
        if (!validationResult.isValid) {
            throw new Error(validationResult.message);
        }
        
        // Simulate form submission
        setTimeout(() => {
            try {
                showFormMessage('Thank you for your interest in CH(Ai)SE™! We\'ll be in touch within 24 hours to discuss your project and how MBP > MVP can transform your development approach.', 'success');
                form.reset();
                
                // Close modal after delay
                setTimeout(() => {
                    closeContactModal();
                }, 3000);
                
            } catch (error) {
                showFormMessage('Thank you for your message. We\'ll be in touch soon!', 'success');
                form.reset();
            } finally {
                // Reset button state
                submitBtn.classList.remove('loading');
                submitBtn.disabled = false;
            }
        }, 1500);
        
    } catch (error) {
        console.error('Contact form error:', error);
        showFormMessage(error.message || 'Sorry, there was an error sending your message. Please try again.', 'error');
        
        // Reset button state
        submitBtn.classList.remove('loading');
        submitBtn.disabled = false;
    }
}

// Enhanced form validation
function validateContactForm(formData) {
    if (!formData.name) {
        return { isValid: false, message: 'Please enter your name.' };
    }
    
    if (formData.name.length < 2) {
        return { isValid: false, message: 'Name must be at least 2 characters long.' };
    }
    
    if (!formData.email) {
        return { isValid: false, message: 'Please enter your email address.' };
    }
    
    if (!isValidEmail(formData.email)) {
        return { isValid: false, message: 'Please enter a valid email address.' };
    }
    
    if (!formData.message) {
        return { isValid: false, message: 'Please describe your project details.' };
    }
    
    if (formData.message.length < 10) {
        return { isValid: false, message: 'Please provide more details about your project (at least 10 characters).' };
    }
    
    return { isValid: true };
}

// Validate email format
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Show form message with type styling
function showFormMessage(message, type) {
    const messageDiv = document.getElementById('form-message');
    if (messageDiv) {
        messageDiv.textContent = message;
        messageDiv.className = `form-message ${type}`;
        messageDiv.style.display = 'block';
        
        // Add animation
        messageDiv.classList.add('fade-in');
    }
}

// Hide form message
function hideFormMessage() {
    const messageDiv = document.getElementById('form-message');
    if (messageDiv) {
        messageDiv.style.display = 'none';
        messageDiv.className = 'form-message';
        messageDiv.classList.remove('fade-in');
    }
}

// ========================================
// UTILITY FUNCTIONS
// ========================================

// Debounce function for performance optimization
function debounce(func, wait, immediate = false) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            timeout = null;
            if (!immediate) func(...args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func(...args);
    };
}

// Check if element is in viewport
function isElementInViewport(el) {
    try {
        const rect = el.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        const windowWidth = window.innerWidth || document.documentElement.clientWidth;
        
        return (
            rect.top >= -100 && 
            rect.left >= -100 &&
            rect.bottom <= windowHeight + 100 && 
            rect.right <= windowWidth + 100
        );
    } catch (error) {
        console.error('Error in isElementInViewport:', error);
        return false;
    }
}

// ========================================
// INITIALIZATION & EVENT LISTENERS
// ========================================

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    try {
        console.log('🚀 BrightPath CH(Ai)SE website initializing...');
        
        // Set up contact form
        const contactForm = document.getElementById('contact-form');
        if (contactForm) {
            contactForm.addEventListener('submit', handleContactFormSubmit);
        }
        
        // Initialize modal close handlers
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                closeContactModal();
            }
        });
        
        // Resize handler for responsive adjustments
        window.addEventListener('resize', debounce(() => {
            // Close mobile menu on resize to desktop
            if (window.innerWidth > 768) {
                const mobileToggle = document.getElementById('mobile-toggle');
                const navMenu = document.getElementById('nav-menu');
                if (mobileToggle && navMenu) {
                    mobileToggle.classList.remove('active');
                    navMenu.classList.remove('active');
                }
            }
        }, 250));
        
        console.log('✅ BrightPath CH(Ai)SE website initialized successfully');
        
    } catch (error) {
        console.error('Initialization error:', error);
    }
});

// ========================================
// EXPORT FOR TESTING & EXTERNAL ACCESS
// ========================================

// Make key functions available globally
if (typeof window !== 'undefined') {
    window.BrightPathCHAISE = {
        showPrinciple,
        showPillar,
        scrollToSection,
        highlightPhase,
        showContactModal,
        closeContactModal,
        principleDetails,
        pillarDetails,
        version: '2.0.0'
    };
}