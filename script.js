// ========================================
// BRIGHTPATH CH(Ai)SE - REDESIGNED JAVASCRIPT
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

// Demo Phase Data - Updated with brand messaging
const demoPhases = {
    mvp: {
        title: "MVP Development Phase",
        description: "Rapid development of core business functionality with minimal scope and maximum value delivery. Focus on proving business value through working software, establishing the foundation for MBP framework application.",
        timeline: "1-2 weeks",
        investment: "$2,500-15,000",
        successCriteria: "Customer can operate core business functions using the system",
        deliverables: [
            "Functional core workflow implementation",
            "Essential business features only (anti-bloat guarantee)",
            "Production-ready deployment with monitoring",
            "Admin management interface",
            "Initial Blueprint documentation"
        ],
        evidence: "Working system demonstration, customer usage documentation, core metrics tracking, Blueprint alignment verification",
        code: "phase_1_mvp(core_workflow, essential_features, production_ready, blueprint_aligned)",
        mbpConnection: "MVP proves the concept, but MBP ensures it can evolve sustainably."
    },
    demo: {
        title: "Customer Demonstration Phase", 
        description: "Customer operates their actual business using the working system. Real usage reveals true requirements and workflow gaps that no planning session could predict - the heart of customer-driven clarity.",
        timeline: "1-2 weeks",
        investment: "$0 (customer uses existing system)",
        successCriteria: "Customer identifies specific enhancement opportunities based on real usage",
        deliverables: [
            "Real business operations data and usage patterns",
            "Comprehensive user experience feedback",
            "Workflow gap identification and prioritization",
            "Performance validation under real conditions",
            "Organic requirements emergence documentation"
        ],
        evidence: "Usage analytics, customer feedback documentation, workflow observations, enhancement requests with business justification",
        code: "phase_2_demo(real_operations, usage_analytics, gap_discovery, organic_requirements)",
        mbpConnection: "Real usage exposes what the Methodology must govern and Blueprint must support."
    },
    charter: {
        title: "Organic Charter Development",
        description: "Document specific enhancement roadmap based on actual system usage evidence. Requirements emerge from demonstrated needs, not speculation, creating precise development priorities with clear business rationale.",
        timeline: "1 week collaborative planning",
        investment: "Planning time only",
        successCriteria: "Clear feature requests with business justification and MBP traceability",
        deliverables: [
            "Evidence-based requirements with usage justification",
            "Enhancement priority matrix tied to business impact",
            "Incremental investment roadmap with ROI projections",
            "Success metrics definition and measurement plan",
            "MBP traceability documentation"
        ],
        evidence: "Charter documentation, requirement justification, ROI projections, implementation timeline, Blueprint compatibility analysis",
        code: "phase_3_charter(usage_evidence, priority_matrix, roadmap_creation, mbp_traceability)",
        mbpConnection: "Charter updates the Methodology based on learnings, refines Blueprint for new requirements, and guides Playbook execution."
    },
    enhance: {
        title: "Enhancement Implementation",
        description: "Implement customer-requested enhancements based on proven business value and organic charter guidance. Each enhancement cycle delivers measurable improvements with documented ROI and maintained MBP traceability.",
        timeline: "2-4 weeks per enhancement phase",
        investment: "$3,000-25,000 per phase based on complexity",
        successCriteria: "Enhanced system addresses actual workflow needs with measurable business impact",
        deliverables: [
            "Implemented enhancements with full MBP traceability",
            "Performance improvements and optimization",
            "User training materials and documentation updates",
            "Success measurement results and ROI validation",
            "Updated Blueprint and Playbook documentation"
        ],
        evidence: "Feature demonstrations, performance metrics, user satisfaction scores, business impact measurement, MBP documentation updates",
        code: "phase_4_enhance(proven_features, measured_value, continuous_improvement, mbp_maintained)",
        mbpConnection: "Each enhancement strengthens the MBP foundation - Methodology evolves, Blueprint expands, Playbook captures lessons."
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
            
            // Track section navigation
            trackInteraction('section_navigation', sectionId);
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
        trackInteraction('scroll_to_top', 'logo_click');
    } catch (error) {
        console.error('Error scrolling to top:', error);
    }
}

