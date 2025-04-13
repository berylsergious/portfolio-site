// Prevent browser from restoring scroll position on reload
if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}
// Nav bar section menu glows as you scroll
const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".section-anchor");

  function activateNavLink() {
    let scrollY = window.scrollY + 200; // Adjust if your navbar is sticky

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

  // Nav bar glows ends here

document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".know-more");
  
    buttons.forEach(button => {
      button.addEventListener("click", () => {
        alert(button.getAttribute("data-info"));
      });
    });

    

    // Add event listener for logo click to scroll to top
  const logo = document.querySelector(".navbar-brand");
  logo.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

    const revealSections = document.querySelectorAll(".section");

    const revealOnScroll = () => {
      const triggerBottom = window.innerHeight * 0.85;
    
      revealSections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionBottom = section.getBoundingClientRect().bottom;
    
        if (sectionTop < triggerBottom && sectionBottom > 0) {
          section.classList.add("reveal");
        } else {
          section.classList.remove("reveal"); // Un-reveal when out of view
        }
      });
    };
    
    window.addEventListener("scroll", revealOnScroll);
    window.addEventListener("load", revealOnScroll);
    

    const navLinks = document.querySelector(".navbar-collapse"); // This is the hamburger menu
    const links = document.querySelectorAll(".navbar-nav li a"); // All menu links
  
    // Add event listener to each menu link
    links.forEach(link => {
      link.addEventListener("click", () => {
        // Collapse the navbar after a menu item is clicked
        navLinks.classList.remove("in");  // 'in' is the class added to show the menu in Bootstrap 3
        navLinks.classList.add("collapse"); // This will collapse the menu
  
        // Smooth scroll to the section
        const target = document.querySelector(link.getAttribute("href"));
        window.scrollTo({
          top: target.offsetTop - 50,  // Adjust the scroll position to avoid header overlap
          behavior: 'smooth'
        });
      });
    });
    
   
    
  
    // SCROLLSPY STARTS HERE
const sections = document.querySelectorAll("section");
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

  // Smooth scroll on link click
  $(document).ready(function(){
    $(".navbar-nav li a").click(function(e){
      e.preventDefault();
      $("html, body").animate({
        scrollTop: $($(this).attr("href")).offset().top - 50
      }, 600);
    });
  });


  });

  
  