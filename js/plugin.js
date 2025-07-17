let lastScrollY = $(window).scrollTop();
const $header = $('.header_holder');

function handleHeader() {
  const currentScrollY = $(window).scrollTop();

  if ($(window).width() > 1024) {
    if (currentScrollY > 166) {
      if (currentScrollY < lastScrollY) {
        // Scrolling up
        $header.removeClass('fade-out').addClass('fade-in fixheader');
      } else {
        // Scrolling down
        $header.removeClass('fade-in fixheader').addClass('fade-out');
      }
    } else {
      // At top of page
      $header.removeClass('fade-in fade-out fixheader');
    }
  }

  lastScrollY = currentScrollY;
}

// Run on scroll
$(window).on('scroll', handleHeader);

// 🟡 Run once on load — hide header if not at top
$(document).ready(function () {
  if ($(window).scrollTop() > 166) {
    $header.addClass('fade-out'); // hides it immediately
  }
});


// Hamburger Menu
document.getElementById('hamburger').addEventListener('click', function () {
  document.getElementById('hamburger').classList.toggle('active');
  document.getElementById('nav-menu').classList.toggle('active');
  document.getElementById('nav-menu-overlay').classList.toggle('active');
  document.body.classList.toggle('nav-open'); // Optional: prevent scroll
});

// Close menu when overlay is clicked
document.getElementById('nav-menu-overlay').addEventListener('click', function () {
  document.getElementById('hamburger').classList.remove('active');
  document.getElementById('nav-menu').classList.remove('active');
  document.getElementById('nav-menu-overlay').classList.remove('active');
  document.body.classList.remove('nav-open');
});

// Close menu when any nav link is clicked
document.querySelectorAll('#nav-menu a').forEach(function (link) {
  link.addEventListener('click', function () {
    document.getElementById('hamburger').classList.remove('active');
    document.getElementById('nav-menu').classList.remove('active');
    document.getElementById('nav-menu-overlay').classList.remove('active');
    document.body.classList.remove('nav-open');
  });
});


//Copright Year
let pubYear = "2022";
let currentYear = new Date().getFullYear();
document.getElementById('copy_year').textContent = pubYear + " - " + currentYear;

//Adjust anchor link position
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const headerOffset = 50; 
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  });
});

//Form validation
document.getElementById('contactForm').addEventListener('submit', function(e) {
  const name = this.name.value.trim();
  const email = this.email.value.trim();
  const message = this.message.value.trim();

  if (!name || !email || !message) {
    e.preventDefault();
    alert('Please fill out all fields.');
  }
});

//Slick carousel
$(document).ready(function(){
  $('.projects_cards').slick({
    slidesToShow: 4,
    autoplay: true,
    autoplaySpeed: 2000,

    responsive: [
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1
      }
    }
  ]
  });
});