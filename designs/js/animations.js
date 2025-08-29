/**
 * Inventure Recruitment Platform - Animations
 * Advanced animation controllers and effects
 */

(function() {
    'use strict';
    
    // Animation configuration
    const config = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    /**
     * Initialize all animations
     */
    document.addEventListener('DOMContentLoaded', function() {
        initParallaxEffects();
        initTextAnimations();
        initHoverEffects();
        initLoadingAnimations();
        initTypewriterEffect();
    });
    
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
    
})();