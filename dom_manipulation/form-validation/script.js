document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const firstNameInput = document.getElementById('firstName');
    const lastNameInput = document.getElementById('lastName');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    const firstNameError = document.getElementById('firstNameError');
    const lastNameError = document.getElementById('lastNameError');
    const emailError = document.getElementById('emailError');
    const messageError = document.getElementById('messageError');

    contactForm.addEventListener('submit', function(event) {
        let isValid = true;

        // Validate first name
        if (!firstNameInput.value.trim()) {
            isValid = false;
            firstNameError.textContent = 'First name is required';
        } else if(!firstNameInput.value.length < 3) {
            isValid = false;
            firstNameError.textContent = 'First name must be at least 3 characters';
        }
        else {
            firstNameError.textContent = '';
        }

        // Validate last name
        if (!lastNameInput.value.trim()) {
            isValid = false;
            lastNameError.textContent = 'Last name is required';
        } else {
            lastNameError.textContent = '';
        }

        // Validate email
        if (!isValidEmail(emailInput.value)) {
            isValid = false;
            emailError.textContent = 'Invalid email address';
        } else {
            emailError.textContent = '';
        }

        // Validate message
        if (!messageInput.value.trim()) {
            isValid = false;
            messageError.textContent = 'Message is required';
        } else {
            messageError.textContent = '';
        }

        if (!isValid) {
            event.preventDefault();
        }
    });

    // Clear error messages on input
    [firstNameInput, lastNameInput, emailInput, messageInput].forEach(input => {
        input.addEventListener('input', function() {
            document.getElementById(`${input.id}Error`).textContent = '';
        });
    });

    function isValidEmail(email) {
        // Simple email validation, you can enhance it as needed
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});
