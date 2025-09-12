// ========================================
// BRIGHTPATH DEV - CH(Ai)SE METHODOLOGY
// Interactive Website JavaScript
// ========================================

// Principle Details Data
const principleDetails = {
    1: {
        title: "Customer-Driven Clarity",
        description: "Working software reveals true requirements better than planning documents. Customers understand their needs only after experiencing functional systems in their actual business context.",
        problem: "Traditional requirement gathering fails because small businesses can't articulate technical needs without seeing systems in action.",
        solution: "CH(Ai)SE starts with rapid MVP development that lets customers experience their solution immediately, revealing actual requirements through usage.",
        example: "Hair By Rhiannon couldn't specify email automation needs until she used the booking system for one week and realized exactly what operational gaps needed filling."
    },
    2: {
        title: "Evidence-First Progress",
        description: "Every development session produces both working code and documented decisions. Progress is measured by demonstrable value, not completed tasks or time spent.",
        problem: "Traditional project tracking focuses on task completion rather than value delivery, leading to 'busy work' without business impact.",
        solution: "CH(Ai)SE requires evidence of value in every development cycle - working features, documented decisions, and measurable business outcomes.",
        example: "Each Hair By Rhiannon development session produced functional features AND documented why each choice was made, creating full traceability."
    },
    3: {
        title: "Incremental Investment",
        description: "Small initial commitments enable scope evolution without financial risk. Enhancement decisions are made based on proven value rather than speculative planning.",
        problem: "Large upfront investments create project paralysis and scope change anxiety, preventing organic evolution of requirements.",
        solution: "CH(Ai)SE enables $2,500 MVP investments that prove value before larger commitments, making scope evolution financially manageable.",
        example: "Hair By Rhiannon's 300% scope increase became manageable $3K-5K phases instead of $15K-30K budget overruns."
    },
    4: {
        title: "Human-AI Synergy",
        description: "AI accelerates development velocity while humans provide strategic judgment, business context, and final accountability. Technology serves human decision-making, not the reverse.",
        problem: "Pure AI development lacks business context while pure human development is too slow and expensive for small business budgets.",
        solution: "CH(Ai)SE combines human strategic oversight with AI implementation acceleration, ensuring both speed and business alignment.",
        example: "Human experts defined Hair By Rhiannon's business workflow while AI accelerated the technical implementation, delivering in 8 days instead of 16 weeks."
    },
    5: {
        title: "Organic Evolution",
        description: "Requirements emerge from system usage, not upfront speculation. The most successful projects adapt based on customer discovery through working software interaction.",
        problem: "Fixed-scope projects deliver planned features instead of needed solutions, often missing the mark on actual business value.",
        solution: "CH(Ai)SE treats scope evolution as competitive advantage, systematically capturing and implementing insights from actual usage.",
        example: "Hair By Rhiannon's organic charter revealed specific automation needs that no planning session could have predicted."
    }
};

// Pillar Details Data
const pillarDetails = {
    cm: {
        title: "CH(Ai)SE Methodology (CM)",
        subtitle: "The Philosophy & Governance",
        description: "Establishes the foundational 'why' behind revolutionary project management. CM defines core principles, team structures, and the breakthrough approach that makes scope evolution a competitive advantage instead of a budget risk.",
        keyPoints: [
            "Five revolutionary principles that address traditional project failures",
            "Human-AI collaboration protocols with clear accountability",
            "Organic project evolution model that eliminates scope change anxiety",
            "Ethical AI integration framework maintaining human oversight",
            "Economic model that transforms project risk into customer confidence"
        ],
        businessImpact: "CM fundamentally changes how customers think about software projects - from fixed-scope risks to value-driven partnerships."
    },
    star: {
        title: "STAR Guide (Blueprint)",
        subtitle: "System Technical Architecture & Reference",
        description: "Defines the repeatable 'how' for technical excellence. STAR provides proven blueprints, architecture patterns, and implementation standards that ensure consistent quality across all CH(Ai)SE projects.",
        keyPoints: [
            "Frontend & database architecture blueprints for rapid deployment",
            "Security & authentication standards with built-in compliance",
            "Monitoring & maintenance protocols for operational excellence",
            "Scalable patterns that grow with business needs",
            "Evidence capture systems that support methodology transparency"
        ],
        businessImpact: "STAR eliminates technical risk while enabling rapid value delivery through proven, repeatable patterns."
    },
    ip: {
        title: "Implementation Playbook (IP)",
        subtitle: "The Execution Record",
        description: "Documents the complete 'what actually happened' with Plan vs. Actual vs. Why transparency. IP creates unprecedented project visibility and captures lessons that continuously improve the methodology.",
        keyPoints: [
            "Complete Plan vs. Actual documentation for every project phase",
            "Evidence-based progress tracking with real artifacts",
            "Change log with business rationale for every deviation",
            "Lessons learned integration that feeds back into CM and STAR",
            "Full traceability from methodology principles to implementation details"
        ],
        businessImpact: "IP provides customers with complete transparency and creates a continuous improvement loop that enhances methodology effectiveness."
    }
};