// Navigation scroll effect and active section highlighting
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    // Navbar scroll effect
    if (navbar) {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }
    
    // Active section highlighting
    let currentSection = '';
    const navHeight = navbar ? navbar.offsetHeight : 80;
    
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionHeight = section.offsetHeight;
        
        if (sectionTop <= navHeight + 100 && sectionTop + sectionHeight > navHeight + 100) {
            currentSection = section.id;
        }
    });
    
    // Update nav link active states
    navLinks.forEach(link => {
        link.classList.remove('active');
        const href = link.getAttribute('href');
        if (href === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
});

// ========================================
// MOBILE NAVIGATION
// ========================================

// Initialize mobile navigation
function initializeMobileNavigation() {
    const toggle = document.getElementById('mobile-menu-toggle');
    const navLinks = document.getElementById('nav-links');
    
    if (toggle && navLinks) {
        toggle.addEventListener('click', function() {
            navLinks.classList.toggle('open');
            toggle.classList.toggle('active');
            
            // Animate hamburger lines
            const lines = toggle.querySelectorAll('.hamburger-line');
            lines.forEach((line, index) => {
                if (toggle.classList.contains('active')) {
                    switch(index) {
                        case 0:
                            line.style.transform = 'rotate(45deg) translate(5px, 5px)';
                            break;
                        case 1:
                            line.style.opacity = '0';
                            break;
                        case 2:
                            line.style.transform = 'rotate(-45deg) translate(7px, -6px)';
                            break;
                    }
                } else {
                    line.style.transform = '';
                    line.style.opacity = '';
                }
            });
            
            trackInteraction('mobile_menu_toggle', navLinks.classList.contains('open') ? 'open' : 'close');
        });
        
        // Close mobile menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!toggle.contains(event.target) && !navLinks.contains(event.target)) {
                closeMobileMenu();
            }
        });
    }
}

// Close mobile menu
function closeMobileMenu() {
    const toggle = document.getElementById('mobile-menu-toggle');
    const navLinks = document.getElementById('nav-links');
    
    if (toggle && navLinks) {
        navLinks.classList.remove('open');
        toggle.classList.remove('active');
        
        // Reset hamburger lines
        const lines = toggle.querySelectorAll('.hamburger-line');
        lines.forEach(line => {
            line.style.transform = '';
            line.style.opacity = '';
        });
    }
}

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
                            <p class="brand-highlight">${principle.brandValue}</p>
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
            
            // Track principle interaction
            trackInteraction('principle_explored', `principle_${principleNumber}`);
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
            
            // Track pillar interaction
            trackInteraction('pillar_explored', pillarKey);
        }
    } catch (error) {
        console.error('Error in showPillar:', error);
    }
}

// ========================================
// DEMO INTERACTION FUNCTIONS
// ========================================

// Show demo phase with MBP integration messaging
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
        
        // Update demo content with enhanced MBP messaging
        const phase = demoPhases[phaseKey];
        const contentElement = document.getElementById('demo-content');
        
        if (phase && contentElement) {
            contentElement.innerHTML = `
                <div class="demo-phase-content" id="${phaseKey}-phase">
                    <div class="phase-header">
                        <h3>${phase.title}</h3>
                        <div class="phase-badge">${phase.timeline}</div>
                    </div>
                    
                    <p class="phase-description">${phase.description}</p>
                    
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
                        <h5><i class="fas fa-clipboard-check"></i> Key Deliverables</h5>
                        <ul class="deliverables-list">
                            ${phase.deliverables.map(item => `<li>${item}</li>`).join('')}
                        </ul>
                    </div>
                    
                    <div class="demo-evidence">
                        <h5><i class="fas fa-file-alt"></i> Evidence & Documentation</h5>
                        <p>${phase.evidence}</p>
                    </div>
                    
                    <div class="mbp-connection">
                        <h5><i class="fas fa-crown"></i> MBP Framework Connection</h5>
                        <p class="methodology-subtitle">${phase.mbpConnection}</p>
                    </div>
                    
                    <div class="demo-code">
                        <code class="methodology-subtitle">${phase.code}</code>
                    </div>
                </div>
            `;
            
            // Add animation
            contentElement.style.opacity = '0';
            setTimeout(() => {
                contentElement.style.opacity = '1';
                contentElement.classList.add('fade-in');
            }, 100);
            
            // Track demo interaction
            trackInteraction('demo_phase_explored', phaseKey);
        }
    } catch (error) {
        console.error('Error in showDemo:', error);
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
            if (!isElementInViewport(selectedPhase)) {
                selectedPhase.scrollIntoView({
                    behavior: 'smooth',
                    block: 'center'
                });
            }
            
            // Add pulse animation
            selectedPhase.style.animation = 'pulse 1s ease-in-out';
            setTimeout(() => {
                selectedPhase.style.animation = '';
            }, 1000);
        }
        
        // Track timeline interaction
        trackInteraction('timeline_phase_selected', `phase_${phaseNumber}`);
        
    } catch (error) {
        console.error('Timeline highlight error:', error);
    }
}

