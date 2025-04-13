document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".know-more");
  
    buttons.forEach(button => {
      button.addEventListener("click", () => {
        alert(button.getAttribute("data-info"));
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
    



    
  
    // SCROLLSPY STARTS HERE
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-links a");
  
    window.addEventListener("scroll", () => {
      let current = "";
  
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
          current = section.getAttribute("id");
        }
      });
  
      navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${current}`) {
          link.classList.add("active");
        }
      });
    });
  });

  
  