// Demo Phase Data
const demoPhases = {
    mvp: {
        title: "MVP Development Phase",
        description: "Rapid development of core business functionality with minimal scope and maximum value delivery. Focus on proving business value through working software.",
        timeline: "1-2 weeks",
        investment: "$2,500-15,000",
        successCriteria: "Customer can operate business using the system",
        deliverables: [
            "Functional core workflow",
            "Essential business features only",
            "Production-ready deployment",
            "Admin management interface"
        ],
        evidence: "Working system demonstration, customer usage documentation, core metrics tracking",
        code: "phase_1_mvp(core_workflow, essential_features, production_ready)"
    },
    demo: {
        title: "Customer Demonstration Phase",
        description: "Customer operates their actual business using the working system. Real usage reveals true requirements and workflow gaps that no planning session could predict.",
        timeline: "1-2 weeks",
        investment: "$0 (customer uses existing system)",
        successCriteria: "Customer identifies specific enhancement opportunities",
        deliverables: [
            "Real business operations data",
            "User experience feedback",
            "Workflow gap identification",
            "Performance validation"
        ],
        evidence: "Usage analytics, customer feedback documentation, workflow observations, enhancement requests",
        code: "phase_2_demo(real_operations, usage_analytics, gap_discovery)"
    },
    charter: {
        title: "Organic Charter Development",
        description: "Document specific enhancement roadmap based on actual system usage. Requirements emerge from evidence, not speculation, creating precise development priorities.",
        timeline: "1 week collaborative planning",
        investment: "Planning time only",
        successCriteria: "Clear feature requests with business justification",
        deliverables: [
            "Evidence-based requirements",
            "Enhancement priority matrix",
            "Investment roadmap",
            "Success metrics definition"
        ],
        evidence: "Charter documentation, requirement justification, ROI projections, implementation timeline",
        code: "phase_3_charter(usage_evidence, priority_matrix, roadmap_creation)"
    },
    enhance: {
        title: "Enhancement Implementation",
        description: "Implement customer-requested enhancements based on proven business value. Each enhancement cycle delivers measurable improvements with documented ROI.",
        timeline: "2-4 weeks per phase",
        investment: "$3,000-25,000 per phase",
        successCriteria: "Enhanced system addresses actual workflow needs",
        deliverables: [
            "Implemented enhancements",
            "Performance improvements",
            "User training materials",
            "Success measurement results"
        ],
        evidence: "Feature demonstrations, performance metrics, user satisfaction scores, business impact measurement",
        code: "phase_4_enhance(proven_features, measured_value, continuous_improvement)"
    }
};

// ========================================
// HERO STATS REVEAL FUNCTIONS
// ========================================

// Toggle stats visibility
function toggleStats() {
    try {
        const statsElement = document.getElementById('hero-stats');
        const toggleButton = document.querySelector('.stats-reveal-btn');
        const arrowIcon = document.querySelector('.arrow-icon');
        const revealText = document.querySelector('.reveal-text');
        
        if (statsElement && toggleButton) {
            const isHidden = statsElement.style.display === 'none';
            
            if (isHidden) {
                // Show stats
                statsElement.style.display = 'grid';
                statsElement.classList.add('show');
                toggleButton.classList.add('active');
                revealText.textContent = 'Hide Stats';
                
                // Add entrance animation
                setTimeout(() => {
                    statsElement.style.animation = 'slideInUp 0.6s ease-out';
                }, 50);
                
                // Track interaction
                trackMethodologyEngagement('hero_stats_revealed', 'user_action');
                
            } else {
                // Hide stats
                statsElement.style.display = 'none';
                statsElement.classList.remove('show');
                toggleButton.classList.remove('active');
                revealText.textContent = 'See the Proof';
            }
        }
    } catch (error) {
        console.error('Error in toggleStats:', error);
    }
}

