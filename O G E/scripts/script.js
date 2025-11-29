// Hamburger menu
const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('main-nav');
if (hamburger && nav) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        nav.classList.toggle('open');
    });
    // Close menu on nav click (mobile)
    nav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            nav.classList.remove('open');
        });
    });
}

// Dynamic Footer
const footer = document.getElementById('footer');
if (footer) {
    footer.innerHTML = `
    <div>
      &copy; <span id="year"></span> MIAH TECH &mdash; Designed for modern TECHNOLOGY |
      <a href="mailto:info@miahtech.com">Contact</a>
    </div>
  `;
    document.getElementById('year').textContent = new Date().getFullYear();
}

// Animate on load (for .animate-fade, .animate-slide)
window.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.animate-fade, .animate-slide').forEach(el => {
        el.style.opacity = '1';
        el.style.transform = 'none';
    });

    // Booking form success
    const admissionForm = document.querySelector('.booking-form');
    if (bookingForm) {
        bookingForm.addEventListener('submit', function(e) {
            e.preventDefault();
            bookingForm.style.display = 'none';
            document.getElementById('booking-success').style.display = 'block';
        });
    }
    // Contact form success
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            contactForm.style.display = 'none';
            document.getElementById('contact-success').style.display = 'block';
        });
    }
});