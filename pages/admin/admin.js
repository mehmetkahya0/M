// Assuming this is the complete admin.js file

document.addEventListener("DOMContentLoaded", function () {
  fetchPosts();
  document.getElementById("addPostBtn").addEventListener("click", addNewPost);
});

function isAdmin() {
  // Placeholder for admin check
  // Implement your actual logic to verify if the current user is an admin
  return true; // Assuming the user is an admin for this example
}

function fetchPosts() {
  const storedPosts = localStorage.getItem("posts");
  let posts;
  if (storedPosts) {
    posts = JSON.parse(storedPosts);
  } else {
    posts = []; // Assuming an empty array if no posts are stored
  }

  const postsList = document.getElementById("postsList");
  postsList.innerHTML = ""; // Clear existing posts to avoid duplication
  posts.forEach((post) => {
    const li = document.createElement("li");

    // Assuming post object contains 'title' and 'content' properties
    const title = document.createElement("h3");
    title.textContent = post.title;
    li.appendChild(title);

    if (post.content) {
      // Check if the post has content and display it
      const content = document.createElement("p");
      content.textContent = post.content; // Assuming 'content' is a property of your post object
      li.appendChild(content);
    }

    if (isAdmin()) {
      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      deleteButton.onclick = function () {
        deletePost(post.id);
      };
      li.appendChild(deleteButton);
    }

    postsList.appendChild(li);
  });
}

function deletePost(postId) {
  // Assuming 'posts' is available in the scope or fetched from localStorage
  const storedPosts = JSON.parse(localStorage.getItem("posts")) || [];
  const updatedPosts = storedPosts.filter((post) => post.id !== postId);

  localStorage.setItem("posts", JSON.stringify(updatedPosts));

  // Re-render posts list. This could also be a direct DOM manipulation to remove the specific 'li'
  fetchPosts(); // Assuming fetchPosts is the function that renders the posts list
}

function addNewPost() {
  const postTitle = prompt("Enter the title of the new post:");
  if (postTitle) {
    const storedPosts = localStorage.getItem("posts");
    let posts = storedPosts ? JSON.parse(storedPosts) : [];
    const newPost = {
      id: Date.now(),
      title: postTitle,
      content: "Content placeholder",
    }; // Using timestamp as a simple unique ID and adding a content placeholder
    posts.push(newPost);
    localStorage.setItem("posts", JSON.stringify(posts));
    fetchPosts(); // Refresh the list of posts
  }
}