// ========================================
// NAVIGATION & SCROLL FUNCTIONS
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
// PRINCIPLE INTERACTION FUNCTIONS
// ========================================

// Show principle details
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
        
        // Update principle details
        const principle = principleDetails[principleNumber];
        const detailsElement = document.getElementById('principle-details');
        
        if (principle && detailsElement) {
            detailsElement.innerHTML = `
                <h4>${principle.title}</h4>
                <p><strong>Core Principle:</strong> ${principle.description}</p>
                <div class="principle-breakdown">
                    <div class="problem-solution">
                        <div class="problem">
                            <h5>The Problem</h5>
                            <p>${principle.problem}</p>
                        </div>
                        <div class="solution">
                            <h5>CH(Ai)SE Solution</h5>
                            <p>${principle.solution}</p>
                        </div>
                    </div>
                    <div class="example">
                        <h5>Real Example</h5>
                        <p>${principle.example}</p>
                    </div>
                </div>
            `;
            
            // Add animation
            detailsElement.style.opacity = '0';
            setTimeout(() => {
                detailsElement.style.opacity = '1';
            }, 100);
        }
    } catch (error) {
        console.error('Error in showPrinciple:', error);
    }
}

// ========================================
// PILLAR INTERACTION FUNCTIONS
// ========================================

// Show pillar details
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
        
        // Update pillar details
        const pillar = pillarDetails[pillarKey];
        const detailsElement = document.getElementById('pillar-details');
        
        if (pillar && detailsElement) {
            detailsElement.innerHTML = `
                <h3>${pillar.title}</h3>
                <h4>${pillar.subtitle}</h4>
                <p>${pillar.description}</p>
                <div class="pillar-breakdown">
                    <div class="key-points">
                        <h5>Key Components</h5>
                        <ul>
                            ${pillar.keyPoints.map(point => `<li>${point}</li>`).join('')}
                        </ul>
                    </div>
                    <div class="business-impact">
                        <h5>Business Impact</h5>
                        <p>${pillar.businessImpact}</p>
                    </div>
                </div>
            `;
            
            // Add animation
            detailsElement.style.opacity = '0';
            setTimeout(() => {
                detailsElement.style.opacity = '1';
            }, 100);
        }
    } catch (error) {
        console.error('Error in showPillar:', error);
    }
}

// ========================================
// DEMO INTERACTION FUNCTIONS
// ========================================

// Show demo phase
function showDemo(phaseKey) {
    try {
        // Remove active class from all demo buttons
        document.querySelectorAll('.demo-button').forEach(btn => {
            btn.classList.remove('active');
        });
        
        // Add active class to clicked button
        const clickedButton = document.querySelector(`[data-phase="${phaseKey}"]`);
        if (clickedButton) {
            clickedButton.classList.add('active');
        }
        
        // Update demo content
        const phase = demoPhases[phaseKey];
        const contentElement = document.getElementById('demo-content');
        
        if (phase && contentElement) {
            contentElement.innerHTML = `
                <div class="demo-phase" id="${phaseKey}-phase">
                    <h3>${phase.title}</h3>
                    <p>${phase.description}</p>
                    <div class="demo-metrics">
                        <div class="demo-metric">
                            <span class="metric-label">Timeline:</span>
                            <span class="metric-value">${phase.timeline}</span>
                        </div>
                        <div class="demo-metric">
                            <span class="metric-label">Investment:</span>
                            <span class="metric-value">${phase.investment}</span>
                        </div>
                        <div class="demo-metric">
                            <span class="metric-label">Success Criteria:</span>
                            <span class="metric-value">${phase.successCriteria}</span>
                        </div>
                    </div>
                    <div class="demo-deliverables">
                        <h5>Key Deliverables</h5>
                        <ul>
                            ${phase.deliverables.map(item => `<li>${item}</li>`).join('')}
                        </ul>
                    </div>
                    <div class="demo-evidence">
                        <h5>Evidence & Documentation</h5>
                        <p>${phase.evidence}</p>
                    </div>
                    <div class="demo-code">
                        <code>${phase.code}</code>
                    </div>
                </div>
            `;
            
            // Add animation
            contentElement.style.opacity = '0';
            setTimeout(() => {
                contentElement.style.opacity = '1';
            }, 100);
        }
    } catch (error) {
        console.error('Error in showDemo:', error);
    }
}

