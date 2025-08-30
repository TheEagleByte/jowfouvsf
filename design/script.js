/**
 * Inventure Recruitment Platform - Consolidated JavaScript
 * Minimalist-Modern Design Variant
 * 
 * Combining: main.js, animations.js, components.js
 */

(function() {
    'use strict';
    
    // ========================================
    // MAIN FUNCTIONALITY
    // ========================================
    
    // DOM Elements
    const header = document.getElementById('header');
    const menuToggle = document.getElementById('menuToggle');
    const mobileNav = document.getElementById('mobileNav');
    const mobileNavBackdrop = document.getElementById('mobileNavBackdrop');
    const navLinks = document.querySelectorAll('.nav-link');
    const particlesContainer = document.getElementById('particles');
    
    // Animation configuration
    const config = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    // Initialize on DOM load
    document.addEventListener('DOMContentLoaded', function() {
        // Main functionality
        initializeHeader();
        initializeMobileMenu();
        initializeSmoothScroll();
        initializeParticles();
        initializeScrollReveal();
        initializeProgressBars();
        
        // Animation functionality
        initParallaxEffects();
        initTextAnimations();
        initHoverEffects();
        initLoadingAnimations();
        initTypewriterEffect();
        
        // Component functionality
        initForms();
        initModals();
        initTooltips();
        initTabs();
        initAccordions();
        initNotifications();
        initDropdowns();
        initSearchComponents();
    });
    
    // ========================================
    // HEADER & NAVIGATION
    // ========================================
    
    /**
     * Header scroll behavior
     */
    function initializeHeader() {
        let lastScroll = 0;
        
        window.addEventListener('scroll', function() {
            const currentScroll = window.pageYOffset;
            
            // Add scrolled class for shadow
            if (currentScroll > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
            
            lastScroll = currentScroll;
        });
    }
    
    /**
     * Mobile menu toggle
     */
    function initializeMobileMenu() {
        if (!menuToggle || !mobileNav || !mobileNavBackdrop) return;
        
        function openMobileMenu() {
            menuToggle.classList.add('active');
            mobileNav.classList.add('active');
            mobileNavBackdrop.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
        
        function closeMobileMenu() {
            menuToggle.classList.remove('active');
            mobileNav.classList.remove('active');
            mobileNavBackdrop.classList.remove('active');
            document.body.style.overflow = '';
        }
        
        // Toggle menu on hamburger click
        menuToggle.addEventListener('click', function() {
            const isActive = menuToggle.classList.contains('active');
            if (isActive) {
                closeMobileMenu();
            } else {
                openMobileMenu();
            }
        });
        
        // Close menu when clicking backdrop
        mobileNavBackdrop.addEventListener('click', closeMobileMenu);
        
        // Close mobile menu when clicking nav links
        const mobileNavLinks = mobileNav.querySelectorAll('.nav-link');
        mobileNavLinks.forEach(link => {
            link.addEventListener('click', closeMobileMenu);
        });
        
        // Close menu on escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && menuToggle.classList.contains('active')) {
                closeMobileMenu();
            }
        });
    }
    
    /**
     * Smooth scrolling for anchor links
     */
    function initializeSmoothScroll() {
        navLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                const href = this.getAttribute('href');
                
                if (href.startsWith('#')) {
                    e.preventDefault();
                    const target = document.querySelector(href);
                    
                    if (target) {
                        const headerHeight = header.offsetHeight;
                        const targetPosition = target.offsetTop - headerHeight - 20;
                        
                        window.scrollTo({
                            top: targetPosition,
                            behavior: 'smooth'
                        });
                        
                        // Update active state
                        navLinks.forEach(l => l.classList.remove('active'));
                        this.classList.add('active');
                    }
                }
            });
        });
    }
    
    // ========================================
    // PARTICLE SYSTEM
    // ========================================
    
    /**
     * Create animated particles in hero section
     */
    function initializeParticles() {
        if (!particlesContainer) return;
        
        const particleCount = 50;
        const particles = [];
        
        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            
            // Random position
            particle.style.left = Math.random() * 100 + '%';
            particle.style.top = Math.random() * 100 + '%';
            
            // Random size
            const size = Math.random() * 6 + 2;
            particle.style.width = size + 'px';
            particle.style.height = size + 'px';
            
            // Random animation delay
            particle.style.animationDelay = Math.random() * 8 + 's';
            
            particlesContainer.appendChild(particle);
            particles.push(particle);
        }
        
        // Create connection lines
        createConnectionLines();
    }
    
    /**
     * Create animated connection lines between particles
     */
    function createConnectionLines() {
        const lineCount = 15;
        
        for (let i = 0; i < lineCount; i++) {
            const line = document.createElement('div');
            line.className = 'connection-line';
            
            // Random position and angle
            line.style.left = Math.random() * 100 + '%';
            line.style.top = Math.random() * 100 + '%';
            line.style.width = Math.random() * 200 + 100 + 'px';
            line.style.transform = `rotate(${Math.random() * 360}deg)`;
            
            // Random animation delay
            line.style.animationDelay = Math.random() * 3 + 's';
            
            if (particlesContainer) {
                particlesContainer.appendChild(line);
            }
        }
    }
    
    // ========================================
    // SCROLL ANIMATIONS
    // ========================================
    
    /**
     * Initialize scroll reveal animations
     */
    function initializeScrollReveal() {
        const reveals = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
        
        if (!reveals.length) return;
        
        const revealOnScroll = function() {
            reveals.forEach(element => {
                const windowHeight = window.innerHeight;
                const elementTop = element.getBoundingClientRect().top;
                const elementVisible = 150;
                
                if (elementTop < windowHeight - elementVisible) {
                    element.classList.add('active');
                }
            });
        };
        
        window.addEventListener('scroll', revealOnScroll);
        revealOnScroll(); // Check on load
    }
    
    /**
     * Parallax scrolling effects
     */
    function initParallaxEffects() {
        const parallaxElements = document.querySelectorAll('[data-parallax]');
        
        if (!parallaxElements.length) return;
        
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            
            parallaxElements.forEach(element => {
                const speed = element.dataset.parallax || 0.5;
                const yPos = -(scrolled * speed);
                element.style.transform = `translateY(${yPos}px)`;
            });
        });
    }
    
    // ========================================
    // PROGRESS BARS & COUNTERS
    // ========================================
    
    /**
     * Initialize progress bars and counters
     */
    function initializeProgressBars() {
        const progressCircles = document.querySelectorAll('.progress-circle-fill');
        
        progressCircles.forEach(circle => {
            const dashArray = circle.getAttribute('stroke-dasharray');
            const targetOffset = circle.getAttribute('stroke-dashoffset');
            
            // Animate on scroll
            const animateProgress = function() {
                const rect = circle.getBoundingClientRect();
                const windowHeight = window.innerHeight;
                
                if (rect.top < windowHeight && rect.bottom > 0) {
                    circle.style.strokeDashoffset = targetOffset;
                    window.removeEventListener('scroll', animateProgress);
                }
            };
            
            window.addEventListener('scroll', animateProgress);
            animateProgress();
        });
        
        // Animate stat counters
        animateCounters();
    }
    
    /**
     * Animate number counters
     */
    function animateCounters() {
        const counters = document.querySelectorAll('.stat-value[data-target]');
        
        counters.forEach(counter => {
            const animate = () => {
                const target = parseInt(counter.dataset.target);
                const suffix = counter.dataset.suffix || '';
                let current = 0;
                const increment = target / 60; // 60 frames for smooth animation
                
                const updateCounter = () => {
                    if (current < target) {
                        current += increment;
                        let displayValue = Math.floor(current);
                        
                        // Format large numbers
                        if (target >= 10000) {
                            displayValue = Math.floor(current / 1000);
                        }
                        
                        counter.textContent = displayValue + suffix;
                        requestAnimationFrame(updateCounter);
                    } else {
                        // Final value
                        let finalValue = target;
                        if (target >= 10000) {
                            finalValue = target / 1000;
                        }
                        counter.textContent = finalValue + suffix;
                    }
                };
                
                updateCounter();
            };
            
            // Start animation when in viewport
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        animate();
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.5 });
            
            observer.observe(counter);
        });
    }
    
    // ========================================
    // ADVANCED ANIMATIONS
    // ========================================
    
    /**
     * Text reveal animations
     */
    function initTextAnimations() {
        const textElements = document.querySelectorAll('.text-reveal');
        
        if (!textElements.length) return;
        
        textElements.forEach(element => {
            const text = element.textContent;
            element.textContent = '';
            element.style.opacity = '1';
            
            text.split('').forEach((char, index) => {
                const span = document.createElement('span');
                span.textContent = char === ' ' ? '\u00A0' : char;
                span.style.opacity = '0';
                span.style.display = 'inline-block';
                span.style.animation = `fadeInUp 0.5s ${index * 0.03}s forwards`;
                element.appendChild(span);
            });
        });
    }
    
    /**
     * Enhanced hover effects
     */
    function initHoverEffects() {
        // Magnetic buttons
        const magneticButtons = document.querySelectorAll('.btn');
        
        magneticButtons.forEach(button => {
            button.addEventListener('mousemove', function(e) {
                const rect = button.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                
                button.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px)`;
            });
            
            button.addEventListener('mouseleave', function() {
                button.style.transform = '';
            });
        });
        
        // Ripple effect on click
        const rippleElements = document.querySelectorAll('.btn, .card');
        
        rippleElements.forEach(element => {
            element.classList.add('ripple-container');
            
            element.addEventListener('click', function(e) {
                const ripple = document.createElement('span');
                ripple.classList.add('ripple');
                
                const rect = element.getBoundingClientRect();
                const size = Math.max(rect.width, rect.height);
                const x = e.clientX - rect.left - size / 2;
                const y = e.clientY - rect.top - size / 2;
                
                ripple.style.width = ripple.style.height = size + 'px';
                ripple.style.left = x + 'px';
                ripple.style.top = y + 'px';
                
                element.appendChild(ripple);
                
                setTimeout(() => {
                    ripple.remove();
                }, 600);
            });
        });
    }
    
    /**
     * Loading state animations
     */
    function initLoadingAnimations() {
        // Skeleton loading simulation
        const skeletons = document.querySelectorAll('.skeleton');
        
        if (!skeletons.length) return;
        
        // Simulate content loading after 2 seconds
        setTimeout(() => {
            skeletons.forEach(skeleton => {
                skeleton.style.opacity = '0';
                setTimeout(() => {
                    skeleton.style.display = 'none';
                }, 300);
            });
        }, 2000);
    }
    
    /**
     * Typewriter effect for hero text
     */
    function initTypewriterEffect() {
        const typewriterElements = document.querySelectorAll('.typewriter');
        
        if (!typewriterElements.length) return;
        
        typewriterElements.forEach(element => {
            const text = element.dataset.text || element.textContent;
            element.textContent = '';
            element.style.opacity = '1';
            
            let charIndex = 0;
            
            function type() {
                if (charIndex < text.length) {
                    element.textContent += text.charAt(charIndex);
                    charIndex++;
                    setTimeout(type, 100);
                }
            }
            
            // Start typing when element is in viewport
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        type();
                        observer.unobserve(entry.target);
                    }
                });
            }, config);
            
            observer.observe(element);
        });
    }
    
    // ========================================
    // FORM HANDLING
    // ========================================
    
    /**
     * Form validation and handling
     */
    function initForms() {
        const forms = document.querySelectorAll('form');
        
        forms.forEach(form => {
            form.addEventListener('submit', function(e) {
                e.preventDefault();
                
                if (validateForm(form)) {
                    // Show success message
                    showNotification('Form submitted successfully!', 'success');
                    
                    // Reset form
                    form.reset();
                    
                    // Trigger confetti animation
                    const rect = form.getBoundingClientRect();
                    if (window.triggerConfetti) {
                        window.triggerConfetti(
                            rect.left + rect.width / 2,
                            rect.top + rect.height / 2
                        );
                    }
                }
            });
            
            // Real-time validation
            const inputs = form.querySelectorAll('input, textarea, select');
            inputs.forEach(input => {
                input.addEventListener('blur', function() {
                    validateField(input);
                });
                
                input.addEventListener('input', function() {
                    if (input.classList.contains('error')) {
                        validateField(input);
                    }
                });
            });
        });
    }
    
    /**
     * Validate individual form field
     */
    function validateField(field) {
        const value = field.value.trim();
        let isValid = true;
        let errorMessage = '';
        
        // Remove existing error
        field.classList.remove('error', 'success');
        const errorElement = field.parentElement.querySelector('.form-error');
        if (errorElement) {
            errorElement.remove();
        }
        
        // Required field validation
        if (field.hasAttribute('required') && !value) {
            isValid = false;
            errorMessage = 'This field is required';
        }
        
        // Email validation
        if (field.type === 'email' && value) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) {
                isValid = false;
                errorMessage = 'Please enter a valid email address';
            }
        }
        
        // Phone validation
        if (field.type === 'tel' && value) {
            const phoneRegex = /^[\d\s\-\+\(\)]+$/;
            if (!phoneRegex.test(value)) {
                isValid = false;
                errorMessage = 'Please enter a valid phone number';
            }
        }
        
        // Update field state
        if (!isValid) {
            field.classList.add('error');
            const error = document.createElement('div');
            error.className = 'form-error';
            error.textContent = errorMessage;
            field.parentElement.appendChild(error);
        } else if (value) {
            field.classList.add('success');
        }
        
        return isValid;
    }
    
    /**
     * Validate entire form
     */
    function validateForm(form) {
        const fields = form.querySelectorAll('input, textarea, select');
        let isValid = true;
        
        fields.forEach(field => {
            if (!validateField(field)) {
                isValid = false;
            }
        });
        
        return isValid;
    }
    
    // ========================================
    // MODAL FUNCTIONALITY
    // ========================================
    
    /**
     * Modal functionality
     */
    function initModals() {
        // Create modal container if it doesn't exist
        if (!document.getElementById('modalContainer')) {
            const modalContainer = document.createElement('div');
            modalContainer.id = 'modalContainer';
            document.body.appendChild(modalContainer);
        }
        
        // Modal triggers
        document.addEventListener('click', function(e) {
            if (e.target.matches('[data-modal-trigger]')) {
                const modalId = e.target.dataset.modalTrigger;
                openModal(modalId);
            }
            
            if (e.target.matches('[data-modal-close]')) {
                closeModal();
            }
            
            if (e.target.matches('.modal-overlay')) {
                closeModal();
            }
        });
        
        // ESC key to close modal
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                closeModal();
            }
        });
    }
    
    /**
     * Open modal
     */
    function openModal(modalId) {
        const modalContent = document.getElementById(modalId);
        if (!modalContent) return;
        
        const modalContainer = document.getElementById('modalContainer');
        
        modalContainer.innerHTML = `
            <div class="modal-overlay" style="position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0,0,0,0.5); display: flex; align-items: center; justify-content: center; z-index: 9999;">
                <div class="modal-content card" style="max-width: 500px; width: 90%; max-height: 90vh; overflow-y: auto;">
                    <button class="btn btn-ghost" data-modal-close style="position: absolute; top: 10px; right: 10px;">✕</button>
                    ${modalContent.innerHTML}
                </div>
            </div>
        `;
        
        modalContainer.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
    
    /**
     * Close modal
     */
    function closeModal() {
        const modalContainer = document.getElementById('modalContainer');
        if (modalContainer) {
            modalContainer.style.display = 'none';
            modalContainer.innerHTML = '';
            document.body.style.overflow = '';
        }
    }
    
    // ========================================
    // TOOLTIPS
    // ========================================
    
    /**
     * Tooltip functionality
     */
    function initTooltips() {
        const tooltipTriggers = document.querySelectorAll('[data-tooltip]');
        
        tooltipTriggers.forEach(trigger => {
            let tooltip = null;
            
            trigger.addEventListener('mouseenter', function() {
                const text = this.dataset.tooltip;
                const position = this.dataset.tooltipPosition || 'top';
                
                tooltip = createTooltip(text, this, position);
            });
            
            trigger.addEventListener('mouseleave', function() {
                if (tooltip) {
                    tooltip.remove();
                    tooltip = null;
                }
            });
        });
    }
    
    /**
     * Create tooltip element
     */
    function createTooltip(text, trigger, position) {
        const tooltip = document.createElement('div');
        tooltip.className = 'tooltip';
        tooltip.textContent = text;
        tooltip.style.cssText = `
            position: absolute;
            background: var(--primary-dark);
            color: var(--primary-white);
            padding: 8px 12px;
            border-radius: var(--radius-lg);
            font-size: var(--text-sm);
            white-space: nowrap;
            z-index: 9999;
            pointer-events: none;
            opacity: 0;
            transition: opacity 0.3s;
        `;
        
        document.body.appendChild(tooltip);
        
        const rect = trigger.getBoundingClientRect();
        const tooltipRect = tooltip.getBoundingClientRect();
        
        switch(position) {
            case 'top':
                tooltip.style.left = rect.left + rect.width / 2 - tooltipRect.width / 2 + 'px';
                tooltip.style.top = rect.top - tooltipRect.height - 10 + 'px';
                break;
            case 'bottom':
                tooltip.style.left = rect.left + rect.width / 2 - tooltipRect.width / 2 + 'px';
                tooltip.style.top = rect.bottom + 10 + 'px';
                break;
            case 'left':
                tooltip.style.left = rect.left - tooltipRect.width - 10 + 'px';
                tooltip.style.top = rect.top + rect.height / 2 - tooltipRect.height / 2 + 'px';
                break;
            case 'right':
                tooltip.style.left = rect.right + 10 + 'px';
                tooltip.style.top = rect.top + rect.height / 2 - tooltipRect.height / 2 + 'px';
                break;
        }
        
        setTimeout(() => {
            tooltip.style.opacity = '1';
        }, 10);
        
        return tooltip;
    }
    
    // ========================================
    // TABS & ACCORDIONS
    // ========================================
    
    /**
     * Tab functionality
     */
    function initTabs() {
        const tabGroups = document.querySelectorAll('[data-tabs]');
        
        tabGroups.forEach(group => {
            const tabs = group.querySelectorAll('[data-tab]');
            const panels = group.querySelectorAll('[data-tab-panel]');
            
            tabs.forEach(tab => {
                tab.addEventListener('click', function() {
                    const targetPanel = this.dataset.tab;
                    
                    // Update active states
                    tabs.forEach(t => t.classList.remove('active'));
                    panels.forEach(p => p.classList.remove('active'));
                    
                    this.classList.add('active');
                    const panel = group.querySelector(`[data-tab-panel="${targetPanel}"]`);
                    if (panel) {
                        panel.classList.add('active');
                    }
                });
            });
        });
    }
    
    /**
     * Accordion functionality
     */
    function initAccordions() {
        const accordions = document.querySelectorAll('[data-accordion]');
        
        accordions.forEach(accordion => {
            const triggers = accordion.querySelectorAll('[data-accordion-trigger]');
            
            triggers.forEach(trigger => {
                trigger.addEventListener('click', function() {
                    const content = this.nextElementSibling;
                    const isOpen = this.classList.contains('active');
                    
                    // Close all if exclusive
                    if (accordion.dataset.accordion === 'exclusive') {
                        triggers.forEach(t => {
                            t.classList.remove('active');
                            if (t.nextElementSibling) {
                                t.nextElementSibling.style.maxHeight = '0';
                            }
                        });
                    }
                    
                    // Toggle current
                    if (!isOpen) {
                        this.classList.add('active');
                        content.style.maxHeight = content.scrollHeight + 'px';
                    } else {
                        this.classList.remove('active');
                        content.style.maxHeight = '0';
                    }
                });
            });
        });
    }
    
    // ========================================
    // NOTIFICATIONS
    // ========================================
    
    /**
     * Notification system
     */
    function initNotifications() {
        // Create notification container
        if (!document.getElementById('notificationContainer')) {
            const container = document.createElement('div');
            container.id = 'notificationContainer';
            container.style.cssText = `
                position: fixed;
                top: 80px;
                right: 20px;
                z-index: 9999;
                display: flex;
                flex-direction: column;
                gap: 10px;
            `;
            document.body.appendChild(container);
        }
    }
    
    /**
     * Show notification
     */
    window.showNotification = function(message, type = 'info', duration = 5000) {
        const container = document.getElementById('notificationContainer');
        
        const notification = document.createElement('div');
        notification.className = `card animate-fade-in-right`;
        notification.style.cssText = `
            padding: 16px 20px;
            min-width: 300px;
            display: flex;
            align-items: center;
            gap: 12px;
            border-left: 4px solid var(--${type});
        `;
        
        const icon = getNotificationIcon(type);
        const iconElement = document.createElement('div');
        iconElement.innerHTML = icon;
        iconElement.style.color = `var(--${type})`;
        
        const text = document.createElement('div');
        text.textContent = message;
        
        const closeBtn = document.createElement('button');
        closeBtn.innerHTML = '✕';
        closeBtn.className = 'btn btn-ghost btn-sm';
        closeBtn.style.marginLeft = 'auto';
        closeBtn.onclick = () => notification.remove();
        
        notification.appendChild(iconElement);
        notification.appendChild(text);
        notification.appendChild(closeBtn);
        
        container.appendChild(notification);
        
        // Auto remove
        setTimeout(() => {
            notification.style.animation = 'fadeOutRight 0.3s';
            setTimeout(() => notification.remove(), 300);
        }, duration);
    };
    
    /**
     * Get notification icon based on type
     */
    function getNotificationIcon(type) {
        const icons = {
            success: '✓',
            error: '✕',
            warning: '⚠',
            info: 'ℹ'
        };
        return icons[type] || icons.info;
    }
    
    // ========================================
    // DROPDOWNS & SEARCH
    // ========================================
    
    /**
     * Dropdown functionality
     */
    function initDropdowns() {
        const dropdowns = document.querySelectorAll('[data-dropdown]');
        
        dropdowns.forEach(dropdown => {
            const trigger = dropdown.querySelector('[data-dropdown-trigger]');
            const content = dropdown.querySelector('[data-dropdown-content]');
            
            if (!trigger || !content) return;
            
            trigger.addEventListener('click', function(e) {
                e.stopPropagation();
                const isOpen = content.classList.contains('active');
                
                // Close all dropdowns
                document.querySelectorAll('[data-dropdown-content]').forEach(c => {
                    c.classList.remove('active');
                });
                
                // Toggle current
                if (!isOpen) {
                    content.classList.add('active');
                }
            });
        });
        
        // Close dropdowns on outside click
        document.addEventListener('click', function() {
            document.querySelectorAll('[data-dropdown-content]').forEach(content => {
                content.classList.remove('active');
            });
        });
    }
    
    /**
     * Search components
     */
    function initSearchComponents() {
        const searchInputs = document.querySelectorAll('[data-search]');
        
        searchInputs.forEach(input => {
            const targetSelector = input.dataset.search;
            const targets = document.querySelectorAll(targetSelector);
            
            input.addEventListener('input', function() {
                const query = this.value.toLowerCase();
                
                targets.forEach(target => {
                    const text = target.textContent.toLowerCase();
                    if (text.includes(query)) {
                        target.style.display = '';
                    } else {
                        target.style.display = 'none';
                    }
                });
            });
        });
    }
    
    // ========================================
    // UTILITY FUNCTIONS
    // ========================================
    
    /**
     * Utility function to debounce events
     */
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
    
    /**
     * Handle window resize
     */
    window.addEventListener('resize', debounce(function() {
        // Close mobile menu on resize to desktop
        if (window.innerWidth > 768) {
            if (menuToggle && menuToggle.classList.contains('active')) {
                menuToggle.classList.remove('active');
                mobileNav.classList.remove('active');
                document.body.style.overflow = '';
            }
        }
    }, 250));
    
    // ========================================
    // GLOBAL UTILITY FUNCTIONS
    // ========================================
    
    /**
     * Smooth counter animation
     */
    window.animateValue = function(element, start, end, duration) {
        const startTimestamp = Date.now();
        const step = () => {
            const timestamp = Date.now();
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            const value = Math.floor(progress * (end - start) + start);
            
            element.textContent = value.toLocaleString();
            
            if (progress < 1) {
                window.requestAnimationFrame(step);
            } else {
                element.textContent = end.toLocaleString();
            }
        };
        
        window.requestAnimationFrame(step);
    };
    
    /**
     * Morph SVG paths
     */
    window.morphPath = function(element, newPath, duration = 1000) {
        const oldPath = element.getAttribute('d');
        const startTime = Date.now();
        
        function animate() {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            if (progress < 1) {
                requestAnimationFrame(animate);
            } else {
                element.setAttribute('d', newPath);
            }
        }
        
        animate();
    };
    
    /**
     * Stagger animation for lists
     */
    window.staggerAnimate = function(selector, animationClass, delay = 100) {
        const elements = document.querySelectorAll(selector);
        
        elements.forEach((element, index) => {
            setTimeout(() => {
                element.classList.add(animationClass);
            }, index * delay);
        });
    };
    
    /**
     * Confetti animation for success states
     */
    window.triggerConfetti = function(x, y) {
        const colors = ['#22C55E', '#10B981', '#14B8A6', '#F59E0B'];
        const confettiCount = 30;
        
        for (let i = 0; i < confettiCount; i++) {
            const confetti = document.createElement('div');
            confetti.style.position = 'fixed';
            confetti.style.width = '10px';
            confetti.style.height = '10px';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.left = x + 'px';
            confetti.style.top = y + 'px';
            confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
            confetti.style.pointerEvents = 'none';
            confetti.style.zIndex = '9999';
            
            document.body.appendChild(confetti);
            
            const angle = (Math.PI * 2 * i) / confettiCount;
            const velocity = 5 + Math.random() * 5;
            const fadeOutTime = 1000 + Math.random() * 1000;
            
            let posX = 0;
            let posY = 0;
            let opacity = 1;
            let rotation = Math.random() * 360;
            
            function updateConfetti() {
                posX += Math.cos(angle) * velocity;
                posY += Math.sin(angle) * velocity + 2;
                opacity -= 1 / (fadeOutTime / 16);
                rotation += 10;
                
                confetti.style.transform = `translate(${posX}px, ${posY}px) rotate(${rotation}deg)`;
                confetti.style.opacity = opacity;
                
                if (opacity > 0) {
                    requestAnimationFrame(updateConfetti);
                } else {
                    confetti.remove();
                }
            }
            
            requestAnimationFrame(updateConfetti);
        }
    };
    
    /**
     * Smooth scroll to element
     */
    window.smoothScrollTo = function(element, offset = 100) {
        const targetPosition = element.getBoundingClientRect().top + window.pageYOffset - offset;
        
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    };
    
    /**
     * Pulse animation for notifications
     */
    window.pulseElement = function(element, times = 3) {
        let count = 0;
        
        function pulse() {
            element.classList.add('animate-pulse');
            
            setTimeout(() => {
                element.classList.remove('animate-pulse');
                count++;
                
                if (count < times) {
                    setTimeout(pulse, 500);
                }
            }, 500);
        }
        
        pulse();
    };
    
    /**
     * Copy to clipboard functionality
     */
    window.copyToClipboard = function(text) {
        const textarea = document.createElement('textarea');
        textarea.value = text;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        
        showNotification('Copied to clipboard!', 'success', 2000);
    };
    
    /**
     * Format number with commas
     */
    window.formatNumber = function(num) {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    };
    
    /**
     * Debounce function for performance
     */
    window.debounce = function(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    };
    
})();