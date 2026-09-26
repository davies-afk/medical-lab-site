const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');
const year = document.getElementById('year');
const form = document.querySelector('.contact-form');

if (year) {
    year.textContent = new Date().getFullYear();
}

if (navToggle && nav) {
    navToggle.addEventListener('click', () => {
        const isOpen = nav.classList.toggle('open');
        navToggle.setAttribute('aria-expanded', String(isOpen));
    });
}

if (form) {
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const button = form.querySelector('button');
        const originalText = button.textContent;

        button.textContent = 'Request Sent';
        button.disabled = true;

        setTimeout(() => {
            button.textContent = originalText;
            button.disabled = false;
            form.reset();
        }, 2200);
    });
}
