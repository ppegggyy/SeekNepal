// ===== MAIN.JS - BROWSE PAGE FUNCTIONALITY =====

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    displayPosts();
});

// Function to display all posts on browse page
function displayPosts() {
    const postsGrid = document.getElementById('postsGrid');
    
    if (!postsGrid) return; // Exit if not on browse page

    // Clear existing content
    postsGrid.innerHTML = '';

    // Loop through each post and create card
    posts.forEach(post => {
        const postCard = createPostCard(post);
        postsGrid.appendChild(postCard);
    });
}

// Function to create a post card element
function createPostCard(post) {
    // Create card container
    const card = document.createElement('div');
    card.className = 'post-card';

    // Create badge
    const badge = document.createElement('div');
    badge.className = 'badge';
    badge.textContent = post.category;

    // Create title
    const title = document.createElement('h3');
    title.textContent = post.title;

    // Create description
    const description = document.createElement('p');
    description.textContent = post.description;

    // Create mode indicator
    const mode = document.createElement('span');
    mode.className = 'post-mode';
    mode.innerHTML = `${post.mode === 'Online' ? '🌐' : '📍'} ${post.mode}`;

    // Create apply button
    const applyBtn = document.createElement('button');
    applyBtn.className = 'btn-apply';
    applyBtn.textContent = 'Apply to Teach';
    applyBtn.onclick = function() {
        openModal(post);
    };

    // Append all elements to card
    card.appendChild(badge);
    card.appendChild(title);
    card.appendChild(description);
    card.appendChild(mode);
    card.appendChild(applyBtn);

    return card;
}