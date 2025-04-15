// Prevent browser from restoring scroll position on reload
if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}

// Nav bar section menu glows as you scroll
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".section-anchor");

function activateNavLink() {
  let scrollY = window.scrollY + 200;

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute("id");

    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      navLinks.forEach((link) => {
        link.classList.remove("active-glow");
        if (link.getAttribute("href") === `#${sectionId}`) {
          link.classList.add("active-glow");
        }
      });
    }
  });
}
window.addEventListener("scroll", activateNavLink);

// DOMContentLoaded block
document.addEventListener("DOMContentLoaded", () => {
 
  // Logo click scroll to top
  const logo = document.querySelector(".navbar-brand");
  logo.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  // Project video play on hover
  document.querySelectorAll('.project-video').forEach(video => {
    video.addEventListener('mouseenter', () => {
      video.play();
    });

    video.addEventListener('mouseleave', () => {
      video.pause();
      video.currentTime = 0;
      video.load(); // Reset to show poster
    });
  });

  // Section reveal on scroll
  const revealSections = document.querySelectorAll(".section");

  const revealOnScroll = () => {
    const triggerBottom = window.innerHeight * 0.85;

    revealSections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top;
      const sectionBottom = section.getBoundingClientRect().bottom;

      if (sectionTop < triggerBottom && sectionBottom > 0) {
        section.classList.add("reveal");
      } else {
        section.classList.remove("reveal");
      }
    });
  };

  window.addEventListener("scroll", revealOnScroll);
  window.addEventListener("load", revealOnScroll);

  // Collapse navbar on link click with smooth scroll
  const navCollapse = document.querySelector(".navbar-collapse");
  const navItems = document.querySelectorAll(".navbar-nav li a");

  navItems.forEach(link => {
    link.addEventListener("click", () => {
      navCollapse.classList.remove("in");
      navCollapse.classList.add("collapse");

      const target = document.querySelector(link.getAttribute("href"));
      window.scrollTo({
        top: target.offsetTop - 50,
        behavior: 'smooth'
      });
    });
  });

  // Scrollspy
  const navLinkElements = document.querySelectorAll(".nav-links ul li a");

  window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 100;
      const sectionHeight = section.offsetHeight;
      if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
        current = section.getAttribute("id");
      }
    });

    navLinkElements.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  });

  // jQuery smooth scroll
  $(document).ready(function () {
    $(".navbar-nav li a").click(function (e) {
      e.preventDefault();
      $("html, body").animate({
        scrollTop: $($(this).attr("href")).offset().top - 50
      }, 600);
    });
  });
});
