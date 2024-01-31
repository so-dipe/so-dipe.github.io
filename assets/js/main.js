document.querySelector('.nav-icon').addEventListener('click', function() {
    document.getElementById('nav').classList.toggle('open');
});

document.querySelector('.nav-icon').addEventListener('click', function() {
    this.classList.toggle('open');
});

if (localStorage.getItem('dark-mode') === 'true') {
    document.body.classList.add('dark-mode');
    document.getElementById('dark-mode-toggle').textContent = 'light up this room';
} else {
    document.getElementById('dark-mode-toggle').textContent = 'turn off the lights';
}

document.getElementById('dark-mode-toggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        this.textContent = 'light up this room';
        localStorage.setItem('dark-mode', 'true');
    } else {
        this.textContent = 'turn off the lights';
        localStorage.setItem('dark-mode', 'false');
    }
});

if (localStorage.getItem('dyslexic-font') === 'true') {
    document.body.classList.add('dyslexic-font');
    document.getElementById('font-toggle').textContent = 'normies';
} else {
    document.getElementById('font-toggle').textContent = 'dyslexic';
}

document.getElementById('font-toggle').addEventListener('click', function() {
    document.body.classList.toggle('dyslexic-font');
    if (document.body.classList.contains('dyslexic-font')) {
        this.textContent = 'normies';
        localStorage.setItem('dyslexic-font', 'true');
    } else {
        this.textContent = 'dyslexic';
        localStorage.setItem('dyslexic-font', 'false');
    }
});

