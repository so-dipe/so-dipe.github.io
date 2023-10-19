window.addEventListener('scroll', function() {
    var scrollValue = window.scrollY;
    var img = document.querySelector('#main-section img');
    var header = document.querySelector('header');
    var content = document.querySelector('body');

    if (scrollValue > 50) {
        img.style.width = '150px';
        img.style.height = '150px';
        img.style.position = 'fixed';
        img.style.top = '10px';
        img.style.left = '10px';
        img.style.transform = 'translateX(-1%)';
        header.classList.add('transition');
        header.style.position = 'fixed';
        header.style.top = '0';
        header.style.width = '100%';
        header.style.zIndex = '1000';
        content.style.paddingTop = '25%'; // Adjust this value to fit your header height
    } else {
        img.style.width = '500px';
        img.style.height = '500px';
        img.style.position = 'relative';
        img.style.top = 'unset';
        img.style.left = 'unset';
        img.style.transform = 'translateX(0)';
        header.classList.remove('transition');
        header.style.position = 'relative';
        content.style.paddingTop = '0';
    }
});

// Copyright
const yearElement = document.getElementById('year');
const currentYear = new Date().getFullYear();
yearElement.textContent = `&copy; ${currentYear} s-odipe`;
