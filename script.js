let currentIndex = 0;
const posts = document.querySelectorAll('.post');
const totalPosts = posts.length;

document.getElementById('nextBtn').addEventListener('click', () => {
    if (currentIndex < totalPosts - 1) {
        currentIndex++;
        updateCarousel();
    }
});

document.getElementById('prevBtn').addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateCarousel();
    }
});

function updateCarousel() {
    const offset = -currentIndex * 300; // Adjusts position based on index
    document.querySelector('.carousel').style.transform = `translateX(${offset}px)`;
}