// ========================================
// FRAMEWORK ACCESS FUNCTIONS
// ========================================

// Download framework with tracking
function downloadFramework(type) {
    try {
        if (type === 'free') {
            // Track free download
            trackInteraction('framework_download', 'free_guide');
            
            // Show success message
            showNotification('success', 'Free CH(Ai)SE™ Framework Guide will be available soon. For now, please contact us to receive the materials.');
            
            // Redirect to contact after delay
            setTimeout(() => {
                scrollToSection('contact');
            }, 2000);
        } else {
            // Redirect to contact for paid options
            trackInteraction('framework_interest', type);
            scrollToSection('contact');
        }
    } catch (error) {
        console.error('Error in downloadFramework:', error);
    }
}

// ========================================
// CONTACT FORM FUNCTIONS
// ========================================

// Show contact form modal with pre-filled interest
function showContactForm(interest = '') {
    try {
        const modal = document.getElementById('contact-modal');
        const interestSelect = document.getElementById('interest');
        
        if (modal) {
            modal.classList.add('show');
            document.body.style.overflow = 'hidden'; // Prevent background scrolling
            
            // Pre-fill interest if provided
            if (interest && interestSelect) {
                setTimeout(() => {
                    interestSelect.value = interest;
                }, 100);
            }
            
            // Focus on first input after animation
            setTimeout(() => {
                const firstInput = document.getElementById('name');
                if (firstInput) {
                    firstInput.focus();
                }
            }, 300);
            
            // Track modal open
            trackInteraction('contact_modal_opened', interest || 'general');
        }
    } catch (error) {
        console.error('Error in showContactForm:', error);
    }
}

// Close contact form modal
function closeContactModal() {
    try {
        const modal = document.getElementById('contact-modal');
        if (modal) {
            modal.classList.remove('show');
            document.body.style.overflow = ''; // Restore scrolling
            
            // Track modal close
            trackInteraction('contact_modal_closed', 'user_action');
        }
    } catch (error) {
        console.error('Error in closeContactModal:', error);
    }
}

// Handle contact form submission with enhanced validation
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
        
        // Track form submission attempt
        trackInteraction('contact_form_submitted', formData.interest);
        
        // Simulate form submission (replace with actual endpoint)
        setTimeout(() => {
            try {
                // Show success message
                showFormMessage('Thank you for your interest in CH(Ai)SE™! We\'ll be in touch within 24 hours to discuss your project and how MBP > MVP can transform your development approach.', 'success');
                form.reset();
                
                // Track successful submission
                trackInteraction('contact_form_success', formData.interest);
                
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
        
        // Track form error
        trackInteraction('contact_form_error', error.message);
        
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
// NOTIFICATION SYSTEM
// ========================================

// Show notification toast
function showNotification(type, message, duration = 5000) {
    try {
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.innerHTML = `
            <div class="notification-content">
                <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
                <span>${message}</span>
                <button class="notification-close" onclick="this.parentElement.parentElement.remove()">
                    <i class="fas fa-times"></i>
                </button>
            </div>
        `;
        
        // Add to page
        document.body.appendChild(notification);
        
        // Animate in
        setTimeout(() => {
            notification.classList.add('show');
        }, 100);
        
        // Auto remove
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => {
                if (notification.parentElement) {
                    notification.remove();
                }
            }, 300);
        }, duration);
        
    } catch (error) {
        console.error('Notification error:', error);
    }
}

