document.addEventListener('DOMContentLoaded', function() {
    const projects = document.querySelectorAll('.project');
    projects.forEach(project => {
        project.addEventListener('click', function(event) {
            const details = this.querySelector('.details');
            const icon = this.querySelector('i');
            if (!event.target.classList.contains('dropdown-icon')) {
                details.style.display = details.style.display === 'none' ? 'block' : 'none';
                if (icon.classList.contains('fa-chevron-down')) {
                    icon.classList.remove('fa-chevron-down');
                    icon.classList.add('fa-minus');
                } else {
                    icon.classList.remove('fa-minus');
                    icon.classList.add('fa-chevron-down');
                }
            }
        });
    });
});