// ========================================
// FRAMEWORK ACCESS FUNCTIONS
// ========================================

// Download framework
function downloadFramework(type) {
    try {
        if (type === 'free') {
            // In a real implementation, this would trigger a download
            // For now, we'll show a message and potentially redirect to a contact form
            alert('Free CH(Ai)SE Framework Overview will be available for download. For now, please contact us to receive the materials.');
            scrollToSection('contact');
        } else {
            // Redirect to contact for paid options
            scrollToSection('contact');
        }
    } catch (error) {
        console.error('Error in downloadFramework:', error);
    }
}

// ========================================
// CONTACT FORM FUNCTIONS
// ========================================

// Show contact form with pre-filled interest
function showContactForm(interest = '') {
    try {
        const contactSection = document.getElementById('contact-form');
        const interestSelect = document.getElementById('interest');
        
        if (contactSection) {
            contactSection.style.display = 'block';
            contactSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            
            // Pre-fill interest if provided
            if (interest && interestSelect) {
                setTimeout(() => {
                    interestSelect.value = interest;
                }, 500);
            }
            
            // Focus on first input after scrolling
            setTimeout(() => {
                const firstInput = document.getElementById('name');
                if (firstInput) {
                    firstInput.focus();
                }
            }, 1000);
        }
    } catch (error) {
        console.error('Error in showContactForm:', error);
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
        hideMessage();
        
        // Collect form data
        const formData = {
            name: form.name.value.trim(),
            email: form.email.value.trim(),
            company: form.company.value.trim(),
            interest: form.interest.value,
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
        
        // Simulate form submission (replace with actual endpoint)
        setTimeout(() => {
            try {
                showMessage('Thank you for your interest in CH(Ai)SE! We\'ll be in touch within 24 hours to discuss your project.', 'success');
                form.reset();
                
                // Track form submission (if analytics available)
                if (typeof gtag !== 'undefined') {
                    gtag('event', 'chase_contact_submit', {
                        event_category: 'Contact',
                        event_label: formData.interest || 'General',
                        value: 1
                    });
                }
            } catch (error) {
                showMessage('Thank you for your message. We\'ll be in touch soon!', 'success');
                form.reset();
            } finally {
                // Reset button state
                submitBtn.classList.remove('loading');
                submitBtn.disabled = false;
            }
        }, 1500);
        
    } catch (error) {
        console.error('Contact form error:', error);
        showMessage(error.message || 'Sorry, there was an error sending your message. Please try again.', 'error');
        
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
        const animatedElements = document.querySelectorAll('.principle-card, .pillar-card, .framework-card, .timeline-phase, .case-stat');
        
        animatedElements.forEach(element => {
            if (isElementInViewport(element)) {
                element.classList.add('fade-in');
            }
        });
    } catch (error) {
        console.error('Error in animateOnScroll:', error);
    }
}

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

// ========================================
// INITIALIZATION & EVENT LISTENERS
// ========================================

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    try {
        // Initialize demo with first phase
        showDemo('mvp');
        
        // Set up contact form
        const contactForm = document.getElementById('chase-contact-form');
        if (contactForm) {
            contactForm.addEventListener('submit', handleContactFormSubmit);
        }
        
        // Trigger initial animation check
        animateOnScroll();
        
        // Add scroll listener for animations
        window.addEventListener('scroll', debounce(animateOnScroll, 100));
        
        console.log('BrightPath CH(Ai)SE methodology site initialized successfully');
    } catch (error) {
        console.error('Error during initialization:', error);
    }
});

// ========================================
// ANALYTICS & TRACKING
// ========================================

// Track methodology engagement
function trackMethodologyEngagement(action, detail) {
    try {
        if (typeof gtag !== 'undefined') {
            gtag('event', 'methodology_engagement', {
                event_category: 'CH(Ai)SE',
                event_label: action,
                custom_parameter_1: detail,
                value: 1
            });
        }
        
        console.log('Methodology engagement:', action, detail);
    } catch (error) {
        console.log('Analytics tracking error:', error);
    }
}