// ========================================
// SCROLL-TRIGGERED ANIMATIONS
// ========================================

// Check if element is in viewport
function isElementInViewport(el) {
    try {
        const rect = el.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        const windowWidth = window.innerWidth || document.documentElement.clientWidth;
        
        return (
            rect.top >= -100 && // Allow 100px before entering viewport
            rect.left >= -100 &&
            rect.bottom <= windowHeight + 100 && // Allow 100px after leaving viewport
            rect.right <= windowWidth + 100
        );
    } catch (error) {
        console.error('Error in isElementInViewport:', error);
        return false;
    }
}

// Animate elements on scroll
function animateOnScroll() {
    try {
        const animatedElements = document.querySelectorAll('.principle-card, .pillar-card, .framework-card, .timeline-item, .result-stat, .value-prop');
        
        animatedElements.forEach(element => {
            if (isElementInViewport(element) && !element.classList.contains('animated')) {
                element.classList.add('fade-in', 'animated');
            }
        });
    } catch (error) {
        console.error('Error in animateOnScroll:', error);
    }
}

// Intersection Observer for better performance
function setupIntersectionObserver() {
    try {
        if (!window.IntersectionObserver) {
            // Fallback for older browsers
            window.addEventListener('scroll', debounce(animateOnScroll, 100));
            return;
        }
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
                    entry.target.classList.add('fade-in', 'animated');
                    
                    // Add staggered animation for grids
                    if (entry.target.parentElement.classList.contains('principles-grid') ||
                        entry.target.parentElement.classList.contains('pillars-grid')) {
                        const siblings = Array.from(entry.target.parentElement.children);
                        const index = siblings.indexOf(entry.target);
                        entry.target.style.animationDelay = `${index * 0.1}s`;
                    }
                    
                    // Stop observing once animated
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '50px'
        });
        
        // Observe all animatable elements
        const elements = document.querySelectorAll('.principle-card, .pillar-card, .framework-card, .timeline-item, .result-stat, .value-prop');
        elements.forEach(el => observer.observe(el));
        
    } catch (error) {
        console.error('Intersection observer error:', error);
        // Fallback to scroll listener
        window.addEventListener('scroll', debounce(animateOnScroll, 100));
    }
}

// ========================================
// ANALYTICS & TRACKING
// ========================================

// Track user interactions with enhanced data
function trackInteraction(action, detail, value = 1) {
    try {
        // Google Analytics 4 tracking
        if (typeof gtag !== 'undefined') {
            gtag('event', action, {
                event_category: 'CH(Ai)SE_Interaction',
                event_label: detail,
                value: value,
                custom_parameter_1: 'brightpath_redesign',
                custom_parameter_2: getCurrentSection()
            });
        }
        
        // Console logging for development
        if (process?.env?.NODE_ENV === 'development') {
            console.log('Interaction tracked:', { action, detail, value, section: getCurrentSection() });
        }
        
        // Custom analytics (if implemented)
        if (window.customAnalytics) {
            window.customAnalytics.track(action, {
                detail,
                value,
                section: getCurrentSection(),
                timestamp: new Date().toISOString(),
                userAgent: navigator.userAgent
            });
        }
        
    } catch (error) {
        console.log('Analytics tracking error:', error);
    }
}

// Get current section for context
function getCurrentSection() {
    try {
        const sections = document.querySelectorAll('section[id]');
        const navHeight = 80;
        
        for (let section of sections) {
            const rect = section.getBoundingClientRect();
            if (rect.top <= navHeight + 100 && rect.bottom >= navHeight + 100) {
                return section.id;
            }
        }
        return 'unknown';
    } catch (error) {
        return 'error';
    }
}

