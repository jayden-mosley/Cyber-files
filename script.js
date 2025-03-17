function toggleMenu() {
    document.querySelector(".nav-links").classList.toggle("active");
}

// Blog post navigation (for the arrows)
let currentIndex = 0;
const posts = document.querySelectorAll(".blog-post");

function showPost(index) {
    posts.forEach((post, i) => {
        post.style.display = i === index ? "block" : "none";
    });
}

function prevPost() {
    currentIndex = (currentIndex === 0) ? posts.length - 1 : currentIndex - 1;
    showPost(currentIndex);
}

function nextPost() {
    currentIndex = (currentIndex === posts.length - 1) ? 0 : currentIndex + 1;
    showPost(currentIndex);
}

// Initialize first post
showPost(currentIndex);
