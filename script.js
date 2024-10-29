document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    alert('Thank you for your message!');
    // Here you can add functionality to send form data to a server if needed
});