// Track page performance
function trackPagePerformance() {
    try {
        if (performance && performance.getEntriesByType) {
            const navigationEntries = performance.getEntriesByType('navigation');
            if (navigationEntries.length > 0) {
                const nav = navigationEntries[0];
                
                trackInteraction('page_performance', 'page_load_time', Math.round(nav.loadEventEnd - nav.fetchStart));
                trackInteraction('page_performance', 'dom_content_loaded', Math.round(nav.domContentLoadedEventEnd - nav.fetchStart));
                trackInteraction('page_performance', 'first_contentful_paint', Math.round(nav.domContentLoadedEventEnd - nav.fetchStart));
            }
        }
    } catch (error) {
        console.log('Performance tracking error:', error);
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

// Throttle function for scroll events
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
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

// Format currency for display
function formatCurrency(amount) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(amount);
}

// Format percentage for display
function formatPercentage(value) {
    return new Intl.NumberFormat('en-US', {
        style: 'percent',
        minimumFractionDigits: 0,
        maximumFractionDigits: 1
    }).format(value / 100);
}

// Copy text to clipboard
function copyToClipboard(text) {
    try {
        if (navigator.clipboard) {
            navigator.clipboard.writeText(text).then(() => {
                showNotification('success', 'Copied to clipboard!', 2000);
            }).catch(err => {
                console.error('Clipboard error:', err);
                fallbackCopyToClipboard(text);
            });
        } else {
            fallbackCopyToClipboard(text);
        }
    } catch (error) {
        console.error('Copy to clipboard error:', error);
        showNotification('error', 'Could not copy to clipboard', 3000);
    }
}

// Fallback copy function for older browsers
function fallbackCopyToClipboard(text) {
    try {
        const textArea = document.createElement('textarea');
        textArea.value = text;
        textArea.style.position = 'fixed';
        textArea.style.opacity = '0';
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        showNotification('success', 'Copied to clipboard!', 2000);
    } catch (error) {
        console.error('Fallback copy error:', error);
        showNotification('error', 'Could not copy to clipboard', 3000);
    }
}

// ========================================
// ACCESSIBILITY ENHANCEMENTS
// ========================================

// Keyboard navigation support
function enhanceKeyboardNavigation() {
    try {
        // Add keyboard support for interactive cards
        const interactiveElements = document.querySelectorAll('.principle-card, .pillar-card, .timeline-item, .framework-card');
        
        interactiveElements.forEach((element, index) => {
            element.setAttribute('tabindex', '0');
            element.setAttribute('role', 'button');
            element.setAttribute('aria-describedby', `${element.className.split(' ')[0]}-${index}`);
            
            element.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    element.click();
                    
                    // Announce to screen readers
                    announceToScreenReader(`${element.querySelector('h4')?.textContent || 'Item'} selected`);
                }
            });
        });
        
        // Enhanced focus indicators for keyboard navigation
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
function announceToScreenReader(message, priority = 'polite') {
    try {
        const announcement = document.createElement('div');
        announcement.setAttribute('aria-live', priority);
        announcement.setAttribute('aria-atomic', 'true');
        announcement.className = 'sr-only';
        announcement.style.position = 'absolute';
        announcement.style.left = '-10000px';
        announcement.style.width = '1px';
        announcement.style.height = '1px';
        announcement.style.overflow = 'hidden';
        announcement.textContent = message;
        
        document.body.appendChild(announcement);
        
        setTimeout(() => {
            if (announcement.parentElement) {
                document.body.removeChild(announcement);
            }
        }, 1000);
        
    } catch (error) {
        console.error('Screen reader announcement error:', error);
    }
}

// ========================================
// ERROR HANDLING & MONITORING
// ========================================

// Global error handler
window.addEventListener('error', function(e) {
    console.error('Global JavaScript error:', {
        message: e.message,
        filename: e.filename,
        lineno: e.lineno,
        colno: e.colno,
        error: e.error
    });
    
    // Track errors
    trackInteraction('javascript_error', e.message);
});

// Unhandled promise rejection handler
window.addEventListener('unhandledrejection', function(e) {
    console.error('Unhandled promise rejection:', e.reason);
    trackInteraction('promise_rejection', e.reason?.message || 'unknown');
});

