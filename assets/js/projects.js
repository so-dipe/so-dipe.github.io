window.onload = function() {
    // Rotate the dropdown icon for the first project
    const firstDropdownIcon = document.querySelector('.project:first-child .dropdown-icon');
    firstDropdownIcon.style.transform = 'rotate(180deg)';

    // Collapse all other projects
    document.querySelectorAll('.project:not(:first-child)').forEach(function(project) {
        const dropdownIcon = project.querySelector('.dropdown-icon');
        const shortDescription = project.querySelector('.short-description');
        const moreDetails = project.querySelector('.more-details');
        dropdownIcon.style.transform = 'rotate(0deg)';
        moreDetails.style.display = 'none';
        shortDescription.style.display = 'block';
    });
};

document.querySelectorAll('.project-title').forEach(function(title) {
    title.addEventListener('click', function() {
        // Collapse all projects
        document.querySelectorAll('.project-title').forEach(function(otherTitle) {
            if (otherTitle !== title) {
                const otherDropdownIcon = otherTitle.querySelector('.dropdown-icon');
                const otherShortDescription = otherTitle.nextElementSibling;
                const otherMoreDetails = otherShortDescription.nextElementSibling;
                otherDropdownIcon.style.transform = 'rotate(0deg)';
                otherMoreDetails.style.display = 'none';
                otherShortDescription.style.display = 'block';
            }
        });
        // Expand or collapse this project
        const shortDescription = this.nextElementSibling;
        const moreDetails = shortDescription.nextElementSibling;
        const dropdownIcon = this.querySelector('.dropdown-icon');
        dropdownIcon.style.transform = dropdownIcon.style.transform === 'rotate(180deg)' ? 'rotate(0deg)' : 'rotate(180deg)';
        moreDetails.style.display = moreDetails.style.display === 'none' ? 'block' : 'none';
        shortDescription.style.display = moreDetails.style.display === 'none' ? 'block' : 'none';
    });
});
