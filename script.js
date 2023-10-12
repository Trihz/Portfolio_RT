function showContent(id) {
    // Hide all content divs
    const contents = document.querySelectorAll('.content');
    contents.forEach(content => {
        content.classList.remove('active');
    });

    // Show the clicked content
    const activeContent = document.getElementById(id);
    activeContent.classList.add('active');
}

// Initialize by showing the resume content on page load
window.onload = function () {
    showContent('introduction');
}
