document.addEventListener('DOMContentLoaded', function() {
    const scrollDownLink = document.querySelector('.scroll-down a');
    const projectsSection = document.getElementById('projects');

    scrollDownLink.addEventListener('click', function(event) {
        event.preventDefault();
        projectsSection.scrollIntoView({
            behavior: 'smooth'
        });
    });
});