// Track framework interest
function trackFrameworkInterest(frameworkType) {
    try {
        if (typeof gtag !== 'undefined') {
            gtag('event', 'framework_interest', {
                event_category: 'Framework',
                event_label: frameworkType,
                value: 1
            });
        }
        
        console.log('Framework interest:', frameworkType);
    } catch (error) {
        console.log('Analytics tracking error:', error);
    }
}

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
// UTILITY FUNCTIONS
// ========================================

// Format currency
function formatCurrency(amount) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(amount);
}

// Format percentage
function formatPercentage(value) {
    return new Intl.NumberFormat('en-US', {
        style: 'percent',
        minimumFractionDigits: 0,
        maximumFractionDigits: 1
    }).format(value / 100);
}

// Copy to clipboard
function copyToClipboard(text) {
    try {
        navigator.clipboard.writeText(text).then(() => {
            console.log('Text copied to clipboard');
        }).catch(err => {
            console.error('Could not copy text to clipboard:', err);
            // Fallback for older browsers
            const textArea = document.createElement('textarea');
            textArea.value = text;
            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand('copy');
            document.body.removeChild(textArea);
        });
    } catch (error) {
        console.error('Clipboard error:', error);
    }
}

// Smooth scroll with offset for fixed nav
function scrollToElementWithOffset(element, offset = 80) {
    try {
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        
        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    } catch (error) {
        console.error('Scroll with offset error:', error);
    }
}

// Get viewport dimensions
function getViewportDimensions() {
    return {
        width: Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0),
        height: Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)
    };
}

// Check if device is mobile
function isMobileDevice() {
    return getViewportDimensions().width < 768;
}

// ========================================
// ENHANCED INTERACTION FEATURES
// ========================================

// Economics calculator functionality
function calculateROI() {
    try {
        const traditionalCost = parseFloat(document.getElementById('traditional-cost')?.value) || 50000;
        const chaseCost = parseFloat(document.getElementById('chase-cost')?.value) || 10000;
        const annualBenefit = parseFloat(document.getElementById('annual-benefit')?.value) || 25000;
        
        const traditionalROI = ((annualBenefit - traditionalCost) / traditionalCost) * 100;
        const chaseROI = ((annualBenefit - chaseCost) / chaseCost) * 100;
        const savings = traditionalCost - chaseCost;
        const savingsPercentage = (savings / traditionalCost) * 100;
        
        // Update display elements
        const resultsElement = document.getElementById('roi-results');
        if (resultsElement) {
            resultsElement.innerHTML = `
                <div class="roi-comparison">
                    <div class="traditional-roi">
                        <h4>Traditional Approach</h4>
                        <div class="roi-metric">ROI: ${traditionalROI.toFixed(1)}%</div>
                        <div class="cost-metric">Total Cost: ${formatCurrency(traditionalCost)}</div>
                    </div>
                    <div class="chase-roi featured">
                        <h4>CH(Ai)SE Approach</h4>
                        <div class="roi-metric">ROI: ${chaseROI.toFixed(1)}%</div>
                        <div class="cost-metric">Total Cost: ${formatCurrency(chaseCost)}</div>
                    </div>
                    <div class="savings-summary">
                        <h4>Your Savings with CH(Ai)SE</h4>
                        <div class="savings-amount">${formatCurrency(savings)}</div>
                        <div class="savings-percentage">${savingsPercentage.toFixed(1)}% cost reduction</div>
                        <div class="roi-improvement">+${(chaseROI - traditionalROI).toFixed(1)}% ROI improvement</div>
                    </div>
                </div>
            `;
        }
        
        // Track calculator usage
        trackMethodologyEngagement('roi_calculator_used', `savings_${savings}`);
        
    } catch (error) {
        console.error('ROI calculation error:', error);
    }
}

// Progressive disclosure for case study details
function toggleCaseStudyDetails(section) {
    try {
        const detailsElement = document.getElementById(`case-study-${section}-details`);
        const toggleButton = document.querySelector(`[onclick="toggleCaseStudyDetails('${section}')"]`);
        
        if (detailsElement && toggleButton) {
            const isHidden = detailsElement.style.display === 'none' || !detailsElement.style.display;
            
            if (isHidden) {
                detailsElement.style.display = 'block';
                detailsElement.classList.add('fade-in');
                toggleButton.textContent = 'Show Less';
            } else {
                detailsElement.style.display = 'none';
                toggleButton.textContent = 'Show More';
            }
            
            // Track engagement
            trackMethodologyEngagement('case_study_details', section);
        }
    } catch (error) {
        console.error('Toggle case study details error:', error);
    }
}

