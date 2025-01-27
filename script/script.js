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