// ===== MODAL.JS - APPLICATION MODAL FUNCTIONALITY =====

let currentPost = null;

// Function to open modal
function openModal(post) {
    currentPost = post;
    const modal = document.getElementById('applicationModal');
    const modalTitle = document.getElementById('modalTitle');
    
    // Update modal title with post title
    modalTitle.textContent = `Apply to Teach: ${post.title}`;
    
    // Show modal
    modal.classList.add('active');
    
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';
}

// Function to close modal
function closeModal() {
    const modal = document.getElementById('applicationModal');
    const form = document.getElementById('applicationForm');
    
    // Hide modal
    modal.classList.remove('active');
    
    // Reset form
    form.reset();
    
    // Restore body scroll
    document.body.style.overflow = 'auto';
    
    currentPost = null;
}

// Handle form submission
document.addEventListener('DOMContentLoaded', function() {
    const applicationForm = document.getElementById('applicationForm');
    
    if (applicationForm) {
        applicationForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = {
                tutorName: document.getElementById('tutorName').value,
                tutorEmail: document.getElementById('tutorEmail').value,
                tutorExperience: document.getElementById('tutorExperience').value,
                post: currentPost
            };
            
            // Show success message
            alert('Application submitted successfully! The learner will contact you soon.');
            
            // Close modal
            closeModal();
        });
    }
});

// Close modal when clicking outside
window.addEventListener('click', function(event) {
    const modal = document.getElementById('applicationModal');
    if (event.target === modal) {
        closeModal();
    }
});

// Close modal on ESC key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        const modal = document.getElementById('applicationModal');
        if (modal && modal.classList.contains('active')) {
            closeModal();
        }
    }
});