// ========================================
// INITIALIZATION & EVENT LISTENERS
// ========================================

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    try {
        console.log('🚀 BrightPath CH(Ai)SE website initializing...');
        
        // Initialize core functionality
        initializeMobileNavigation();
        enhanceKeyboardNavigation();
        setupIntersectionObserver();
        
        // Initialize demo with first phase
        showDemo('mvp');
        
        // Set up contact form
        const contactForm = document.getElementById('chase-contact-form');
        if (contactForm) {
            contactForm.addEventListener('submit', handleContactFormSubmit);
        }
        
        // Initialize modal close handlers
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                closeContactModal();
            }
        });
        
        // Track page load
        trackInteraction('page_loaded', 'dom_content_loaded');
        
        // Track performance after page fully loads
        window.addEventListener('load', function() {
            trackPagePerformance();
            announceToScreenReader('BrightPath CH(Ai)SE website loaded successfully');
        });
        
        // Enhanced scroll listeners with throttling
        window.addEventListener('scroll', throttle(() => {
            // Handled by individual scroll functions above
        }, 16)); // ~60fps
        
        // Resize handler for responsive adjustments
        window.addEventListener('resize', debounce(() => {
            // Close mobile menu on resize to desktop
            if (!isMobileDevice()) {
                closeMobileMenu();
            }
            
            // Update mobile device class
            document.body.classList.toggle('mobile-device', isMobileDevice());
            
            // Track viewport changes
            const viewport = getViewportDimensions();
            trackInteraction('viewport_change', `${viewport.width}x${viewport.height}`);
        }, 250));
        
        // Set initial mobile state
        document.body.classList.toggle('mobile-device', isMobileDevice());
        
        console.log('✅ BrightPath CH(Ai)SE website initialized successfully');
        
        // Show welcome message for first-time visitors
        if (!localStorage.getItem('brightpath_visited')) {
            setTimeout(() => {
                showNotification('info', 'Welcome to BrightPath CH(Ai)SE™ - Discover why MBP > MVP!', 6000);
                localStorage.setItem('brightpath_visited', 'true');
                trackInteraction('first_visit', 'welcome_shown');
            }, 2000);
        }
        
    } catch (error) {
        console.error('Initialization error:', error);
        trackInteraction('initialization_error', error.message);
        
        // Show fallback message
        showNotification('error', 'Some features may not work properly. Please refresh the page.', 8000);
    }
});

// ========================================
// EXPORT FOR TESTING & EXTERNAL ACCESS
// ========================================

// Make key functions available globally for testing and external access
if (typeof window !== 'undefined') {
    window.BrightPathCHAISE = {
        // Core functions
        showPrinciple,
        showPillar,
        showDemo,
        scrollToSection,
        highlightPhase,
        
        // Contact functions
        showContactForm,
        closeContactModal,
        downloadFramework,
        
        // Utility functions
        trackInteraction,
        showNotification,
        copyToClipboard,
        
        // Data access
        principleDetails,
        pillarDetails,
        demoPhases,
        
        // Version and debug info
        version: '2.0.0',
        buildDate: new Date().toISOString(),
        features: [
            'Mobile Navigation',
            'Interactive Principles',
            'MBP Framework Details',
            'Contact Modal',
            'Analytics Tracking',
            'Accessibility Enhancements',
            'Performance Monitoring'
        ]
    };
    
    // Development helpers
    if (process?.env?.NODE_ENV === 'development') {
        window.BrightPathDev = {
            getCurrentSection,
            getViewportDimensions,
            isMobileDevice,
            isElementInViewport,
            trackInteraction,
            debugMode: true
        };
    }
}

// ========================================
// SERVICE WORKER REGISTRATION (Optional)
// ========================================

// Register service worker for offline functionality (if service-worker.js exists)
if ('serviceWorker' in navigator && window.location.protocol === 'https:') {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('/service-worker.js')
            .then(function(registration) {
                console.log('ServiceWorker registered successfully');
                trackInteraction('service_worker', 'registered');
            })
            .catch(function(error) {
                console.log('ServiceWorker registration failed:', error);
            });
    });
}

// ========================================
// FINAL READY STATE
// ========================================

// Announce when everything is fully ready
window.addEventListener('load', function() {
    setTimeout(() => {
        document.body.classList.add('fully-loaded');
        trackInteraction('website_ready', 'fully_loaded');
        console.log('🎉 BrightPath CH(Ai)SE website fully loaded and ready!');
    }, 500);
});