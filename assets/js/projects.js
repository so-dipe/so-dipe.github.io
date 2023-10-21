document.addEventListener('DOMContentLoaded', function() {
    const projects = document.querySelectorAll('.project');
    projects.forEach(project => {
        const projectTitle = project.querySelector('.project-title');
        const icon = projectTitle.querySelector('i');
        projectTitle.addEventListener('click', function(event) {
            const details = project.querySelector('.details');
            details.style.display = details.style.display === 'none' ? 'block' : 'none';
            if (icon.classList.contains('fa-chevron-down')) {
                icon.classList.remove('fa-chevron-down');
                icon.classList.add('fa-minus');
            } else {
                icon.classList.remove('fa-minus');
                icon.classList.add('fa-chevron-down');
            }
        });
    });
});



