/**
 * Inventure Recruitment Platform - Components
 * Reusable component behaviors and interactions
 */

(function() {
    'use strict';
    
    /**
     * Initialize all components
     */
    document.addEventListener('DOMContentLoaded', function() {
        initForms();
        initModals();
        initTooltips();
        initTabs();
        initAccordions();
        initNotifications();
        initDropdowns();
        initSearchComponents();
    });
    
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