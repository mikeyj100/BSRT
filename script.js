document.addEventListener('DOMContentLoaded', function() {
  const navLinks = document.querySelectorAll('.navbar ul li a');
  const sections = document.querySelectorAll('.banner, .banner2, .banner3');

  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const mapContainers = document.querySelectorAll('.map-container');
  const mapToggleBtn = document.querySelector('.map-toggle-btn');

  mapToggleBtn.addEventListener('click', function() {
    mapContainers.forEach(function(container) {
      container.classList.toggle('active');
    });

    if (mapContainers[0].classList.contains('active')) {
      mapToggleBtn.textContent = 'View St Mary\'s';
    } else {
      mapToggleBtn.textContent = 'View Pip \'n\' Jay';
    }
  });
});