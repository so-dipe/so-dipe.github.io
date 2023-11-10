window.addEventListener('scroll', function() {
    var scrollValue = window.scrollY;
    var img = document.getElementById('profile-picture');
    var main = document.getElementById('main-section')
    var mainhead = main.getElementsByTagName('h2')
    var header = document.querySelector('header');
    var content = document.querySelector('body');

    if (scrollValue > 50) {
        if (window.innerWidth > 768) {
            img.style.width = '100px';
            img.style.height = '100px';
            content.style.paddingTop = '29%';
        } else if (window.innerWidth < 768) {
            img.style.width = '50px';
            img.style.height = '50px';
            img.style.marginLeft = '0px'
            content.style.paddingTop = '70%';
            for (var i = 0; i < mainhead.length; i++) {
                mainhead[i].style.fontSize = '20px';
            }
            main.style.margin = '1.5vh auto';
        }
        img.style.position = 'fixed';
        img.style.top = '10px';
        img.style.left = '10px';
        img.style.transform = 'translateX(-1%)';
        header.classList.add('transition');
        header.style.position = 'fixed';
        header.style.top = '0';
        header.style.width = '100%';
        header.style.zIndex = '1000';
        // content.style.paddingTop = '25%'; // Adjust this value to fit your header height
    } else {
        if (window.innerWidth > 768) {
            img.style.width = '500px';
            img.style.height = '500px';
        } else if (window.innerWidth < 768) {
            img.style.width = '200px';
            img.style.height = '200px';
            // img.style.marginLeft = '-20%'
        }
        img.style.position = 'relative';
        img.style.top = 'unset';
        img.style.left = 'unset';
        img.style.transform = 'translateX(0)';
        header.classList.remove('transition');
        header.style.position = 'relative';
        content.style.paddingTop = '0';
    }
});


function toggleDarkMode() {
    const body = document.querySelector('body');
    const header = document.querySelector('header');
    const mainContent = document.querySelector('.section-style');
    const footer = document.querySelector('footer');

    body.classList.toggle('dark-mode');
    header.classList.toggle('dark-mode');
    // mainContent.classList.toggle('dark-mode');
    footer.classList.toggle('dark-mode');

    // Storing dark mode preference in localStorage
    const isDarkMode = body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDarkMode);
}

function toggleDyslexicFont() {
    const body = document.querySelector('body');
    const isDyslexicFont = body.classList.contains('dyslexic-font');

    if (!isDyslexicFont) {
        body.classList.add('dyslexic-font');
    } else {
        body.classList.remove('dyslexic-font');
    }

    // Storing dyslexic font preference in localStorage
    localStorage.setItem('dyslexicFont', !isDyslexicFont);
}

function toggleMenu() {
    var menu = document.querySelector('.menu');
    menu.classList.toggle('active');
    const menuIcon = document.querySelector('.menu-icon');
    menuIcon.classList.toggle('change');
}

function toggleDyslexicFont() {
    const isDyslexicFont = localStorage.getItem('dyslexicFont') === 'true';
    const onImage = document.querySelector('.on-image');
    const offImage = document.querySelector('.off-image');

    if (isDyslexicFont) {
        document.body.classList.remove('dyslexic-font');
        localStorage.setItem('dyslexicFont', 'false');
        onImage.style.display = 'none';
        offImage.style.display = 'block';
    } else {
        document.body.classList.add('dyslexic-font');
        localStorage.setItem('dyslexicFont', 'true');
        onImage.style.display = 'block';
        offImage.style.display = 'none';
    }
}



document.addEventListener('DOMContentLoaded', function() {
    const darkModeIcon = document.querySelector('.dark-mode-icon');
    let clicked = localStorage.getItem('rotationClicked') === 'true';

    darkModeIcon.addEventListener('click', function() {
        if (!clicked) {
            darkModeIcon.classList.add('rotate');
        } else {
            darkModeIcon.classList.remove('rotate');
        }
        clicked = !clicked;
        localStorage.setItem('rotationClicked', clicked);
    });

    const isDarkMode = localStorage.getItem('darkMode') !== 'false'; // Update this line
    if (isDarkMode) {
        toggleDarkMode();
    }
    if (clicked) {
        darkModeIcon.classList.add('rotate');
    }

    const isDyslexicFont = localStorage.getItem('dyslexicFont') === 'true';
    const onImage = document.querySelector('.on-image');
    const offImage = document.querySelector('.off-image');

    if (isDyslexicFont) {
        document.body.classList.add('dyslexic-font');
        onImage.style.display = 'block';
        offImage.style.display = 'none';
    } else {
        document.body.classList.remove('dyslexic-font');
        onImage.style.display = 'none';
        offImage.style.display = 'block';
    }
});