// Interactive timeline highlighting
function highlightTimelinePhase(phaseNumber) {
    try {
        // Remove highlights from all phases
        document.querySelectorAll('.timeline-phase').forEach(phase => {
            phase.classList.remove('highlighted');
        });
        
        // Highlight selected phase
        const selectedPhase = document.querySelector(`.timeline-phase:nth-child(${phaseNumber})`);
        if (selectedPhase) {
            selectedPhase.classList.add('highlighted');
            
            // Scroll phase into view if needed
            if (!isElementInViewport(selectedPhase)) {
                scrollToElementWithOffset(selectedPhase);
            }
        }
        
        // Track timeline interaction
        trackMethodologyEngagement('timeline_interaction', `phase_${phaseNumber}`);
        
    } catch (error) {
        console.error('Timeline highlight error:', error);
    }
}

// Framework comparison interactive features
function compareFrameworks() {
    try {
        const comparisonData = {
            traditional: {
                name: 'Traditional Waterfall',
                timeline: '16-52 weeks',
                initialCost: '$50,000-150,000',
                scopeChangeCost: '$10,000-50,000 per change',
                riskLevel: 'High',
                customerConfidence: 'Low',
                valueDelivery: 'End of project'
            },
            agile: {
                name: 'Standard Agile',
                timeline: '12-26 weeks',
                initialCost: '$30,000-100,000',
                scopeChangeCost: '$5,000-25,000 per change',
                riskLevel: 'Medium',
                customerConfidence: 'Medium',
                valueDelivery: 'Sprint cycles'
            },
            chase: {
                name: 'CH(Ai)SE Methodology',
                timeline: '1-2 weeks to MVP, then organic',
                initialCost: '$2,500-15,000',
                scopeChangeCost: 'Scope evolution is the advantage',
                riskLevel: 'Low',
                customerConfidence: 'High',
                valueDelivery: 'Immediate and continuous'
            }
        };
        
        const comparisonElement = document.getElementById('framework-comparison');
        if (comparisonElement) {
            comparisonElement.innerHTML = `
                <div class="comparison-table">
                    <div class="comparison-header">
                        <div class="metric-label">Approach</div>
                        <div class="framework-name">Traditional</div>
                        <div class="framework-name">Agile</div>
                        <div class="framework-name featured">CH(Ai)SE</div>
                    </div>
                    ${Object.keys(comparisonData.traditional).filter(key => key !== 'name').map(metric => `
                        <div class="comparison-row">
                            <div class="metric-label">${metric.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}</div>
                            <div class="metric-value traditional">${comparisonData.traditional[metric]}</div>
                            <div class="metric-value agile">${comparisonData.agile[metric]}</div>
                            <div class="metric-value chase featured">${comparisonData.chase[metric]}</div>
                        </div>
                    `).join('')}
                </div>
            `;
        }
        
        // Track comparison view
        trackMethodologyEngagement('framework_comparison_viewed', 'full_table');
        
    } catch (error) {
        console.error('Framework comparison error:', error);
    }
}

// ========================================
// ADVANCED SCROLL INTERACTIONS
// ========================================

// Progress indicator for long content sections
function updateReadingProgress() {
    try {
        const progressBar = document.getElementById('reading-progress');
        if (!progressBar) return;
        
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight - windowHeight;
        const scrollTop = window.pageYOffset;
        const progress = (scrollTop / documentHeight) * 100;
        
        progressBar.style.width = `${Math.min(progress, 100)}%`;
    } catch (error) {
        console.error('Reading progress error:', error);
    }
}

