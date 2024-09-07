document.addEventListener('DOMContentLoaded', function() {
    // Select the menu icon and the nav-links
    const menuIcon = document.querySelector('.menu-icon');
    const navLinks = document.querySelector('.nav-links');

    // Add a click event listener to the menu icon
    menuIcon.addEventListener('click', () => {
        // Toggle the 'active' class on the nav-links
        navLinks.classList.toggle('active');
    });
});
