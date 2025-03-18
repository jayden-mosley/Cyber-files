// Toggle the mobile menu when the hamburger icon is clicked
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


let currentIndex = {
    "tech-digest": 0,
    "projects": 0,
    "exploring-life": 0
};

const postsPerPage = 3; // Adjust the number of posts per page

function showPosts(sectionId) {
    const posts = document.querySelectorAll(`#${sectionId} .blog-post`);
    const totalPages = Math.ceil(posts.length / postsPerPage);
    const startIndex = currentIndex[sectionId] * postsPerPage;
    const endIndex = startIndex + postsPerPage;

    posts.forEach((post, i) => {
        if (i >= startIndex && i < endIndex) {
            post.style.display = "block";
        } else {
            post.style.display = "none";
        }
    });
}

function prevPost(sectionId) {
    const posts = document.querySelectorAll(`#${sectionId} .blog-post`);
    const totalPages = Math.ceil(posts.length / postsPerPage);
    currentIndex[sectionId] = (currentIndex[sectionId] === 0) ? totalPages - 1 : currentIndex[sectionId] - 1;
    showPosts(sectionId);
}

function nextPost(sectionId) {
    const posts = document.querySelectorAll(`#${sectionId} .blog-post`);
    const totalPages = Math.ceil(posts.length / postsPerPage);
    currentIndex[sectionId] = (currentIndex[sectionId] === totalPages - 1) ? 0 : currentIndex[sectionId] + 1;
    showPosts(sectionId);
}

// Initialize all sections on page load
document.addEventListener("DOMContentLoaded", function() {
    showPosts("tech-digest");
    showPosts("projects");
    showPosts("exploring-life");
});
