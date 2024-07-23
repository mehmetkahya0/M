// Assuming there's an existing structure for posts, and each post has a unique ID

// Function to initialize like feature for posts
function initializeLikeFeature() {
    // Attach event listeners to like buttons
    document.querySelectorAll('.like-button').forEach(button => {
      button.addEventListener('click', function() {
        const postId = this.dataset.postId; // Assuming each button has 'data-post-id' attribute
        likePost(postId);
      });
    });
  }
  
  // Function to handle liking a post
  function likePost(postId) {
    // Placeholder for your logic to increment the like count
    // This could involve updating the UI and sending a request to the server
    console.log(`Post ${postId} liked!`);
    // Example: Increment like count in UI
    const likeCountElement = document.querySelector(`#like-count-${postId}`);
    const currentCount = parseInt(likeCountElement.textContent, 10);
    likeCountElement.textContent = currentCount + 1;
    
    // Optionally, send a request to the server to update the like count
    // fetch('/api/posts/like', { method: 'POST', body: JSON.stringify({ postId }), headers: { 'Content-Type': 'application/json' }});
  }
  
  // Example HTML structure for a post with a like button
  // <div class="post" id="post-1">
  //   <p>Post content here...</p>
  //   <button class="like-button" data-post-id="1">Like</button>
  //   <span id="like-count-1">0</span> Likes
  // </div>
  
  // Call initializeLikeFeature when the document is ready
  document.addEventListener('DOMContentLoaded', initializeLikeFeature);