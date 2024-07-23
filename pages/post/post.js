document.addEventListener("DOMContentLoaded", function () {
    const shareButton = document.getElementById("sharePostButton");
    const usernameInput = document.getElementById("username");
    const postContentTextarea = document.getElementById("postContent");

    shareButton.addEventListener("click", function () {
        const username = usernameInput.value.trim();
        const postContent = postContentTextarea.value.trim();

        if (!username || !postContent) {
            alert("Please fill in both username and post content.");
            return;
        }

        let posts = JSON.parse(localStorage.getItem("posts")) || [];
        posts.push({ username: "@"+username, content: postContent });
        localStorage.setItem("posts", JSON.stringify(posts));

        // Dynamically set the redirection path to ensure it works in different environments
        const basePath = window.location.href.replace(window.location.pathname, '');
        window.location.href = `${basePath}/index.html`;
    });
});