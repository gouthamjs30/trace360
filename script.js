document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation
    const nav = document.querySelector('nav ul');
    const navToggle = document.createElement('div');
    navToggle.innerHTML = '&#9776;';
    navToggle.classList.add('nav-toggle');
    document.querySelector('header').appendChild(navToggle);

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

    // Scroll-triggered animations
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    });

    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });

    // Case study slider
    const slider = document.querySelector('.case-study-slider');
    if (slider) {
        let isDown = false;
        let startX;
        let scrollLeft;

        slider.addEventListener('mousedown', (e) => {
            isDown = true;
            slider.classList.add('active');
            startX = e.pageX - slider.offsetLeft;
            scrollLeft = slider.scrollLeft;
        });
        slider.addEventListener('mouseleave', () => {
            isDown = false;
            slider.classList.remove('active');
        });
        slider.addEventListener('mouseup', () => {
            isDown = false;
            slider.classList.remove('active');
        });
        slider.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - slider.offsetLeft;
            const walk = (x - startX) * 3; //scroll-fast
            slider.scrollLeft = scrollLeft - walk;
        });
    }

    // Pricing toggle
    const pricingToggle = document.querySelector('.pricing-toggle');
    if (pricingToggle) {
        const monthlyButton = pricingToggle.querySelector('button:first-child');
        const annuallyButton = pricingToggle.querySelector('button:last-child');
        const prices = document.querySelectorAll('.price');

        monthlyButton.addEventListener('click', () => {
            monthlyButton.classList.add('active');
            annuallyButton.classList.remove('active');
            prices[0].textContent = '$199/month';
            prices[1].textContent = '$499/month';
        });

        annuallyButton.addEventListener('click', () => {
            annuallyButton.classList.add('active');
            monthlyButton.classList.remove('active');
            prices[0].textContent = '$1990/year';
            prices[1].textContent = '$4990/year';
        });
    }

    // FAQ accordion
    const faqItems = document.querySelectorAll('.faq-item');
    if (faqItems) {
        faqItems.forEach(item => {
            const header = item.querySelector('.faq-item-header');
            header.addEventListener('click', () => {
                item.classList.toggle('active');
            });
        });
    }
});
