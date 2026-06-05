const form = document.getElementById('contactForm');

if (form) {
  form.addEventListener('submit', function (event) {
    event.preventDefault();
    alert('Thanks! Your message has been sent. We will contact you soon.');
    form.reset();
  });
}
