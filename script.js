document.getElementById('registrationForm').addEventListener('submit', function (event) {

    event.preventDefault();

    let isValid = true;

    // Full Name Validation

    const fullName = document.getElementById('fullName');

    const fullNameError = document.getElementById('fullNameError');

    if (!fullName.value.trim()) {

        fullNameError.textContent = 'Full name is required.';

        isValid = false;

    } else {

        fullNameError.textContent = '';

    }

    // Email Validation

    const email = document.getElementById('email');

    const emailError = document.getElementById('emailError');

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email.value)) {

        emailError.textContent = 'Please enter a valid email address.';

        isValid = false;

    } else {

        emailError.textContent = '';

    }

    // Phone Validation

    const phone = document.getElementById('phone');

    const phoneError = document.getElementById('phoneError');

    const phonePattern = /^\d{10}$/;

    if (!phonePattern.test(phone.value)) {

        phoneError.textContent = 'Please enter a 10-digit phone number.';

        isValid = false;

    } else {

        phoneError.textContent = '';

    }

    // Ticket Type Validation

    const ticketType = document.getElementById('ticketType');

    const ticketError = document.getElementById('ticketError');

    if (!ticketType.value) {

        ticketError.textContent = 'Please select a ticket type.';

        isValid = false;

    } else {

        ticketError.textContent = '';

    }

    if (isValid) {

        alert('Registration successful!');

        this.reset();

    }

});