// Section-based navigation highlighting
function updateActiveNavigation() {
    try {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-links a');
        
        let currentSection = '';
        
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const sectionHeight = section.offsetHeight;
            
            if (sectionTop <= 100 && sectionTop + sectionHeight > 100) {
                currentSection = section.id;
            }
        });
        
        // Update nav link active states
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSection}`) {
                link.classList.add('active');
            }
        });
        
    } catch (error) {
        console.error('Navigation update error:', error);
    }
}

// Parallax effects for hero section
function updateParallaxEffects() {
    try {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.parallax-element');
        
        parallaxElements.forEach(element => {
            const speed = element.dataset.speed || 0.5;
            const yPos = -(scrolled * speed);
            element.style.transform = `translateY(${yPos}px)`;
        });
    } catch (error) {
        console.error('Parallax effects error:', error);
    }
}

// ========================================
// PERFORMANCE OPTIMIZATIONS
// ========================================

// Intersection Observer for lazy loading and animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

function createIntersectionObserver() {
    try {
        if (!window.IntersectionObserver) return;
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in-view');
                    
                    // Trigger specific animations based on element type
                    if (entry.target.classList.contains('principle-card')) {
                        entry.target.style.animationDelay = `${Math.random() * 0.5}s`;
                    }
                    
                    // Stop observing once animated
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);
        
        // Observe all animatable elements
        document.querySelectorAll('.principle-card, .pillar-card, .timeline-phase, .framework-card, .case-stat').forEach(el => {
            observer.observe(el);
        });
        
    } catch (error) {
        console.error('Intersection observer error:', error);
    }
}

// Optimized scroll handler
const optimizedScrollHandler = debounce(() => {
    updateReadingProgress();
    updateActiveNavigation();
    updateParallaxEffects();
}, 16); // ~60fps

// ========================================
// ACCESSIBILITY ENHANCEMENTS
// ========================================

// Keyboard navigation support
function enhanceKeyboardNavigation() {
    try {
        // Add keyboard support for interactive cards
        document.querySelectorAll('.principle-card, .pillar-card, .demo-button').forEach(element => {
            element.setAttribute('tabindex', '0');
            element.setAttribute('role', 'button');
            
            element.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    element.click();
                }
            });
        });
        
        // Enhanced focus indicators
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Tab') {
                document.body.classList.add('keyboard-navigation');
            }
        });
        
        document.addEventListener('mousedown', () => {
            document.body.classList.remove('keyboard-navigation');
        });
        
    } catch (error) {
        console.error('Keyboard navigation error:', error);
    }
}

// Screen reader announcements
function announceToScreenReader(message) {
    try {
        const announcement = document.createElement('div');
        announcement.setAttribute('aria-live', 'polite');
        announcement.setAttribute('aria-atomic', 'true');
        announcement.className = 'sr-only';
        announcement.textContent = message;
        
        document.body.appendChild(announcement);
        
        setTimeout(() => {
            document.body.removeChild(announcement);
        }, 1000);
        
    } catch (error) {
        console.error('Screen reader announcement error:', error);
    }
}

// ========================================
// FINAL INITIALIZATION
// ========================================

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    try {
        // Initialize mobile navigation
        initializeMobileNavigation();
        
        // Initialize demo with first phase
        showDemo('mvp');
        
        // Enhanced features
        createIntersectionObserver();
        enhanceKeyboardNavigation();
        
        // Event listeners
        const contactForm = document.getElementById('chase-contact-form');
        if (contactForm) {
            contactForm.addEventListener('submit', handleContactFormSubmit);
        }
        
        // Optimized scroll listeners
        window.addEventListener('scroll', optimizedScrollHandler);
        
        // Resize handler for responsive adjustments
        window.addEventListener('resize', debounce(() => {
            // Close mobile menu on resize to desktop
            if (window.innerWidth > 768) {
                closeMobileMenu();
            }
            
            // Recalculate layouts if needed
            if (isMobileDevice()) {
                document.body.classList.add('mobile-device');
            } else {
                document.body.classList.remove('mobile-device');
            }
        }, 250));
        
        // Initial state
        if (isMobileDevice()) {
            document.body.classList.add('mobile-device');
        }
        
        // Announce successful load to screen readers
        announceToScreenReader('BrightPath CH(Ai)SE methodology website loaded successfully');
        
        console.log('BrightPath CH(Ai)SE methodology site fully initialized with enhanced features');
        
    } catch (error) {
        console.error('Enhanced initialization error:', error);
        // Fallback to basic functionality
        console.log('Falling back to basic functionality');
    }
});

// ========================================
// EXPORT FOR TESTING (if needed)
// ========================================

// Make key functions available globally for testing
if (typeof window !== 'undefined') {
    window.BrightPathCHAISE = {
        showPrinciple,
        showPillar,
        showDemo,
        scrollToSection,
        trackMethodologyEngagement,
        calculateROI,
        version: '1.0.0'
    };
}