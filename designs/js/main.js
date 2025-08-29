/**
 * Inventure Recruitment Platform - Main JavaScript
 * Core functionality and initialization
 */

(function() {
    'use strict';
    
    // DOM Elements
    const header = document.getElementById('header');
    const menuToggle = document.getElementById('menuToggle');
    const mobileNav = document.getElementById('mobileNav');
    const navLinks = document.querySelectorAll('.nav-link');
    const particlesContainer = document.getElementById('particles');
    
    // Initialize on DOM load
    document.addEventListener('DOMContentLoaded', function() {
        initializeHeader();
        initializeMobileMenu();
        initializeSmoothScroll();
        initializeParticles();
        initializeScrollReveal();
        initializeProgressBars();
    });
    
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
        if (!menuToggle || !mobileNav) return;
        
        menuToggle.addEventListener('click', function() {
            const isActive = menuToggle.classList.contains('active');
            
            if (isActive) {
                menuToggle.classList.remove('active');
                mobileNav.classList.remove('active');
                document.body.style.overflow = '';
            } else {
                menuToggle.classList.add('active');
                mobileNav.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        });
        
        // Close mobile menu when clicking nav links
        const mobileNavLinks = mobileNav.querySelectorAll('.nav-link');
        mobileNavLinks.forEach(link => {
            link.addEventListener('click', function() {
                menuToggle.classList.remove('active');
                mobileNav.classList.remove('active');
                document.body.style.overflow = '';
            });
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
        const counters = document.querySelectorAll('.stat-value');
        const speed = 200;
        
        counters.forEach(counter => {
            const animate = () => {
                const value = counter.innerText;
                const target = parseInt(value.replace(/[^0-9]/g, ''));
                
                if (isNaN(target)) return;
                
                const count = +counter.innerText.replace(/[^0-9]/g, '');
                const inc = target / speed;
                
                if (count < target) {
                    counter.innerText = Math.ceil(count + inc);
                    setTimeout(animate, 1);
                } else {
                    counter.innerText = value;
                }
            };
            
            // Start animation when in viewport
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        counter.innerText = '0';
                        animate();
                        observer.unobserve(entry.target);
                    }
                });
            });
            
            observer.observe(counter);
        });
    }
    
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
    
})();