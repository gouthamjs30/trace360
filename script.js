document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation
    const nav = document.querySelector('nav ul');
    const navToggle = document.createElement('div');
    navToggle.innerHTML = '&#9776;';
    navToggle.classList.add('nav-toggle');
    document.querySelector('nav').appendChild(navToggle);

    navToggle.addEventListener('click', () => {
        nav.classList.toggle('active');
    });

    // Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Form Validation
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', function(e) {
            let valid = true;
            const name = document.getElementById('name');
            const email = document.getElementById('email');
            const message = document.getElementById('message');

            if (name.value.trim() === '') {
                valid = false;
                alert('Please enter your name.');
            }

            if (email.value.trim() === '' || !validateEmail(email.value)) {
                valid = false;
                alert('Please enter a valid email address.');
            }

            if (message.value.trim() === '') {
                valid = false;
                alert('Please enter a message.');
            }

            if (!valid) {
                e.preventDefault();
            }
        });
    }

    function validateEmail(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
});
