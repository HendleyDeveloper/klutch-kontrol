// Enquiry form functionality

function sendMail(event) {
    event.preventDefault(); // Prevent the form from refreshing the page

    let parms = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        enquiry: document.getElementById("enquiry").value,
    };

    emailjs
        .send("service_7z5gd6h", "template_vk9ve6q", parms)
        .then(() => {
            alert("Enquiry Sent.");
        })
        .catch((error) => {
            console.error("Failed to send email:", error);
            alert("Failed to send Enquiry. Please try again.");
        });
}

// EmailJS

document.addEventListener("DOMContentLoaded", function () {
    emailjs.init("nLNQPjE2btCQuB3aX");
  });

// Handle anchor links with href="#"
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);

      // Calculate the offset from the top of the page (navbar height)
      const navbarHeight = document.querySelector('.navbar').offsetHeight;

      window.scrollTo({
        top: targetElement.offsetTop - navbarHeight,
        behavior: 'smooth'  // Smooth scrolling
      });
    });
  });

  // Handle buttons with onclick="scrollToSection('#sectionId')"
  function scrollToSection(id) {
    const targetElement = document.getElementById(id);
    if (targetElement) {
      // Calculate the offset from the top of the page (navbar height)
      const navbarHeight = document.querySelector('.navbar').offsetHeight;

      window.scrollTo({
        top: targetElement.offsetTop - navbarHeight,
        behavior: 'smooth'  // Smooth scrolling
      });
    }
  }